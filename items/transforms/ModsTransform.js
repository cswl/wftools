import shell from 'shelljs';

import path from 'path';
import pkgDir from 'pkg-dir';
import modsData from '../warframe-items/data/json/Mods.json';

import * as jsonfs from '../utils/jsonfs';
import murmurhash3 from '../utils/murmurhash';

import {
  isEmpty,
  withOut,
  filterEntries,
  countKeys,
} from '../utils/ObjectUtils';
import DebugLogger from '../utils/debuglog';

const enableDebug = false;
const debug = new DebugLogger(enableDebug);

// Directories to export the mods
const modulesDir = path.join(pkgDir.sync(), 'modules');
const modsDir = {
  root: path.join(modulesDir, 'mods'),
  pve: path.join(modulesDir, 'mods', 'PvE'),
  conclave: path.join(modulesDir, 'mods', 'PvP'),
};

// Parse constants
const concalveModRegex = /Mods\/PvPMods/;
const unknownModType = '---';
const modNametoObjRegex = /(\s|-)/g;
const modHoverboardRegex = /Mods\/Hoverboard/;
const transmuteCoreRegex = /Mods\/TransmuteCores/;

// Schema for our Mods
const MODS_SCHEMA = () => ({ base: {}, patch: {}, drops: {} });

// Stats object
const modStats = {
  pvp: {},
  pve: {},
  transmuteCores: {},
  blob: 0,
};

const updateStatCount = (modsParsed, category) => {
  if (!isEmpty(modsParsed.conclave)) {
    modStats.pvp[category] = countKeys(modsParsed.conclave.base);
  }

  modStats.pve[category] = countKeys(modsParsed.pve.base);
};

// This mess of a reducer maps each mod to an array with
// [baseStats, patchlogs, dropsData]
const modsListReducer = (acc, mod) => {
  // Creates a object name and hash from
  const objName = mod.name.replace(modNametoObjRegex, '');
  const { uniqueName } = mod;
  const isConclave = concalveModRegex.test(uniqueName) ? 'conclave' : 'pve';

  const objHash = murmurhash3(mod.uniqueName);

  const baseStats = withOut(mod, ['drops', 'patchlogs', 'category']);
  acc[isConclave].base[objName] = { ...baseStats, hash: objHash };

  const { patchlogs } = mod;
  if (!isEmpty(patchlogs)) {
    acc[isConclave].patch[objHash] = patchlogs;
  }
  const dropsData = mod.drops;
  if (!isEmpty(dropsData)) {
    acc[isConclave].drops[objHash] = dropsData;
  }
  return acc;
};

async function writeJSONData(category, dir) {
  // Create a directory for the category
  shell.mkdir('-p', dir);

  const fops = Object.entries(category).map(async ([file, data]) => {
    const fpath = path.join(dir, `${file}.json`);
    return jsonfs.write(fpath, data, { spaces: 2 });
  });
  const jobs = await Promise.all(fops);
  console.log(`Wrote: ${dir}`);
  return jobs;
}

export default async function ParseMods() {
  // Create our base directories
  shell.mkdir('-p', modsDir.pve);
  shell.mkdir('-p', modsDir.conclave);

  // Write the initial stats
  modStats.blob = modsData.length + 1;

  // Get Mods types and filter unknown types
  const modTypes = Array.from(
    new Set(modsData.map(e => e.type).filter(e => e !== unknownModType)),
  );

  // Sort them each by their  category
  const modsCategorized = modTypes.reduce((list, elem) => {
    return { ...list, [elem]: modsData.filter(t => t.type === elem) };
  }, {});

  // For each mod in the category
  const jobs = Object.entries(modsCategorized).map(async ([t, modsList]) => {
    debug.log('reducer:', t, modsList);
    const modsParsed = modsList.reduce(modsListReducer, {
      pve: MODS_SCHEMA(),
      conclave: MODS_SCHEMA(),
    });
    debug.log(modsParsed);
    // Now we write each of the data to modular files
    updateStatCount(modsParsed, t);
    const writePVE = writeJSONData(modsParsed.pve, path.join(modsDir.pve, t));
    const writeConclave = isEmpty(modsParsed.conclave.base)
      ? Promise.resolve(true)
      : writeJSONData(modsParsed.conclave, path.join(modsDir.conclave, t));
    return Promise.all([writePVE, writeConclave]);
  });
  await Promise.all(jobs);

  // This only contains K-drive and transmute cores but we'll check for future
  const modUnknownCategory = modsData.filter(t => t.type === unknownModType);
  const kdriveMods = modUnknownCategory.filter(mod =>
    modHoverboardRegex.test(mod.uniqueName),
  );
  const kdriveModsParsed = kdriveMods.reduce(modsListReducer, {
    pve: MODS_SCHEMA(),
    conclave: MODS_SCHEMA(),
  });
  const tramsmuteCores

  updateStatCount(kdriveModsParsed, 'KDrive');
  const writeKdrives = writeJSONData(
    kdriveModsParsed,
    path.join(modsDir.pve, 'KDrive'),
  );
  const tramsmuteCores = filterEntries(modsParsed.pve.base, ([key, mod]) =>
    transmuteCoreRegex.test(mod.uniqueName),
  );
  const writetramsmuteCores = writeJSONData(
    tramsmuteCores,
    path.join(modsDir.root, 'TransmuteCores'),
  );
  await Promise.all([writeKdrives, writetramsmuteCores]);

  console.log(modStats);
}

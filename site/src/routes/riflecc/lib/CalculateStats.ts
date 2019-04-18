import { getModFromName, MOD_NAMES } from "../data/mod_list";
import { STAT_NAMES } from "../data/weapons_list";
import { getRivenStats, RivenStatParser } from "./RivenStatsParser";

export function CalculateStats(formData, weaponStats) {
  const chroma_str = formData.chroma_vex.value;
  const parsedrivenStats = RivenStatParser();
  console.log(parsedrivenStats);
  return parsedrivenStats.map(rivenObj => {
    const atteunation = weaponStats.atteunation;
    const selectedMods = [...weaponStats.primary_mods, ...formData.userSelectedMods];
    const rivenStats = getRivenStats(atteunation, formData.has_curse, rivenObj);
    const rivenValues: RivenValuesIface = getRivenValues(rivenStats);

    // console.log(atteunation, mod_ms, mod_dmg, mod_cd, mod_cc);

    const stat_names = Object.keys(rivenStats).reduce((str, k) => {
      str = str || [];
      if (rivenStats[k].value > 0) {
        // Show Elemental Damage As Heat/Electricity
        const name =
          rivenStats[k].name === STAT_NAMES.ELEM ? "Heat/Electricity" : rivenStats[k].name;
        str.push({ value: rivenStats[k].value, name });
      }
      return str;
    }, []);

    const mod_multi = checkAndGetMod(selectedMods, [
      MOD_NAMES.SplitChamber,
      MOD_NAMES.VigiArna
    ]);
    const mod_dmg = checkAndGetMod(selectedMods, [MOD_NAMES.HeavvyCal, MOD_NAMES.Serration]);
    const mod_cd = checkAndGetMod(selectedMods, [MOD_NAMES.VitalSense]);
    const mod_cc = checkAndGetMod(selectedMods, [MOD_NAMES.PointStrike]);

    // console.log(mod_multi, mod_dmg, mod_cd, mod_cc, rivenValues);

    // Calculate the guranteed and potential multishot instead of calculating average.
    const expected_multi = (mod_multi + rivenValues.ms) / 100;
    const lucky_ms = formData.lucky_ms ? 1 : 0;
    const lucky_ms_chance = (expected_multi - Math.floor(expected_multi)) * 100;
    const total_multi = 1 + Math.floor(expected_multi) + lucky_ms;

    //
    const total_mod_dmg = (mod_dmg + rivenValues.dmg) / 100;
    const total_dmg_base = total_mod_dmg + 2.75 * (chroma_str / 100);
    const total_dmg = total_dmg_base * total_multi;

    let total_dmg_text = {};

    let total_base_dmg = 0;
    let total_physical_dmg = 0;

    // It's different for Pure Elemental VS IPS Based Weapons
    if (weaponStats.pure_elemental === false) {
      total_base_dmg = weaponStats.base_dmg * total_dmg;
      total_physical_dmg = total_base_dmg;
    } else if (weaponStats.pure_elemental === true) {
      total_base_dmg = weaponStats.base_element.value * total_dmg;
    }

    // Elemental Damage Calculation
    const heat_elec_dmg = rivenValues.elem > 0 ? rivenValues.elem / 100 : 1;
    const elemental_dmgs = [{ name: "Radiation", val: total_base_dmg * 1.8 * heat_elec_dmg }];

    const primed_cyro = checkAndGetMod(selectedMods, [MOD_NAMES.PCR]);

    if (primed_cyro > 0) {
      elemental_dmgs.push({ name: "Cold", val: total_base_dmg * (primed_cyro / 100) });
    }

    total_dmg_text = {
      base: total_dmg_base,
      multi: total_multi,
      total_dmg,
      total_physical_dmg,
      pure_elemental: weaponStats.pure_elemental,
      elementals: elemental_dmgs,
      lucky_ms_toggle: formData.lucky_ms,
      lucky_ms_chance
    };

    let flat_cd = 0;
    if (weaponStats.scope_bonus.type === "cd") {
      flat_cd = (weaponStats.base_cd * weaponStats.scope_bonus.value) / 100;
    }

    let flat_cc = 0;
    if (weaponStats.scope_bonus.type === "cc") {
      flat_cc = weaponStats.scope_bonus.value;
    }

    const total_mod_cd = mod_cd + rivenValues.cd;
    const total_mod_cc = mod_cc + rivenValues.cc;
    const crit_mult = weaponStats.base_cd * (1 + total_mod_cd / 100 + flat_cd);
    const crit_chnc = weaponStats.base_cc * (1 + total_mod_cc / 100) + flat_cc;
    // console.log('cc', crit_chnc, total_mod_cc, flat_cc);

    let crit_yellow_probs;
    if (crit_chnc < 100.1) {
      crit_yellow_probs = (crit_chnc / 100) ** total_multi;
      crit_yellow_probs = `${(crit_yellow_probs * 100).toFixed(2)} % Chance`;
    } else {
      crit_yellow_probs = "Guaranteed Chance";
    }

    const crit_yellow_text = {
      mult: crit_mult,
      incr: total_dmg * crit_mult,
      prob: crit_yellow_probs
    };

    let crit_orange_probs = 0;
    let crit_orange_mult = 0;
    if (crit_chnc > 100.1) {
      crit_orange_mult = 2 * (crit_mult - 1) + 1;
      crit_orange_probs = ((crit_chnc - 100) / 100) ** total_multi;
      crit_orange_probs = crit_orange_probs * 100;
    }
    // console.log(crit_orange_probs, crit_orange_mult);
    const crit_orange_text = {
      mult: truncateDecimalForDisplay(crit_orange_mult),
      incr: truncateDecimalForDisplay(total_dmg * crit_orange_mult),
      prob: truncateDecimalForDisplay(crit_orange_probs)
    };

    return {
      stat_names,
      dmg: total_dmg_text,
      crityellow: crit_yellow_text,
      critorange: crit_orange_text
    };
  });
}

function checkAndGetMod(list, names) {
  return names.reduce((acc, m) => {
    if (list.includes(m)) {
      return acc + getModFromName(m).value;
    } else {
      return acc;
    }
  }, 0);
}

interface RivenValuesIface {
  [key: string]: number;
}

function getRivenValues(rivenStats): RivenValuesIface {
  return Object.keys(rivenStats).reduce((o, k) => {
    o[k] = rivenStats[k].value;
    return o;
  }, {});
}

function truncateDecimalForDisplay(num: number) {
  let str = num.toString();
  if (str.indexOf(".") > 0) {
    str = str.slice(0, str.indexOf(".") + 3);
    return Number(str);
  } else {
    return num;
  }
}

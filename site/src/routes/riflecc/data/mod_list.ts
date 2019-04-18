export const MOD_TYPES = {
  DMG: "dmg",
  MS: "ms",
  CC: "cc",
  CD: "cd",
  ELE_HEAT: "heat",
  ELE_ELEC: "elec",
  ELE_COLD: "cold"
};

export const MOD_NAMES = {
  Serration: "Serration",
  HeavvyCal: "Heavvy Caliber",
  SplitChamber: "Split Chamber",
  VigiArna: "Vigilante Arnaments",
  PointStrike: "Point Strike",
  VitalSense: "Vital Sense",
  PCR: "Primed Cyro Rounds",
  Hellfire: "Hellfire",
  Stormbinger: "Stormbringer"
};

export const ModsList = [
  {
    name: MOD_NAMES.Serration,
    value: 165,
    type: MOD_TYPES.DMG
  },
  {
    name: MOD_NAMES.HeavvyCal,
    value: 165,
    type: MOD_TYPES.DMG
  },
  {
    name: MOD_NAMES.SplitChamber,
    value: 90,
    type: MOD_TYPES.MS
  },
  {
    name: MOD_NAMES.VigiArna,
    value: 60,
    type: MOD_TYPES.MS
  },
  {
    name: MOD_NAMES.PointStrike,
    value: 150,
    type: MOD_TYPES.CC
  },
  {
    name: MOD_NAMES.VitalSense,
    value: 120,
    type: MOD_TYPES.CD
  },
  {
    name: MOD_NAMES.Hellfire,
    value: 90,
    type: MOD_TYPES.ELE_HEAT
  },
  {
    name: MOD_NAMES.Stormbinger,
    value: 90,
    type: MOD_TYPES.ELE_ELEC
  },
  {
    name: MOD_NAMES.PCR,
    value: 165,
    type: MOD_TYPES.ELE_COLD
  }
];

export function getModFromName(name) {
  return ModsList.find(e => e.name === name);
}

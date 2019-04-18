import { MOD_NAMES } from "./mod_list";

export const PreferredRivenStats = ["Damage", "Multishot", "Crit Damage", "Crit Chance"];
export const SatisfiedRivenStats = ["Elemental Damage"];

export const STAT_NAMES = {
  DMG: "Damage",
  MS: "Multishot",
  CD: "Crit Damage",
  CC: "Crit Chance",
  ELEM: "Elemental Damage"
};

export const WeaponsList = [
  {
    name: "Lanka",
    base_cc: 25,
    base_cd: 2,
    atteunation: 1.105,
    pure_elemental: true,
    base_element: {
      type: "Electricity",
      value: 525
    },
    scope_bonus: {
      type: "cc",
      value: 50
    },
    primary_mods: [
      MOD_NAMES.PointStrike,
      MOD_NAMES.VitalSense,
      MOD_NAMES.SplitChamber,
      MOD_NAMES.Hellfire,
      MOD_NAMES.Stormbinger
    ],
    secondary_mods: [
      MOD_NAMES.Serration,
      MOD_NAMES.HeavvyCal,
      MOD_NAMES.VigiArna,
      MOD_NAMES.PCR
    ],
    secondary_prefer: [MOD_NAMES.VigiArna, MOD_NAMES.PCR]
  },
  // {
  //   name: 'Vectis',
  //   base_cc: 30,
  //   base_cd: 2,
  //   scope_bonus: {
  //     type: 'hd',
  //     value: 60
  //   }
  // },
  {
    name: "Rubico Prime",
    base_cc: 38,
    base_cd: 3,
    atteunation: 1.105,
    base_dmg: 187,
    pure_elemental: false,
    scope_bonus: {
      type: "cd",
      value: 50
    },
    primary_mods: [
      MOD_NAMES.PointStrike,
      MOD_NAMES.VitalSense,
      MOD_NAMES.SplitChamber,
      MOD_NAMES.Hellfire,
      MOD_NAMES.Stormbinger
    ],
    secondary_mods: [
      MOD_NAMES.Serration,
      MOD_NAMES.HeavvyCal,
      MOD_NAMES.VigiArna,
      MOD_NAMES.PCR
    ],
    secondary_prefer: [MOD_NAMES.VigiArna, MOD_NAMES.PCR]
  }
];

export const RivenValues = [
  {
    text: "|val|% Multishot",
    curse: true,
    value: 90.0
  },
  {
    text: "|val|% Damage",
    curse: true,
    value: 165.0
  },
  {
    text: "|val|% Physical Damage",
    curse: true,
    value: 119.97
  },
  {
    text: "|val|% Crit Chance",
    curse: true,
    value: 149.99
  },
  {
    text: "|val|% Crit Damage",
    curse: true,
    value: 120.0
  },
  {
    text: "|val|% Elemental Damage",
    value: 90.0
  },
  {
    text: "|val|% Status Chance",
    curse: true,
    value: 90.0
  },
  {
    text: "|val|% Status Duration",
    curse: true,
    value: 99.99
  },
  {
    text: "|val|% Damage to Faction",
    curse: true,
    value: 45.0
  },
  {
    text: "|val|% Fire Rate (x2 for Bows)",
    curse: true,
    value: 60.03
  },
  {
    text: "|val|% Magazine Capacity",
    curse: true,
    value: 50.0
  },
  {
    text: "|val|% Ammo Maximum",
    curse: true,
    value: 49.95
  },
  {
    text: "|val|% Flight Speed",
    curse: true,
    value: 90.0
  },
  {
    text: "|val|% Reload Speed",
    curse: true,
    value: 50.0
  },
  {
    text: "|val|% Weapon Recoil",
    curse: true,
    value: -90.0
  },
  {
    text: "|val|% Zoom",
    curse: true,
    value: 59.99
  },
  {
    text: "|val| Punch Through",
    value: 2.7
  }
];

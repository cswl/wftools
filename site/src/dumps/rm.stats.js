var statsData = {
  Damage: {
    id: "1",
    Name: "Damage",
    Pre: "+",
    Unit: "%",
    Desc: "Damage",
    MeleeDesc: "Melee Damage",
    Prefix: "Visi",
    Suffix: "ata",
    MeleeOnly: false,
    IconURL: ""
  },
  Multi: {
    id: "2",
    Name: "Multishot",
    Pre: "+",
    Unit: "%",
    Desc: "Multishot",
    Prefix: "Sati",
    Suffix: "can",
    MeleeOnly: false,
    IconURL: ""
  },
  Speed: {
    id: "3",
    Name: "Fire Rate / Attack Speed",
    Pre: "+",
    Unit: "%",
    Desc: "Fire Rate",
    MeleeDesc: "Attack Speed",
    Prefix: "Croni",
    Suffix: "dra",
    MeleeOnly: false,
    IconURL: ""
  },
  Corpus: {
    id: "4",
    Name: "Damage to Corpus",
    Pre: "+",
    Unit: "%",
    Desc: "Damage to Corpus",
    Prefix: "Manti",
    Suffix: "tron",
    MeleeOnly: false,
    IconURL: ""
  },
  Grineer: {
    id: "5",
    Name: "Damage to Grineer",
    Pre: "+",
    Unit: "%",
    Desc: "Damage to Grineer",
    Prefix: "Argi",
    Suffix: "con",
    MeleeOnly: false,
    IconURL: ""
  },
  Infested: {
    id: "6",
    Name: "Damage to Infested",
    Pre: "+",
    Unit: "%",
    Desc: "Damage to Infested",
    Prefix: "Pura",
    Suffix: "ada",
    MeleeOnly: false,
    IconURL: ""
  },
  Impact: {
    id: "7",
    Name: "Impact",
    Pre: "+",
    Unit: "%",
    Desc: "Impact",
    Prefix: "Magna",
    Suffix: "ton",
    MeleeOnly: false,
    IconURL: "impact_c.png"
  },
  Puncture: {
    id: "8",
    Name: "Puncture",
    Pre: "+",
    Unit: "%",
    Desc: "Puncture",
    Prefix: "Insi",
    Suffix: "cak",
    MeleeOnly: false,
    IconURL: "puncture_c.png"
  },
  Slash: {
    id: "9",
    Name: "Slash",
    Pre: "+",
    Unit: "%",
    Desc: "Slash",
    Prefix: "Sci",
    Suffix: "sus",
    MeleeOnly: false,
    IconURL: "slash_c.png"
  },
  Cold: {
    id: "10",
    Name: "Cold",
    Pre: "+",
    Unit: "%",
    Desc: "Cold",
    Prefix: "Geli",
    Suffix: "do",
    MeleeOnly: false,
    IconURL: "cold_c.png"
  },
  Electric: {
    id: "11",
    Name: "Electric",
    Pre: "+",
    Unit: "%",
    Desc: "Electricity",
    Prefix: "Vexi",
    Suffix: "tio",
    MeleeOnly: false,
    IconURL: "electric_c.png"
  },
  Heat: {
    id: "12",
    Name: "Heat",
    Pre: "+",
    Unit: "%",
    Desc: "Heat",
    Prefix: "Igni",
    Suffix: "pha",
    MeleeOnly: false,
    IconURL: "fire_c.png"
  },
  Toxin: {
    id: "13",
    Name: "Toxin",
    Pre: "+",
    Unit: "%",
    Desc: "Toxin",
    Prefix: "Toxi",
    Suffix: "tox",
    MeleeOnly: false,
    IconURL: "poison_c.png"
  },
  ChannelDmg: {
    id: "14",
    Name: "Channeling Damage",
    Pre: "+",
    Unit: "%",
    Desc: "Damage while Channeling",
    Prefix: "Tori",
    Suffix: "bo",
    MeleeOnly: true,
    IconURL: ""
  },
  ChannelEff: {
    id: "15",
    Name: "Channeling Efficiency",
    Pre: "+",
    Unit: "%",
    Desc: "Efficiency while Channeling",
    Prefix: "Uti",
    Suffix: "tia",
    MeleeOnly: true,
    IconURL: ""
  },
  Combo: {
    id: "16",
    Name: "Combo Duration",
    Pre: "+",
    Unit: "s",
    Desc: "Combo Duration",
    Prefix: "Tempi",
    Suffix: "nem",
    MeleeOnly: true,
    IconURL: ""
  },
  CritChance: {
    id: "17",
    Name: "Critical Chance",
    Pre: "+",
    Unit: "%",
    Desc: "Critical Chance",
    Prefix: "Crita",
    Suffix: "cron",
    MeleeOnly: false,
    IconURL: ""
  },
  Slide: {
    id: "18",
    Name: "Slide Attack Critical Chance",
    Pre: "Slide Attack has +",
    Unit: "%",
    Desc: "chance to be a Critical Hit",
    Prefix: "Pleci",
    Suffix: "nent",
    MeleeOnly: true,
    IconURL: ""
  },
  CritDmg: {
    id: "19",
    Name: "Critical Damage",
    Pre: "+",
    Unit: "%",
    Desc: "Critical Damage",
    Prefix: "Acri",
    Suffix: "tis",
    MeleeOnly: false,
    IconURL: ""
  },
  Finisher: {
    id: "20",
    Name: "Finisher Damage",
    Pre: "+",
    Unit: "%",
    Desc: "Finisher Damage",
    Prefix: "Exi",
    Suffix: "cta",
    MeleeOnly: true,
    IconURL: ""
  },
  Flight: {
    id: "21",
    Name: "Flight Speed",
    Pre: "+",
    Unit: "%",
    Desc: "Projectile Flight Speed",
    Prefix: "Conci",
    Suffix: "nak",
    MeleeOnly: false,
    IconURL: ""
  },
  Ammo: {
    id: "22",
    Name: "Ammo Max",
    Pre: "+",
    Unit: "%",
    Desc: "Ammo Maximum",
    Prefix: "Ampi",
    Suffix: "bin",
    MeleeOnly: false,
    IconURL: ""
  },
  Magazine: {
    id: "23",
    Name: "Magazine Capacity",
    Pre: "+",
    Unit: "%",
    Desc: "Magazine Size",
    Prefix: "Arma",
    Suffix: "tin",
    MeleeOnly: false,
    IconURL: ""
  },
  Punch: {
    id: "24",
    Name: "Punch Through",
    Pre: "+",
    Unit: "",
    Desc: "Punch Through",
    Prefix: "Lexi",
    Suffix: "nok",
    MeleeOnly: false,
    IconURL: ""
  },
  Reload: {
    id: "25",
    Name: "Reload Speed",
    Pre: "+",
    Unit: "%",
    Desc: "Reload Speed",
    Prefix: "Feva",
    Suffix: "tak",
    MeleeOnly: false,
    IconURL: ""
  },
  Range: {
    id: "26",
    Name: "Range",
    Pre: "+",
    Unit: "%",
    Desc: "Range",
    Prefix: "Locti",
    Suffix: "tor",
    MeleeOnly: true,
    IconURL: ""
  },
  StatusC: {
    id: "27",
    Name: "Status Chance",
    Pre: "+",
    Unit: "%",
    Desc: "Status Chance",
    Prefix: "Hexa",
    Suffix: "dex",
    MeleeOnly: false,
    IconURL: ""
  },
  StatusD: {
    id: "28",
    Name: "Status Duration",
    Pre: "+",
    Unit: "%",
    Desc: "Status Duration",
    Prefix: "Deci",
    Suffix: "des",
    MeleeOnly: false,
    IconURL: ""
  },
  Recoil: {
    id: "29",
    Name: "Weapon Recoil",
    Pre: "-",
    Unit: "%",
    Desc: "Weapon Recoil",
    Prefix: "Zeti",
    Suffix: "mag",
    MeleeOnly: false,
    IconURL: ""
  },
  Zoom: {
    id: "30",
    Name: "Zoom",
    Pre: "+",
    Unit: "%",
    Desc: "Zoom",
    Prefix: "Hera",
    Suffix: "lis",
    MeleeOnly: false,
    IconURL: ""
  }
};

import {
  PreferredRivenStats,
  RivenValues,
  SatisfiedRivenStats,
  STAT_NAMES
} from "../data/weapons_list";

import { combinations_k as PermuteStats_nCr } from "./Combinations";

function RivenValuesParser() {
  const rivenValues = RivenValues;

  return rivenValues.map(r => {
    const name = r.text;
    return {
      text: name.substr(name.indexOf(" ") + 1),
      value: r.value
    };
  });
}

export function RivenStatParser() {
  // Permute all your wanted Stats.
  const rivenStats = [
    ...PermuteStats_nCr(PreferredRivenStats, 2),
    ...PermuteStats_nCr([...PreferredRivenStats, ...SatisfiedRivenStats], 3)
  ];

  const rivenValuesParsed = RivenValuesParser();

  return rivenStats.map(stats => {
    return stats.reduce((st, item) => {
      // console.log(item, rivenValuesParsed);
      const rv = rivenValuesParsed.find(e => e.text === item);
      if (rv !== undefined) {
        return {
          [rv.text]: { value: rv.value },
          ...st
        };
      } else {
        return st;
      }
    }, {});
  });
}

export function getRivenStats(base_atteunation, hasCurse, statList) {
  const riven_grade = 1.05; // Grade for B

  const nBuffs = Object.keys(statList).length;

  let atteunation = base_atteunation;
  if (hasCurse) {
    atteunation = base_atteunation * 1.25;
  }

  if (nBuffs === 2) {
    atteunation = atteunation * 0.66;
  } else if (nBuffs === 3) {
    atteunation = atteunation * 0.5;
  }

  atteunation = atteunation * 1.5;

  const dmg = { name: STAT_NAMES.DMG, value: 0 };
  const ms = { name: STAT_NAMES.MS, value: 0 };
  const cd = { name: STAT_NAMES.CD, value: 0 };
  const cc = { name: STAT_NAMES.CC, value: 0 };
  const elem = { name: STAT_NAMES.ELEM, value: 0 };
  if (statList.hasOwnProperty(STAT_NAMES.DMG)) {
    dmg.value = statList[STAT_NAMES.DMG].value * atteunation * riven_grade;
  }
  if (statList.hasOwnProperty(STAT_NAMES.MS)) {
    ms.value = statList[STAT_NAMES.MS].value * atteunation * riven_grade;
  }
  if (statList.hasOwnProperty(STAT_NAMES.CD)) {
    cd.value = statList[STAT_NAMES.CD].value * atteunation * riven_grade;
  }
  if (statList.hasOwnProperty(STAT_NAMES.CC)) {
    cc.value = statList[STAT_NAMES.CC].value * atteunation * riven_grade;
  }
  if (statList.hasOwnProperty(STAT_NAMES.ELEM)) {
    elem.value = statList[STAT_NAMES.ELEM].value * atteunation * riven_grade;
  }
  return {
    dmg,
    ms,
    cd,
    cc,
    elem
  };
}

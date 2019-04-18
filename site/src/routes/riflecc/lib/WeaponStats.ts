import { WeaponsList } from "../data/weapons_list";

export function getStatsFromName(name) {
  const found = WeaponsList.find(wep => wep.name === name);
  if (found) {
    return found;
  }
}

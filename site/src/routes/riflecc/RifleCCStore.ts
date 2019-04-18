import { ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core";

import { FormArray, FormBuilder, FormControl, Validators } from "@angular/forms";
import { patternValidator } from "./lib/FormValidatorsFn";

import { Sort } from "@angular/material";
import { MatSort, MatSortModule } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

import { WeaponsList } from "./data/weapons_list";

import { CalculateStats } from "./lib/CalculateStats";
import { getStatsFromName } from "./lib/WeaponStats";

import { generateMultiSelectData } from "../../directives/MultiSelect";

@Component({
  selector: "app-rifle-crit",
  templateUrl: "./rifle-crit.component.html",
  styleUrls: ["./rifle-crit.component.css"]
})
export class RifleCritComponent implements OnInit {
  public weaponsList = WeaponsList;
  public weaponsListNames;
  public default_weapon = "Rubico Prime";

  public dataSource = new MatTableDataSource();
  public displayedColumns: string[] = ["stat", "dmg", "crityellow", "critorange"];

  public WeaponsModsList = {
    primary: []
  };

  @ViewChild(MatSort) public sort: MatSort;

  public currentWeaponStats;
  public secondarySelectData = [];

  public rivenHasCurse = true;

  public formData = {
    chroma_vex: { value: 309, toggle: true },
    has_curse: true,
    userSelectedMods: [],
    lucky_ms: false
  };

  public weaponForm;
  public sortedData = [];

  constructor(private ref: ChangeDetectorRef, private formBuilder: FormBuilder) {
    this.weaponsListNames = this.weaponsList.map(w => w.name);

    this.weaponForm = this.formBuilder.group({
      weapon_name: new FormControl(),
      base_cc: new FormControl(),
      base_cd: new FormControl(""),
      scope_bonus: new FormControl(""),
      chroma_vex: new FormControl(308, [patternValidator(/^\d+$/)]),
      riven_hascurse: new FormControl([true]),
      lucky_shot: new FormControl(),
      userMods: new FormArray([])
    });
  }

  public ngOnInit() {
    this.ref.markForCheck();

    // Set default Weapon.
    this.weaponForm.controls.weapon_name.setValue(this.default_weapon, {
      onlySelf: true
    });

    // Setup default weapon and formData;
    this.currentWeaponStats = getStatsFromName(this.default_weapon);
    this.setWeaponStatsForm(this.currentWeaponStats, this.weaponForm);

    this.formData.userSelectedMods = this.currentWeaponStats.secondary_prefer;
    this.formData.lucky_ms = false;
    this.formData.chroma_vex.value = this.weaponForm.controls.chroma_vex.value;

    // Set defualt secondary data..
    this.secondarySelectData = generateMultiSelectData(
      this.currentWeaponStats.secondary_mods,
      this.currentWeaponStats.secondary_prefer
    );

    // Call to update Mods list
    this.updateModsList(this.currentWeaponStats);
    this.updateChanges();

    // Subscribe to Changes
    this.weaponForm.controls.weapon_name.valueChanges.subscribe(name => {
      this.currentWeaponStats = getStatsFromName(name);
      this.setWeaponStatsForm(this.currentWeaponStats, this.weaponForm);
      this.updateChanges();
    });

    this.weaponForm.controls.chroma_vex.valueChanges.subscribe(val => {
      if (this.weaponForm.controls.chroma_vex.valid) {
        this.formData.chroma_vex = {
          toggle: true,
          value: val
        };
        this.updateChanges();
      }
    });

    this.weaponForm.controls.lucky_shot.valueChanges.subscribe(value => {
      this.formData.lucky_ms = value;
      this.updateChanges();
    });

    this.weaponForm.controls.riven_hascurse.valueChanges.subscribe(value => {
      this.formData.has_curse = value;
      this.updateChanges();
    });
  }

  public setWeaponStatsForm(weaponStats, form) {
    form.controls.base_cc.setValue(weaponStats.base_cc);
    form.controls.base_cd.setValue(weaponStats.base_cd);

    let scope_text = "";
    if (weaponStats.scope_bonus.type === "cd") {
      scope_text = `${weaponStats.scope_bonus.value}% Critical Damage`;
    } else if (weaponStats.scope_bonus.type === "cc") {
      scope_text = `${weaponStats.scope_bonus.value}% Critical Chance`;
    } else if (weaponStats.scope_bonus.type === "hd") {
      scope_text = `${weaponStats.scope_bonus.value}% Headshot damage`;
    }
    form.controls.scope_bonus.setValue(scope_text);
  }

  public updateModsList(weaponStat) {
    this.WeaponsModsList.primary = weaponStat.primary_mods;

    const control = this.weaponForm.controls.userMods as FormArray;

    this.secondarySelectData.forEach((e, i) => {
      control.push(new FormControl(e.default));
    });

    control.valueChanges.subscribe(vals => {
      this.secondarySelectData = generateMultiSelectData(weaponStat.secondary_mods, vals);
      this.formData.userSelectedMods = vals;
      this.updateChanges();
    });
  }

  public updateChanges() {
    this.dataSource.data = CalculateStats(this.formData, this.currentWeaponStats);
    this.ref.detectChanges();
    this.ref.markForCheck();
  }

  public sortData(sort: Sort) {
    const data = this.dataSource.data.slice();

    if (!sort.active || sort.direction === "") {
      this.sortedData = data;
      return;
    }

    this.dataSource.data = data.sort((a, b) => {
      const isAsc = sort.direction === "asc";
      switch (sort.active) {
        case "crityellow":
          return this.compareStat(a.crityellow.incr, b.crityellow.incr, isAsc);
        case "critorange":
          return this.compareStat(a.critorange.incr, b.critorange.incr, isAsc);
        default:
          return 0;
      }
    });
  }

  private compareStat(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}

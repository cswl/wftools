import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

import { ShotgunList } from "./weapon_list";

interface WeaponStats {
  base_pellets: number;
  base_status: number;
}

@Component({
  selector: "app-shotgun-status",
  templateUrl: "./shotgun-status.component.html",
  styleUrls: ["./shotgun-status.component.css"]
})
export class ShotgunStatusComponent implements OnInit {
  public shotguns = ShotgunList;

  public mods_status_6060 = [1, 2, 3, 4];

  public shotgunForm: FormGroup;
  public default_shotgun = "Kohm (Max Fire)";

  public submiited = false;

  constructor() {
    this.shotgunForm = new FormGroup({
      shotgun_name: new FormControl(this.default_shotgun),
      base_pellets: new FormControl(),
      base_status: new FormControl(""),
      mod_status: new FormControl("")
    });

    // Set default Shotgun Weapon.
    this.shotgunForm.controls.shotgun_name.setValue(this.default_shotgun, {
      onlySelf: true
    });
    const { base_pellets, base_status } = this.getStatsFromName(this.default_shotgun);
    this.shotgunForm.controls.base_status.setValue(base_status);
    this.shotgunForm.controls.base_pellets.setValue(base_pellets);
  }

  public ngOnInit() {
    this.shotgunForm.controls.shotgun_name.valueChanges.subscribe(name => {
      const { base_pellets, base_status } = this.getStatsFromName(name);

      // // Debug.
      // console.log(name);
      // console.log(this.getStatsFromName(name));
      this.shotgunForm.controls.base_status.patchValue(base_status);
      this.shotgunForm.controls.base_pellets.patchValue(base_pellets);
    });
  }

  public onSubmit() {
    this.submiited = true;
  }

  public getStatsFromName(name): WeaponStats {
    let base_pellets, base_status;
    this.shotguns.forEach(wep => {
      if (wep.name === name) {
        (base_pellets = wep.base_pellets), (base_status = wep.base_status);
      }
    });
    return {
      base_pellets,
      base_status
    };
  }
}

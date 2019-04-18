import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import KeyboardVoiceIcon from "@material-ui/icons/KeyboardVoice";
import Icon from "@material-ui/core/Icon";
import SaveIcon from "@material-ui/icons/Save";

import Link from "@material-ui/core/Link";

import styles from "./styles.css";

const MeleeCC = props => {
  return (
    <div class="content">
      <p>
        <b> Project On Hold due to upcoming Melee 3.0 Changes</b>
        <br />
        There wasn't a good system to calculate the melee critical chance and DPS of Melee
        weapons. <br />I have only tested and included Meta weapons and channeling isn't
        included because nobody uses it anyway.
      </p>
      <card class="elevation-z16">
        <card-content>
          Weapon:
          <select class="weapons_list">
            <option value="w" />
          </select>
          Base Critical Chance :
          <input readonly class="form-control" id="weapon_cc" type="text" value="25" />
          Base Critical Multiplier :
          <input readonly class="form-control" id="weapon_cd" type="text" value="3" />
          <br />
          Gladiator Mods Set Bonus.
          <select class="glad_mod_bonus">
            <option value="3.5">90%</option>
            <option value="3">75%</option>
            <option value="2.5">60%</option>
            <option value="2">45%</option>
          </select>
        </card-content>
      </card>
      Critical chance buffs from Kavats. Arcanes Melee arcane buffs
      <img class="wf_arcane  " />
      <img class="wf_arcane" />
      <img class="wf_arcane" />
      <span class="arcane_name">Arcane Avenger </span>
      <span class="arcane_description" />
      <span class="arcane_name"> Arcane Fury</span>
      <span class="arcane_description" />
      <span class="arcane_name">Arcane Strike</span>
      <span class="arcane_description" />
      <div class="expansion-divider" />
      Riven Mod Riven Mod Stats
      <form-field>
        <input matInput id="riven_cd" type="number" value="0" />
      </form-field>
      <img src="assets/images/riven_mod_placeholder.png" class="wf_mod" />
      <br />
      Total Crit chance :<span id="result_cc" />
      <br />
      Total Crit multiplier :<span id="result_cd" />
    </div>
  );
};

export default withStyles(styles)(MeleeCC);

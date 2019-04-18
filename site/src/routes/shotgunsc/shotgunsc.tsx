import React, { useState } from "react";

import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";

import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import styles from "./ShotgunStyles.js";

const useStyles = makeStyles(styles);

const ShotgunSC = props => {
  const classes = useStyles();
  const [values, setValues] = useState({
    name: "Cat in the Hat",
    age: "",
    multiline: "Controlled",
    currency: "EUR"
  });
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const readOnly = { readOnly: true };
  return (
    <div class="content">
      <Typography paragraph variant="body1" gutterBottom>
        Arca Plasmor and Astilla are excluded since they fire a single slug, rather than
        pellets. <br />
        Thus, their status change is like normal weapons.
      </Typography>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          InputProps={readOnly}
          id="outlined-name"
          label="Base status chance:"
          className={classes.textField}
          value={values.name}
          onChange={handleChange("name")}
          margin="normal"
          variant="outlined"
        />
        <TextField
          InputProps={readOnly}
          id="outlined-name"
          label="Base number of pellets"
          className={classes.textField}
          value={values.name}
          onChange={handleChange("name")}
          margin="normal"
          variant="outlined"
        />
      </form>
      60/60 Mods:
      <input type="text" readonly formControlName="mod_status" value="0" />
      <mat-list-option checkboxPosition="before">Hell's Chamber</mat-list-option>
      <mat-list-option checkboxPosition="before">Vigilante Arnaments</mat-list-option>
      Riven Mulitshot
      <input type="text" id="mod_ms" value="120" />
      Chance for at least one pellet to proc in shot:(what Arsenal shows)
      <span id="arsenal_status" type="text" />
      Chance per pellet (the status chance of a single pellet):
      <span id="chance_pellet" type="text" />
      Average number of status effects triggered per shot (number of pellets that proc)
      <span id="number_procs" type="text" />
    </div>
  );
};

export default ShotgunSC;

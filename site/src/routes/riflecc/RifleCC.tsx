import React, { useState } from "react";

import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

import Input from "@material-ui/core/Input";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    background: theme.background
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
}));

const RifleCCDisplay = props => {
  const classes = useStyles();
  const state = useState({});
  const handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  return (
    <div class="content">
      <p>
        All grades are assumed to be B. Since thats what you can expect on average. <br />
        Support for selecting grades will be added soon*.
      </p>
      <TextField
        id="outlined-name"
        label="Base Critical Chance"
        className={classes.textField}
        value=""
        margin="normal"
        variant="outlined"
      />
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="name-readonly">Scope bonus:</InputLabel>
        <Select value=" " input={<Input name="name" id="name-readonly" />}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="hai">Hai</MenuItem>
          <MenuItem value="olivier">Olivier</MenuItem>
          <MenuItem value="kevin">Kevin</MenuItem>
        </Select>
        <FormHelperText>Read only</FormHelperText>
      </FormControl>
      <label class="multi-label"> :</label>
      <input readonly class="form-control " type="text" formControlName="scope_bonus" />
      <label class="single-label"> Base Critical Multiplier :</label>
      <input type="text" formControlName="base_cd" />
      Essential Mods:
      <FormControlLabel
        control={<Switch checked="" value="checkedA" />}
        label="Potential Multishot"
      />
    </div>
  );
};

export default RifleCCDisplay;

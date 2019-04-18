import React, { Component, Fragment } from "react";
import { useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import Popper from "@material-ui/core/Popper";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import Chip from "@material-ui/core/Chip";

import Downshift from "downshift";
import Omnibar from "omnibar";

import RivenProxyWeapons from "#data/RivenProxyWeapons";
import RivenProxyStats from "#data/RivenStats";

import flatten from "lodash/flatten";

import styles from "./RivenProxyStyles";
import { DownshiftMultiple, DownshiftSingle } from "#components/DownshiftSelect";

const weaponTypes = ["Primary", "Secondary", "Melee", "Sentinel"];
const allWeapons = flatten(weaponTypes.map(type => Object.keys(RivenProxyWeapons[type])));

const weaponNames = allWeapons.map(weapon => ({
  title: weapon,
  label: weapon
}));

const positiveFilters = Object.keys(RivenProxyStats).map(stat => ({
  value: stat,
  label: stat
}));
const useStyles = makeStyles(styles);

function renderWeaponResult(props) {
  const { item } = props;
  return <div>{item.label}</div>;
}

function IntegrationDownshift() {
  const classes = useStyles();
  const handleChange = Selection => {
    console.log(Selection);
  };
  return (
    <div className={classes.root}>
      <div className={classes.divider} />
      <DownshiftSingle
        onChange={handleChange}
        placeholder="Search for a weapon"
        classes={classes}
        suggestions={weaponNames}
      />
      <DownshiftMultiple
        placeholder="Select positive stats"
        classes={classes}
        suggestions={positiveFilters}
      />
    </div>
  );
}

export default IntegrationDownshift;

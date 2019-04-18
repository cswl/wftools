import React, { Component, Fragment } from "react";
import { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import AccountCircle from "@material-ui/icons/AccountCircle";

import Link from "@material-ui/core/Link";

import styles from "./RivenShowcaseStyles";
const FeaturesList = [
  {
    title: "Responsive view",
    primary: " Support both mobile and large screens",
    secondary:
      "Use the whole real estate on large screens while being friendly on mobile screens"
  },
  {
    title: "Quicker search options",
    primary: " Find the riven you're looking for quickly",
    secondary:
      " No more scrolling through a list. with Omnibar you can select weapon you want more fluidly."
  }
];

const profileRegex = /[\/]profile[\/](.*)/m;

export function RivenShowcaseLinkGen(props) {
  const baseUrl = window.location.href;
  const { profileLink } = props;
  const rmProfile = profileRegex.exec(profileLink);
  if (rmProfile === null) {
    return (
      <Typography component="span" variant="body2">
        Invalid profile Link provided.
      </Typography>
    );
  } else {
    const match = rmProfile[1];
    const pLink = `${baseUrl}/${match}`;
    console.log(pLink);
    return (
      <Link href={pLink} color="secondary">
        {pLink}
      </Link>
    );
  }
}

const useStyles = makeStyles(styles);
export function RivenFeaturesList(props) {
  const classes = useStyles();
  return (
    <List className={classes.listContainer}>
      {FeaturesList.map(feature => (
        <ListItem alignItems="flex-start">
          <ListItemText
            primary={feature.title}
            secondary={
              <Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.listInline}
                  color="textPrimary"
                >
                  {feature.primary}
                </Typography>
                {feature.secondary}
              </Fragment>
            }
          />
        </ListItem>
      ))}
    </List>
  );
}

export default function RivenProfileConverter(props) {
  const classes = useStyles();
  const [values, setValues] = useState("");

  const handleChange = event => {
    setValues(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <RivenFeaturesList classes={classes} />
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paperProfile}>
          <form
            className={classes.container}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <Typography variant="h5">
              {" "}
              Enter your Riven.market profile to generate a link.
            </Typography>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
                <TextField
                  value={values}
                  onChange={handleChange}
                  label="riven.market/profile/"
                />
              </Grid>
            </Grid>
          </form>
          <Typography variant="h5">
            {values === "initial" ? null : <RivenShowcaseLinkGen profileLink={values} />}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}

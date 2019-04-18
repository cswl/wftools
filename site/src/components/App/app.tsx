import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, useTheme, ThemeProvider } from "@material-ui/styles";

import getTheme from "#themes/ThemeStore";
import DefaultDarkTheme from "#themes/DarkTheme";

import styles from "./AppStyles";

import * as Routes from "./RouterPaths";
import Header from "#components/Header";

const MuiTheme = getTheme(DefaultDarkTheme);
const useStyles = makeStyles(styles);

function AppUI(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Router>
        <Header classes={classes} />
        <main className={classes.content}>
          <Route exact component={Routes.Home} path="/" />
          <Route component={Routes.Macros} path="/macros" />
          <Route component={Routes.Launcher} path="/launcher" />
          <Route component={Routes.ShotgunSC} path="/shotgunsc" />
          <Route component={Routes.MeleeCC} path="/meleecc" />
          <Route component={Routes.RifleCC} path="/riflecc" />
          <Switch>
            <Route component={Routes.RivenShowcase.RivenProfile} path="/rivenshow/:profile" />
            <Route component={Routes.RivenShowcase.RivenProfileConverter} path="/rivenshow" />
          </Switch>
          <Route component={Routes.RivenProxy} path="/priv/rivenpp" />
        </main>
      </Router>
    </div>
  );
}

export default (
  <ThemeProvider theme={MuiTheme}>
    <AppUI />
  </ThemeProvider>
);

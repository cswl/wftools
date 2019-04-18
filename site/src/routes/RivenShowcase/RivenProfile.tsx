import React, { Component, Fragment } from "react";
import { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

import { isEmpty } from "#model/StringUtils";

import Loading from "#components/Loading";

import Konsole from "#model/SimpleConsole";

import { fetchRivenHTML, fetchRivenProfile, parseRivenData } from "#model/RivenFetcher";

import RivenDisplayArea from "#components/RivenDisplayArea";

const konsole = new Konsole(1);

import styles from "./RivenShowcaseStyles";
const useStyles = makeStyles(styles);

function RivenUserInfo(props) {
  const { user } = props;

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography gutterBottom variant="h5" component="h2">
              {user.name}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" color="textSecondary" component="p">
              {user.timezone}
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" color="textSecondary" component="p">
          {user.comms}
        </Typography>
      </CardContent>
    </Card>
  );
}

function RivenProfile(props) {
  const classes = useStyles();

  const { match } = props;
  konsole.log(1, props);

  const userProfile = match.params.profile;
  const isDev = match.dev === "dev";
  const [isLoading, setIsLoading] = useState(true);
  const [rivenData, setrivenData] = useState(true);
  const [userData, setUserData] = useState(true);

  if (!isEmpty(userProfile)) {
    if (isDev) {
      konsole.log(1, "Loading user profile in dev mode.");
    }

    useEffect(() => {
      async function fetchData() {
        const [rUserData, query] = await fetchRivenProfile(userProfile, isDev);
        const result = await fetchRivenHTML(query, isDev);
        const rivenList = parseRivenData(result);
        console.log(rivenList);
        setrivenData(rivenList);
        setUserData(rUserData);
        setIsLoading(false);
      }
      fetchData();
    }, [userProfile]);

    return isLoading ? (
      <Loading />
    ) : (
      <div>
        <div className={classes.userInfo}>
          <RivenUserInfo user={userData} />
        </div>
        <RivenDisplayArea rivens={rivenData} />
      </div>
    );
  }
}

export default RivenProfile;

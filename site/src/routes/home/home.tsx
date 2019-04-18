import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

import styles from "./HomeStyles";

const useStyles = makeStyles(styles);
const Home = props => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid xs={12} md={12} xl={12}>
          <Card className={classes.infoCard}>
            <Typography paragraph style={{ padding: 20 }}>
              Some Warframe calculations, macros and builds. <br />
              Website is work in progress. <br />
              This website is mobile friendly or should be.
            </Typography>
          </Card>
        </Grid>
        <Grid item wrap="nowrap" xs={12} md={6} xl={3}>
          <Paper className={classes.paper}>
            <Typography gutterBottom variant="h5" component="h2">
              <Link to="/macros" className={classes.link}>
                Macros
              </Link>
            </Typography>
            <Typography component="p">Macros for lots of stuff.</Typography>
          </Paper>
        </Grid>
        <Grid item wrap="nowrap" xs={12} md={6} xl={3}>
          <Paper className={classes.paper}>
            <Typography gutterBottom variant="h5" component="h2">
              <Link to="/launcher" className={classes.link}>
                Launcher
              </Link>
            </Typography>
            <Typography component="p">
              Start Steam Warframe without Steam or Launcher.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} xl={3}>
          <Paper className={classes.paper}>
            <Typography gutterBottom variant="h5" component="h2">
              <Link to="/meleecc" className={classes.link}>
                Melee Critical Calculation
              </Link>
            </Typography>
            <Typography component="p">
              Calculate the melee critical chance with support for Blood Rush.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} xl={3}>
          <Paper className={classes.paper}>
            <Typography gutterBottom variant="h5" component="h2">
              <Link to="/shotgunsc" className={classes.link}>
                Shotgun Status Calculator
              </Link>
            </Typography>
            Calculate the shotgun status chance
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} xl={3}>
          <Paper className={classes.paper}>
            <Typography gutterBottom variant="h5" component="h2">
              Riven Cycle Simulator
            </Typography>
            Simulate cycling rivens.
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} xl={3}>
          <Paper className={classes.paper}>
            <Typography gutterBottom variant="h5" component="h2">
              <Link to="/riflecc" color="primary" className={classes.link}>
                Rifle Crit Calculator
              </Link>
            </Typography>
            Calculate critical chance of Rifles.
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} xl={3}>
          <Paper className={classes.paper}>
            <Typography gutterBottom variant="h5" component="h2">
              <Link to="/rivenshow" color="primary" className={classes.link}>
                Riven Market Showcase
              </Link>
            </Typography>
            Showcase your rivens from Riven.market beautifully.
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Home;

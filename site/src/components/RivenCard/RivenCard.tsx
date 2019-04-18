import React, { Component, Fragment } from "react";
import Card from "@material-ui/core/Card";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import RivenPolarity from "#model/RivenPolarity";

const useStyles = makeStyles(theme => ({
  rivenCard: {
    backgroundColor: "#16161F"
  },
  rivenTitle: {
    maxWidth: "80%"
  },
  rivenText: {
    weight: "bold",
    color: "#8C6CAE"
  },
  rivenInfo: {
    color: "#8C6CAE",
    marginTop: theme.spacing(1)
  },
  rivenNegative: {
    color: "#ff2e2e"
  },
  platValue: {
    padding: theme.spacing(2),
    color: "#ffffff"
  }
}));

export default function RivenCard(props) {
  const { name, stats, info } = props;
  const classes = useStyles();
  //console.log(props)
  return (
    <Card className={classes.rivenCard}>
      <CardActionArea>
        <CardContent>
          <Grid container justify="space-between" className={classes.root} spacing={2}>
            <Grid item className={classes.rivenTitle}>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className={classes.rivenText}
              >
                {name}
              </Typography>
            </Grid>
            <Grid item>
              <RivenPolarity color="purple" height="20" width="20" polarity={info.polarity} />
            </Grid>
          </Grid>

          {stats.positive.map(s => (
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.rivenText}
            >
              {s.value}% {s.stat}
            </Typography>
          ))}
          {stats.negative !== "none" ? (
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.rivenNegative}
            >
              {stats.negative.value}% {stats.negative.stat}
            </Typography>
          ) : null}
          <Typography
            variant="subtitle2"
            color="textSecondary"
            component="p"
            className={classes.rivenInfo}
          >
            MR {info.mr} {info.rerolls}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography
          variant="body2"
          fontWeight="Medium"
          color="textSecondary"
          component="p"
          className={clsx(classes.platValue, classes.rivenText)}
        >
          {info.price}
          <img height={20} width={20} src="/assets/platinum/platinumx64.png" />
        </Typography>
        <Button size="small" color="secondary">
          Buy
        </Button>
      </CardActions>
    </Card>
  );
}

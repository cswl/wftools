import React, { Fragment } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import styles from "./LauncherStyles.js";
const useStyles = makeStyles(styles);

const Launcher = ({ children, ...props }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  console.log(classes);
  return (
    <Fragment>
       <Grid container spacing={24}>
       <Grid item xs zeroMinWidth >
       <Card className={classes.LauncherCard} >
        <Typography gutterBottom variant="h5" component="h2">
          Run Warframe Directly Bypassing Launcher
        </Typography>
        <Typography noWrap="false" paragraph>
          Warframe has to be launched throught the Launcher which check for updates everytime
          before being able to Play.
          <br />
          Create the following batch file replacing the path with your installed Path of
          Warframe. <br />
          Obviously use this only when the game is actually updated, which you can know by
          checking Forums/Twitter
        </Typography>
        <Typography className={classes.codeBlock} variant="body2" display="block" gutterBottom>
          start "" "E:\SteamLibrary\steamapps\common\Warframe\Warframe.x64.exe" ^ -fullscreen:0
          -dx10:1 -dx11:1 -threadedworker:1 ^ -cluster:public -language:en -clienttype:Steam
        </Typography>
      </Card>
      </Grid>
       </Grid>

      <Card className={classes.LauncherCard} >
        <Typography gutterBottom variant="h5" component="h2">
          Run Steam Warframe without Steam.
        </Typography>
        <Typography noWrap="false" paragraph>
          I installed Warframe through Steam but I dont use Steam features of Warframe anymore.{" "}
          <br />
          So instead of re-downloading the standalone version I used this to start it without
          Steam.
        </Typography>
        Find the Warframe install Folder in your Steam Library. <br />
        Navigate to
        <Typography className={classes.codeBlock} variant="body2" display="block" gutterBottom>
          \steamapps\common\Warframe\Tools\Launcher.exe
        </Typography>
        <br />
        Create a shortcut to the Launcher and Right Click it to bring Properties. <br />
        Add the following after the Target
        <Typography className={classes.codeBlock} variant="body2" display="block" gutterBottom>
          -cluster:public -registry:Steam
        </Typography>
        <br />
        Hit Apply and OK to save.
        <img class="img-responsive" src="/assets/screenshots/wf_properties.png" />
      </Card>

      <Card className={classes.LauncherCard} >
        <div>
          <h2>Run Two or more Warframe Instances at same time.</h2>
        </div>
        <div class="launcher-section-content">
          Use this to have two Warframe opened at the same time. <br />
          You;ll need to create another user (Google how to do this since it differs between
          Windows version.) <br />
          You'll only be asked for the password of another use once.
          <br />
          <br />
          I've found that using same install can have some issues. <br />
          So be sure to copy the install folder as "Warframe2" somewhere and edit the path
          accordingly. <br />
          <Typography
            className={classes.codeBlock}
            variant="body2"
            display="block"
            gutterBottom
          >
            start "" C:\Windows\System32\runas.exe /user:warfm2 /savecreds ^
            "C:\SteamLibrary\steamapps\common\Warframe2\Tools\Launcher.exe -cluster:public
            -clienttype:Steam"
          </Typography>
          <img class="img-responsive" src="/assets/screenshots/wf_instaces_2.png" />
        </div>
      </Card>
    </Fragment>
  );
};

export default Launcher;

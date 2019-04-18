import React, { Fragment, useState } from "react";

import { Link, NavLink } from "react-router-dom";

import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";

import Drawer from "@material-ui/core/Drawer";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import Hidden from "@material-ui/core/Hidden";
import Tooltip from "@material-ui/core/Tooltip";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ColorsIcon from "@material-ui/icons/InvertColors";
import LightbulbOutlineIcon from "@material-ui/docs/svgIcons/LightbulbOutline";
import LightbulbFullIcon from "@material-ui/docs/svgIcons/LightbulbFull";
import HomeIcon from "@material-ui/icons/HomeSharp";

import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { RouteList, DynamicRouteTitle } from "#components/App/RoutesList";

const drawerWidth = 240;

const ToolTipsText = {
  colors: "Change theme colors",
  theme: "Switch to dark/light theme"
};

const BarIcons = props => {
  const { classes } = props;
  return (
    <div>
      <Link to="/" className={classes.hLink}>
        <IconButton color="inherit">
          <HomeIcon />
        </IconButton>
      </Link>
      <IconButton color="inherit">
        <ColorsIcon />
      </IconButton>
      <IconButton color="inherit">
        {"s" === "light" ? <LightbulbOutlineIcon /> : <LightbulbFullIcon />}
      </IconButton>
    </div>
  );
};

function Headers(props) {
  const { classes, route } = props;
  console.log(route);
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const drawer = (
    <div>
      <List>
        {RouteList.map(r => (
          <ListItem button key={r.name}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <NavLink className={classes.drawerLink} to={r.href}>
              <ListItemText primary={r.name} />
            </NavLink>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Settings"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const toggleDrawer = event => {
    event.preventDefault();
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setMobileOpen(!mobileOpen);
  };

  return (
    <Fragment>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={toggleDrawer}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {DynamicRouteTitle("/")}
          </Typography>
          <BarIcons classes={classes} />
        </Toolbar>
      </AppBar>
      <nav>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={toggleDrawer}
            classes={{
              paper: classes.drawerPaper
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden mdDown>
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </Fragment>
  );
}

export default Headers;

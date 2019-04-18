const drawerWidth = 240;

export default theme => ({
  root: {
    maxWidth: "100%",
    display: "flex",
    border: 0,
    margin: "0 auto",
    color: "white",
    flexDirection: "column"
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("lg")]: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    "@media print": {
      position: "absolute"
    },
    zIndex: 2
  },
  toolBar: {
    ...theme.mixins.toolbar,
    paddingLeft: theme.spacing(3),
    display: "flex",
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth
    }
  },

  content: {
    margin: "auto",
    flexGrow: 1,
    [theme.breakpoints.down("md")]: {
      paddingTop: theme.spacing(8),
      marginLeft: theme.spacing(1)
    },
    [theme.breakpoints.up("lg")]: {
      paddingRight: theme.spacing(1),
      paddingTop: theme.spacing(10),
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    },
    [theme.breakpoints.up("xl")]: {
      paddingTop: theme.spacing(12),
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(5),
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  },

  grow: {
    flex: "1 1 auto"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("lg")]: {
      display: "none"
    }
  },
  drawerPaper: {
    width: drawerWidth
  },
  link: {
    color: "white"
  },
  drawerLink: {
    color: "white"
  },
  hLink: {
    color: theme.palette.text.primary,

    "&:hover": {
      color: theme.palette.text.primary
    }
  }
});

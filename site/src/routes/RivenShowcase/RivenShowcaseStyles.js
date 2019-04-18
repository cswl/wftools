const styles = theme => ({
  root: {
    flexGrow: 1
  },
  margin: {
    margin: theme.spacing(1)
  },
  userInfo: {
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(1.5)
  },
  listContainer: {
    marginTop : theme.spacing(1.5),
    width: "100%", 
    backgroundColor: theme.palette.background.paper
  },
  listInline: {
    display: "inline"
  },
  paperProfile: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
});
export default styles;

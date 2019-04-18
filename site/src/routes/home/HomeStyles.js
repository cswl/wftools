export default theme => ({
  paper: {
    height: "100%",
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "wrap",
    margin: theme.spacing(2),
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2)
  },
  infoCard: {
    margin: theme.spacing(2)
  },
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  },
  link: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(0.5),
    "&:hover": {
      color: theme.palette.text.primary
    }
  }
});

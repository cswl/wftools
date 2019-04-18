export default theme => ({
  LauncherCard: {
    margin: theme.spacing(2),
    padding: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      maxWidth : "100%"
    },
    [theme.breakpoints.up("md")]: {}
  },
  codeBlock: {
    whiteSpace: "pre-line",
    overflowWrap:  "break-word",
    display: "block",
    unicodeBidi: "embed",
    fontFamily: "'Fira Mono', monospace"
  }
});

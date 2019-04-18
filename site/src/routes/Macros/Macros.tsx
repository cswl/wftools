import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import KeyboardVoiceIcon from "@material-ui/icons/KeyboardVoice";
import Icon from "@material-ui/core/Icon";
import SaveIcon from "@material-ui/icons/Save";
import Markdown from "markdown-to-jsx";
import MacrosLoader, { isProd } from "./MacrosLoader";

import Link from "@material-ui/core/Link";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import styles from "./MacrosStyle";

const DownloadLink = props => (
  <Link
    href="https://github.com/cswl/warframe-stuffs/releases/download/0.0.1/warframe-macros.ahk"
    {...props}
  />
);

const GithubLink = props => (
  <Link
    to="https://github.com/cswl/warframe-stuffs/releases/download/0.0.1/warframe-macros.exe"
    {...props}
  />
);

const useStyles = makeStyles(styles);

const MacrosTable = props => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState("");

  useEffect(() => {
    async function fetchData() {
      const result = await fetch("/assets/markdown/macros-tb.md");
      const data = await result.text();
      setData(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return isLoading ? <p>Loading....</p> : <Markdown>{data}</Markdown>;
};

function Macros(props) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Fragment>
      <div class="download_section">
        <p class="warn-text">
          DISCLAIMER: These macros are intended to reduce key presses only. <br />
          Their intention is not to automatae the game in any way or give unfair advantage.{" "}
          <br />I wont be responsible for any action taken to your account due to use of these
          macros. <br />
        </p>
        <Button
          variant="contained"
          component={DownloadLink}
          color="secondary"
          className={classes.button}
        >
          Download Macros
          <DeleteIcon className={classes.rightIcon} />
        </Button>

        <Button
          variant="contained"
          component={GithubLink}
          color="secondary"
          className={classes.button}
        >
          View on GitHub
          <DeleteIcon className={classes.rightIcon} />
        </Button>
        <MacrosTable />
      </div>
    </Fragment>
  );
}
export default Macros;

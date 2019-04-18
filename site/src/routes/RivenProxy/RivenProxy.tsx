import { h, Component, Fragment } from "react";
import { useState, useEffect } from "react";

import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
import Link from "@material-ui/core/Link";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Grid from "@material-ui/core/Grid";

import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

import WeaponSelect from "./RivenSelection";
import RivenPolarity from "#model/RivenPolarity";
import { fetchRivenHTML, parseRivenData } from "#model/RivenFetcher";
import RivenCard from "#components/RivenCard";

import styles from "./RivenProxyStyles";

const useStyles = makeStyles(styles);

const curseSelect = ["Any negative/none", "Must have negative", "No negative"];

const RivensFetcher = props => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState("");
  const [query, setQuery] = useState({
    direction: "ASC",
    baseurl: "Lw==",
    limit: "25",
    mastery: "16",
    neg: "all",
    onlinefirst: "true",
    page: "1",
    platform: "PC",
    polarity: "all",
    price: "99999",
    rank: "all",
    recency: "-1",
    rerolls: "-1",
    sort: "time",
    stats: "Any",
    veiled: "false",
    weapon: "Sobek"
  });

  useEffect(() => {
    async function fetchData() {
      const result = await fetchRivenHTML(query);
      const rivenList = parseRivenData(result);
      setData(rivenList);
      setIsLoading(false);
    }
    fetchData();
  }, [isLoading]);

  return isLoading ? (
    <p>Loading....</p>
  ) : (
    <Grid container spacing={3}>
      {data.map(riven => (
        <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
          <RivenCard name={riven.name} stats={riven.stats} info={riven.info} />
        </Grid>
      ))}
    </Grid>
  );
};

function RivenProxy(props) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [showMax, setshowMax] = useState(true);
  const handleChange = uistate => {};
  const RivePolaritiesSelction = RivenPolarities.map(pol => {
    return (
      <Fragment>
        <Avatar alt="Remy Sharp" src={pol.icon} className={classes.avatar} />

        <FormControlLabel
          control={<Checkbox checked={true} onChange={handleChange("gilad")} value="gilad" />}
          label={pol.name}
        />
      </Fragment>
    );
  });

  return (
    <Fragment>
      <Typography variant="h3">A proxy for Riven.market with better features.</Typography>
      <FormGroup row>
        <FormControlLabel
          control={
            <Switch
              checked={showMax}
              onChange={handleChange("checkedB")}
              value="checkedMax"
              color="primary"
            />
          }
          label="Show Maxed Stats"
        />
        <FormControlLabel
          control={
            <Switch
              checked={showMax}
              onChange={handleChange("checkedB")}
              value="checkedMax"
              color="primary"
            />
          }
          label="Show Online"
        />
      </FormGroup>
      <FormGroup row>{RivePolaritiesSelction}</FormGroup>

      <WeaponSelect />
      <div className={classes.rivenShowcase}>
        <RivensFetcher />
      </div>
    </Fragment>
  );
}
export default RivenProxy;

import React from "react";

import Grid from "@material-ui/core/Grid";

import RivenCard from "#components/RivenCard";
export default function RivenDisplayArea(props) {
  const { rivens } = props;
  return (
    <Grid container spacing={3}>
      {rivens.map(riven => (
        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
          <RivenCard name={riven.name} stats={riven.stats} info={riven.info} />
        </Grid>
      ))}
    </Grid>
  );
}

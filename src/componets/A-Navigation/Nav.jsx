import { Grid, TextField } from "@mui/material";
import React from "react";

const Nav = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={2}>
        <h1>My_sales APP</h1>
      </Grid>
      <Grid item xs={6}>
        <TextField variant="outlined" label="Searce Here..." />
      </Grid>
      <Grid item xs={2}>
        <h1>CARt</h1>{" "}
      </Grid>
    </Grid>
  );
};

export default Nav;

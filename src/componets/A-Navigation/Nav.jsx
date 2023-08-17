import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={2}>
        <h1>My_sales app</h1>
      </Grid>
      <Grid item xs={6}>
        <TextField variant="outlined" fullWidth label="Searce Here..." />
      </Grid>
      <Grid item xs={2}>
        <Button fullWidth sx={{ height: 55 }} variant="contained">
          Search....
        </Button>
      </Grid>
      <Grid item xs={2}>
        <Link to="card">
          <Button variant="contained"> showcard</Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Nav;

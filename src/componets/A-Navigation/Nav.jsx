import { Badge, Button, Grid, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";

const Nav = () => {
  const selectdata = useSelector((state) => state.commonReducers.cart.length);
  console.log("length", selectdata);
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
          <Badge badgeContent={2} color="success">
            <ShoppingCartIcon />
          </Badge>
          {/* <Button variant="contained"> showcard</Button> */}
        </Link>
      </Grid>
    </Grid>
  );
};

export default Nav;

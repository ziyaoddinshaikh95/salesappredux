import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const selectdata = useSelector((state) => state.commonReducers.cart);
  console.log("selectdata", selectdata);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        {" "}
        <h1>shoew card</h1>
      </Grid>
    </Grid>
  );
};

export default Cart;

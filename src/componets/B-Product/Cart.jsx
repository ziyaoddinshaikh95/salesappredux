import { Badge, Button, Card, CardContent, Grid, Rating } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const selectdata = useSelector((state) => state.commonReducers.cart);
  console.log("selectdata", selectdata);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        {selectdata.map((item) => {
          return (
            <Grid item xs={12} textAlign={"center"}>
              <Card>
                <CardContent>
                  <h3>{item.category.toUpperCase()}</h3>
                  <Badge badgeContent={`RS${item.price}`} color="error">
                    <img src={item.image} alt="" height={250} width={200} />
                  </Badge>
                  <h5>{item.description.substr(0, 100) + "..."}</h5>
                  <Rating value={item.rating.rate} /> <br />
                  <Button sx={{ margin: "5px" }} variant="contained">
                    ADD-To-CART
                  </Button>
                  <Button variant="contained">BUY</Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Cart;

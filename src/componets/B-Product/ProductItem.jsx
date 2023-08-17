import { Badge, Button, Card, CardContent, Grid, Rating } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";

const ProductItem = ({ item, index }) => {
  const dispatch = useDispatch();
  console.log("item", item);
  const addtocat = (item) => {
    console.log("addtocartitem", item);
    const type = "ADD-TO-CART";
    const payload = item;
    const action = { type, payload };
    dispatch(action);
  };
  const handleDelete = (item) => {
    console.log("deleteitem", item);
    const type = "REMOVE";
    const payload = item;
    const action = { type, payload };
    dispatch(action);
  };

  return (
    <Grid item xs={3} textAlign={"center"}>
      <Card>
        <CardContent>
          <h3>{item.category.toUpperCase()}</h3>
          <Badge badgeContent={`RS${item.price}`} color="error">
            <img src={item.image} alt="" height={250} width={200} />
          </Badge>
          <h5>{item.description.substr(0, 30) + "..."}</h5>
          <Rating value={item.rating.rate} /> <br />
          <Button
            sx={{ margin: "5px" }}
            variant="contained"
            onClick={() => addtocat(item)}
          >
            ADD-To-CART
          </Button>
          <Button variant="contained" onClick={() => handleDelete(item)}>
            REMOVE
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProductItem;

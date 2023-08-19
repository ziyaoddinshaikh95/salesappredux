import { Button, Card, CardContent, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export const TodoItem = () => {
  const dispatch = useDispatch();
  const recive = useSelector((state) => state.todoReducer.todo);
  console.log("=====>", recive);
  const handleRemove = (ind) => {
    const type = "remove";
    const payload = ind;
    const action = { type, payload };
    dispatch(action);
    // console.log("remove item", item);
    console.log("remove ind", ind);
  };
  useEffect(() => {}, [recive]);
  return (
    <Grid container spacing={3}>
      {recive.map((item, ind) => {
        return (
          <Grid item xs={3}>
            <Card>
              <CardContent>
                <h2>{ind + 0}</h2>
                <img src="logo192.png" alt="" height={50} />
                <h2>Id: {item.id}</h2>
                <h2>Name:{item.name}</h2>
                <h4>Phone{item.phone}</h4>
                <h5>Desig: {item.designation}</h5>
                <h6>
                  City:{item.city}-{item.pincode}
                </h6>
                <Button variant="contained" onClick={() => handleRemove(ind)}>
                  Remove
                </Button>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

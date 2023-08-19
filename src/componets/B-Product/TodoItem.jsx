import { Card, CardContent, Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export const TodoItem = () => {
  const recive = useSelector((state) => state.todoReducer.todo);
  console.log("=====>", recive);
  return (
    <Grid container spacing={3}>
      {recive.map((item) => {
        return (
          <Grid item xs={3}>
            <Card>
              <CardContent>
                <h2>Id: {item.id}</h2>
                <h2>Name:{item.name}</h2>
                <h4>Phone{item.phone}</h4>
                <h5>Desig: {item.designation}</h5>
                <h6>
                  City:{item.city}-{item.pincode}
                </h6>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

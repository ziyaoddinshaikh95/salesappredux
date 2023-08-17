import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./ProductItem";

export const Product = () => {
  const [data, setData] = useState([]);
  const reciveData = useSelector((state) => state.commonReducers.product);
  console.log("reciveData", reciveData);
  const dispatch = useDispatch();

  const getApi = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setData(result.data);
    const type = "ADD-PRODUCT";
    const payload = result.data;
    const action = { type, payload };
    dispatch(action);
  };
  useEffect(() => {
    getApi();
  }, []);

  return (
    <Grid container spacing={2}>
      {data.map((item) => {
        return <ProductItem item={item} />;
      })}
    </Grid>
  );
};

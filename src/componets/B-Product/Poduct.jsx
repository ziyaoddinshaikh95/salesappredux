import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

export const Product = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const getApi = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    const type = "ADD-PRODUCT";
    const payload = result.data;
    const action = { type, payload };
    dispatch(action);
  };
  useEffect(() => {
    getApi();
  }, []);

  return <Grid container spacing={2}></Grid>;
};

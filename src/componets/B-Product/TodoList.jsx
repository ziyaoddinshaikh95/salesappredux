import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

export const TodoList = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({});

  const handleSubmit = () => {
    const type = "ADD_TODO";
    const payload = data;
    const action = { type, payload };
    dispatch(action);
    console.log(data);
  };
  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <TextField
          fullWidth
          variant="outlined"
          label="Name"
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          fullWidth
          variant="outlined"
          label="Id"
          onChange={(e) => setData({ ...data, id: e.target.value })}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          fullWidth
          variant="outlined"
          label="designation"
          onChange={(e) => setData({ ...data, designation: e.target.value })}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          fullWidth
          variant="outlined"
          label="phone"
          onChange={(e) => setData({ ...data, phone: e.target.value })}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          fullWidth
          variant="outlined"
          label="D-O-B"
          onChange={(e) => setData({ ...data, dob: e.target.value })}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          fullWidth
          variant="outlined"
          label="City"
          onChange={(e) => setData({ ...data, city: e.target.value })}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          fullWidth
          variant="outlined"
          label="Pincode"
          onChange={(e) => setData({ ...data, pincode: e.target.value })}
        />
      </Grid>
      <Grid item xs={3}>
        <Button
          sx={{ height: 55 }}
          fullWidth
          variant="contained"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

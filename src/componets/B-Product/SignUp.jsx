import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

export const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const HandSignup = () => {
    const type = "SIGN-UP";
    const payload = data;
    const action = { type, payload };
    dispatch(action);
    navigate("/login");
  };
  return (
    <Grid container spacing={3} align="center" sx={{ marginTop: "30px" }}>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <Card>
          <CardContent>
            <h2>SignUp</h2>
            <TextField
              label="UserName"
              value={data.user}
              variant="outlined"
              fullWidth
              onChange={(e) => setData({ ...data, user: e.target.value })}
            />
            <br /> <br />
            <TextField
              variant="outlined"
              value={data.email}
              label="Email"
              fullWidth
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <br /> <br />
            <TextField
              value={data.password}
              variant="outlined"
              type="password"
              label="Password"
              fullWidth
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            <br /> <br />
            <Button variant="contained" onClick={HandSignup}>
              SingUp
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

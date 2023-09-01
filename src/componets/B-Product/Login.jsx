import {
  Alert,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import valid from "./valid";

export const Login = () => {
  const [password, setPassword] = useState("");
  const [error, seterror] = useState({});
  const navigate = useNavigate();
  const select = useSelector((state) => state.commonReducers.user);
  const handleLogin = (e) => {
    if (email == select.email && password == select.password) {
      navigate("/");
    }
    e.preventDefault();
    seterror(valid({ email, password }));
  };

  return (
    <Card>
      <CardContent>
        <Grid container spacing={5} align="center">
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <form onSubmit={handleLogin}>
              <AccountCircleIcon />
              <TextField
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                variant="outlined"
                label="Email"
                type="email"
              />
              {error.email && <p style={{ color: "red" }}>{error.email}</p>}
              <TextField
                fullWidth
                variant="outlined"
                type="password"
                label="Passsword"
                onChange={(e) => setPassword(e.target.value)}
              />
              {error.password && (
                <p style={{ color: "red" }}>{error.password}</p>
              )}
              <br /> <br />
              <Button variant="contained" type="submit" fullWidth>
                Login
              </Button>
              create account:: <Link to="/sign">SignUp</Link>
            </form>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

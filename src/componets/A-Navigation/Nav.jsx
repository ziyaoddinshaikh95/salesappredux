import { Badge, Button, Grid, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import ReplyIcon from "@mui/icons-material/Reply";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Nav = () => {
  const navigate = useNavigate();
  const selectdata = useSelector((state) => state.commonReducers.cart.length);
  console.log("length", selectdata);
  const handleback = () => {
    navigate("/");
  };
  return (
    <Grid container spacing={3}>
      <Grid item xs={1}>
        <Link to="login">
          <Button fullWidth sx={{ height: 55 }} variant="contained">
            <AccountCircleIcon />
          </Button>
        </Link>
      </Grid>
      <Grid item xs={4}>
        <TextField variant="outlined" fullWidth label="Searce Here..." />
      </Grid>

      <Grid item xs={2}>
        <Link to="card">
          <Button variant="contained" fullWidth>
            <Badge color="success" badgeContent={selectdata}>
              <ShoppingCartOutlinedIcon />
            </Badge>
          </Button>
        </Link>
      </Grid>
      <Grid item xs={2}>
        <Button
          fullWidth
          sx={{ height: 55 }}
          variant="contained"
          onClick={handleback}
        >
          <ReplyIcon />
        </Button>
      </Grid>
      <Grid item xs={2}>
        <Link to="todo">
          <Button fullWidth sx={{ height: 55 }} variant="contained">
            Todo
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Nav;

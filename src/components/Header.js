import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    boxShadow: "0 0 0 transparent",
  },
  toolbar: {
    justifyContent: "flex-end",
  },
});
export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static" color="transparent" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <NavLink to="/">
          <Button>Home</Button>
        </NavLink>
        <NavLink to="/blog">
          <Button>Blog</Button>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
}

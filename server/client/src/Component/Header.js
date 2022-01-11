import React from "react";
import { AppBar, Toolbar, makeStyles } from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import img from "../Image/inshort_2.png";
const useStyles = makeStyles((theme)=>({
  header: {
    background: "white",
    height: 70,
    marginBottom:30,
    [theme.breakpoints.down('sm')]: {
      display: "none",
      fontSize:'25px'
    },
  },
  
  inshort_logo: {
    width: 180,
    margin: "auto",
    height: 35,
  },
  toolbar: {},
  menu: {
    color: "#000",
  },
}))
const Header = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.header}>
        <Toolbar className={classes.toolbar}>
          <MenuIcon className={classes.menu} />
          <img className={classes.inshort_logo} src={img} alt="logo" />
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Header;

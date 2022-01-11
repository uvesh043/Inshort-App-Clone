import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import play_store from "../Image/play_store.png";
import apple_store from "../Image/download.png";
import { Store } from "@material-ui/icons";
const useStyles = makeStyles({
  container: {
    marginTop: "100",
    color: "white",
    textAlign: "center",
    padding: 10,
    backgroundColor: "red",
    border: "2px solid  red",
    display: "flex",
    justifyContent:"center",
    alignItems:"center"
  },
  play_store: {
    width: 120,
    hieght: 20,
    marginLeft: 10,
  },
  apple_store: {
    width: 115,
    hieght: 20,
    marginLeft: 10,
  },
  download_Store: {
    border: "2xp solid blue",
    display: "flex",
    // width:"50%",
    marginLeft:"10rem",
    justifyContent: "flex-end",
  },
  Typography:{
      marginLeft:"15rem"
  }
});
const InfoHeader = () => {
  const classes = useStyles();
  return (
  
        <Box className={classes.container}>
      <Typography className={classes.Typography}>
        For the best experience use inshorts app on your smartphone
      </Typography>
      <Box className={classes.download_Store}>
        <img src={play_store} className={classes.play_store} />
        <img src={apple_store} className={classes.apple_store} />
      </Box>
    </Box>
  );
};
export default InfoHeader;

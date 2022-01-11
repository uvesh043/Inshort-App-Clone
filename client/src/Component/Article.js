import React from "react";
import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import "./articles.css";


const useStyles = makeStyles((theme) => ({
  component: {
    marginBottom: 20,
    boxShadow: "0 2px 5px 0  rgb(0 0 /20%), 0 2px 10px 0 rgb(0 0 /22%)",
  },
  container: {
    padding: "8",
    paddingBottom: "4px!important",
    
  },
  image: {
    width: "88%",
    hieght: "10vh",
    objectFit: "cover",
  },
  news_tittle: {
    fontWeight: "bolder",
    fontSize: "22",
    marginBottom: "3",
    lineHeight: "27px",
  },
  shortByName: {
    fontSize: 12,
    color: "#80829",
    lineHeight: "22px",
    marginBottom: "1vh",
  },
  readMoreLink: {
    fontSize: 12,
    marginTop: "auto",
    marginBottom: "10px",
  },
  readMore: {
    color: "black",
    fontWeight: "bold",
    textDecoration: "none",
  },
  rightContainer: {
    display: "flex",
    flexDirection: "column",

    margin: "5px 0px 0 -25px",
    [theme.breakpoints.down("sm")]: {
      margin: "5px 0",
    },
    description: {
      lineHeight: "22px",
    },
  },
})) 
const Article = (props) => {
  const classes = useStyles();
  const News = props.data;
  console.log(News);
  return (
  
    News?.length > 0 &&
    News.map((newas) => {
      return (
        <Card className={classes.component}>
          <CardContent className={classes.container}>
            <Grid container className="grid_conatiner">
              <Grid item lg={5} md={5} sm={5} xs={12}>
                <a
                  href="https://play.google.com/store/apps/details?id=com.nis.app"
                  target="_blank"
                >
                
                  <img src={newas.url} alt="image" className={classes.image} />
                </a>
              </Grid>
              <Grid
                item
                lg={7}
                md={7}
                sm={7}
                xs={12}
                className={classes.rightContainer}
              >
                <Typography className={classes.news_tittle}>
                  {newas.title}
                </Typography>
                <Typography className={classes.shortByName}>
                  <b> short </b>BY {newas.author} /
                  {new Date(newas.timestamp).toDateString()}
                </Typography>
                <Typography className={classes.description}>
                  {newas.description}
                </Typography>
                <Typography className={classes.readMoreLink}>
                  read More
                  <a
                    href={newas.link}
                    target="_blank"
                    className={classes.readMore}
                  >
                    {newas.publisher}
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      );
    })
  );
};
export default Article;

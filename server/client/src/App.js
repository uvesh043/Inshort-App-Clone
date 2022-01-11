import { Box, makeStyles } from "@material-ui/core";
import Header from "./Component/Header";
import InfoHeader from "./Component/InfoHeader";
import Articles from "./Component/Articles";
const useStyles = makeStyles({
  infoHeader: {
    marginTop: 100,
    color: "black"
  },
});
function App() {
  const classes = useStyles();
  return (
    <Box>
      <Header />
      <Box  className={classes.infoHeader}>
        <InfoHeader />
        <Articles/>
      </Box>
    </Box>
  );
}

export default App;

import Home from "./Home";
import Drawer from "./Drawer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
  },
});

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Drawer />
      <BrowserRouter>
        <Switch>
          <Route exact from="/" render={(props) => <Home {...props} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

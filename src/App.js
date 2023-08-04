import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PersonInfo from "./Components/pages/PersonInfo.js";
import PlanetInfo from "./Components/pages/PlanetInfo";
import NavBar from "./Components/navigations/NavBar";
import "./App.css";

export default function App() {
  return (
    <div>
      <Router>
        <Route render={(routeProps) => <NavBar {...routeProps} />} />
        <Switch>
          <Route exact path="/" component={PlanetInfo} />
          <Route path="/person-info" component={PersonInfo} />
        </Switch>
      </Router>
    </div>
  );
}

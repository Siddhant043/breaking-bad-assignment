import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import Characterpage from "./pages/Characterpage";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/characters/:name">
            <Characterpage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

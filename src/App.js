import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Details from "./Details";

// important! first install recat-router-dom

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/details/:id" component={Details} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

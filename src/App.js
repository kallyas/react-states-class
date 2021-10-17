import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./Login";
import Weather from "./Weather";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute exact path="/" component={Weather} />
        <Route path="/login">
          {user != null ? <Redirect to="/" /> : <Login />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

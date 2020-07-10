import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./MainPage";
import NavbarComponent from "./NavbarComponent";

const PagesHolder = () => {
  return (
    <Router>
      <NavbarComponent />
      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
    </Router>
  );
};

export default PagesHolder;

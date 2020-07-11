import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./MainPage";
import NavbarComponent from "./NavbarComponent";
import AboutPage from "./AboutPage";
import FeedbackPage from './FeedbackPage'

const PagesHolder = () => {
  return (
    <Router>
      <NavbarComponent />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/feedback" component={FeedbackPage} />
      </Switch>
    </Router>
  );
};

export default PagesHolder;

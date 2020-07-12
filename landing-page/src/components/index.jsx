import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./MainPage";
import NavbarComponent from "./NavbarComponent";
import AboutPage from "./AboutPage";
import AdminLoginPage from "./AdminLoginPage";
import FeedbackPage from "./FeedbackPage";
import AdminPanel from "./AdminPanel";

const PagesHolder = () => {
  return (
    <Router>
      <NavbarComponent />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/feedback" component={FeedbackPage} />
        <Route exact path="/admin" component={AdminLoginPage} />
        <Route exact path="/adminpanel" component={AdminPanel} />
      </Switch>
    </Router>
  );
};

export default PagesHolder;

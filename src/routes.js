import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import AllReviews from "./components/AllReviews/AllReviews";


export default (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path='/all-reviews' component={AllReviews} />
    </Switch>
  );
import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Category from "./Category";
import AllCategories from "./AllCategories";
import Error404 from "./404";

function Categories({ match }) {
  return (
    <Fragment>
      <Switch>
        <Route path={`${match.path}/:slug`} component={Category} />
        <Route path={`${match.path}`} component={AllCategories} />
        <Route component={Error404} />
      </Switch>
    </Fragment>
  );
}

export default Categories;

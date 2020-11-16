import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Categories from "./Categories";
import Articles from "./Articles";
import Article from "./Article";

function Blog({ match }) {
  return (
    <Fragment>
      <Switch>
        <Route path={`${match.path}/categories`} component={Categories} />
        <Route path={`${match.path}/:slug`} component={Article} />
        <Route path={`${match.path}`} component={Articles} />
      </Switch>
    </Fragment>
  );
}

export default Blog;

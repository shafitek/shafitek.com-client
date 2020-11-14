import React, { Fragment } from "react";
import Post from "./Post";
import { Switch, Route } from "react-router-dom";
import Categories from "./Categories";
import AllPosts from "./AllPosts";
import Error404 from "./404";

function Blog({ match }) {
  return (
    <Fragment>
      <Switch>
        <Route path={`${match.path}/categories`} component={Categories} />
        <Route path={`${match.path}/:slug`} component={Post} />
        <Route path={`${match.path}`} component={AllPosts} />
      </Switch>
    </Fragment>
  );
}

export default Blog;

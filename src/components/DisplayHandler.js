import React, { Fragment } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';

function DisplayHandler(props) {
    return (
      <Fragment>
        <Switch>
          <Route path={`${props.match.path}/*`}>
            <Redirect to="/404" />
          </Route>
          <Route>{props.display}</Route>
        </Switch>
      </Fragment>
    );
}

export default DisplayHandler

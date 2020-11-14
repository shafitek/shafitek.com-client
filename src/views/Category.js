import React, { Fragment } from 'react'
import { Redirect, Route, Switch, useParams } from 'react-router-dom'
import DisplayHandler from '../components/DisplayHandler';

function Category({match}) {

    const {slug} = useParams()

    const category = (
      <div>
        <h1>Category: {slug}</h1>
      </div>
    );

    return (
      <DisplayHandler match={match} display={category} />
    );
}

export default Category

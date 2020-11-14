import React, { Fragment, useEffect, useState } from 'react'
import { Redirect, Route, Switch, useParams } from 'react-router-dom'
import DisplayHandler from '../components/DisplayHandler';

function Post({match}) {

    const {slug} = useParams()

    const date = () => new Date().toLocaleTimeString();

    const [time, setTime] = useState(date);

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(date);
      }, 1000);
      return () => {
        return clearInterval(interval)
      }
    }, [])

    const post = (
      <div>
        <h1>Blog Post: {slug}-{time}</h1>
      </div>
    );

    return (
        <DisplayHandler match={match} display={post} />
    );
}

export default Post

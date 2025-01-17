import React from 'react'

function PageTitle(props) {
    return (
      <div className="st-page-title">
        <h1>{props.title}</h1>
        <span>{props.title}</span>
      </div>
    );
}

export default PageTitle

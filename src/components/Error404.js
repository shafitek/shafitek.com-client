import React from 'react'
import "./Error500.scss"
import HelmetComponent from './HelmetComponent';
function Error404() {
    return (
      <div className="error-500-component">
        <HelmetComponent meta={{ title: "Error 404", desc: "Oops." }} />
        <div className="error-500-text">404</div>
        <div className="error-text">
          Not found.
        </div>
      </div>
    );
}

export default Error404

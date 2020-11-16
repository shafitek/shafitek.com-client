import React from 'react'
import "./Error500.scss";

function Error500() {
    return (
        <div className="error-500-component">
            <div className="error-500-text">
                500
            </div>
            <div className="error-text">
                Unexpected error :( - Please try again later.
            </div>
        </div>
    )
}

export default Error500

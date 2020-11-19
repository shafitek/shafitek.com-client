import React from "react";

function LoaderIcon() {
  return (
    <div className="loader-icon">
        <div className="loader-icon-logo">
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
      <div className="loading-text">...Loading...</div>
    </div>
  );
}

export default LoaderIcon;

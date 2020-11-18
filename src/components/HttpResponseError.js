import React from "react";
import Error404 from "./Error404";
import Error500 from "./Error500";

function HttpResponseError(response) {
  let content = null;
  if (!response.data.response) {
    content = <Error500 />;
  } else if (response.data.response.status == 404) {
    content = <Error404 />;
  } else {
    content = <Error500 />;
  }

  return content;
}

export default HttpResponseError;

import React from "react";
import ErrorView from "./error-view";

import Error403Icon from "../assets/icons/error-403";
function Error403() {
  return (
    <ErrorView
      title="Unexpected Error"
      des="An unexpected error has occurred. Please try again later or contact support for assistance"
    >
      <Error403Icon className="w-[484px] max-w-[80%] h-auto" />
    </ErrorView>
  );
}

export default Error403;

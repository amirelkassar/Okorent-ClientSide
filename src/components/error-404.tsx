import React from "react";
import ErrorView from "./error-view";
import Error404Icon from "../assets/icons/error-404";
function Error404() {
  return (
    <ErrorView
      title=""
      des="Error: The page could not be found. Please navigate to another page or
        contact support."
    >
      <Error404Icon className="w-[320px] max-w-[80%] h-auto" />
    </ErrorView>
  );
}

export default Error404;

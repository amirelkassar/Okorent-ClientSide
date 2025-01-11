import React from "react";
import ErrorView from "./error-view";
import Error500Icon from "../assets/icons/error-500";

function Error500() {
  return (
    <div>
      <ErrorView
        title="Server Error"
        des="An error occurred on the server. Please refresh the page or try again later"
      >
        <Error500Icon className="w-[208px] max-w-[80%] h-auto" />
      </ErrorView>
    </div>
  );
}

export default Error500;

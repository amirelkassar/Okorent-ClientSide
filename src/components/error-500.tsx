import React from "react";
import ErrorView from "./error-view";
import Image from "next/image";
import imgError from "@/src/assets/images/server.png";

function Error500() {
  return (
    <div>
      <ErrorView
        title="Unexpected Error"
        des="An unexpected error has occurred. Please try again later or contact support for assistance"
      >
        <Image
        src={imgError}
        alt="error"
        width={360}
        height={245}
        />
      </ErrorView>
    </div>
  );
}

export default Error500;

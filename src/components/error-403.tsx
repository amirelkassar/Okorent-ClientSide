import React from "react";
import ErrorView from "./error-view";
import imgError from "@/src/assets/images/unexpected.png";
import Image from "next/image";
function Error403() {
  return (
    <ErrorView
      title="Unexpected Error"
      des="An unexpected error has occurred. Please try again later or contact support for assistance"
    >
      <Image src={imgError} width={207} height={294} alt="Unexpected Error" />
    </ErrorView>
  );
}

export default Error403;

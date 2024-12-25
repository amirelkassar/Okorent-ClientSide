import Image from "next/image";
import React from "react";
import imgError404 from "@/src/assets/images/404.png";
import ErrorView from "./error-view";
function Error404() {
  return (
    <ErrorView
      title="404 Error"
      des="Error: The page could not be found. Please navigate to another page or
        contact support."
    >
      <Image src={imgError404} width={269} height={242} alt="error404" />
    </ErrorView>
  );
}

export default Error404;

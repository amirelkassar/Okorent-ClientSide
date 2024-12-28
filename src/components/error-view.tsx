"use client";
import React from "react";
interface ErrorViewProps {
  title: string;
  des: string;
  children: React.ReactNode;
}
function ErrorView({
  title = "error",
  des = "info",
  children,
}: ErrorViewProps) {
  return (
    <div className="my-section py-4">
      <h2 className="text-xl text-center mx-auto mdl:text-3xl my-section">
        {title}
      </h2>
      <div className="w-fit mx-auto">{children ? children : null}</div>
      <p className="text-grayMedium font-Regular text-base mdl:text-xl my-section text-center mx-auto max-w-[680px]">
        {des}
      </p>
    </div>
  );
}

export default ErrorView;

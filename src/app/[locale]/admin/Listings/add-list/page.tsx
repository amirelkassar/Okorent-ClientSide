"use client";
import React, { useState } from "react";
import FormOne from "../_components/forms-list/form-one";
import FormTwo from "../_components/forms-list/form-two";
import FormThree from "../_components/forms-list/form-three";
import FormFour from "../_components/forms-list/form-four";
import FormFive from "../_components/forms-list/form-five";
import FormSix from "../_components/forms-list/form-six";
import FormAssign from "../_components/forms-list/form-assign";
import Button from "@/src/components/button";
import LinkGreen from "@/src/components/linkGreen";
import { useSearchParams } from "next/navigation";
import Preview from "./_components/preview";

function Page() {
  const [dataList, setDataList] = useState<any>({});
  const searchparams = useSearchParams();

  return (
    <div className="mb-12">
      {searchparams.get("preview") === "true" ? (
        <Preview />
      ) : (
        <div className="flex flex-col gap-6 mb-20">
          <FormOne />
          <FormTwo dataList={dataList} setDataList={setDataList} />
          <FormThree />
          <FormFour />
          <FormFive />
          <FormSix dataList={dataList} setDataList={setDataList} />
          <FormAssign />
        </div>
      )}
      <div className="flex items-center mt-16 gap-7 md:flex-row flex-col">
        <Button className={"w-full lg:w-[208px] h-[64px]"}>Save</Button>
        {/* {searchparams.get("preview") === "true" ? (
          <LinkGreen
            href={"?preview=false"}
            className={
              "w-full lg:w-[208px] h-[64px] text-black bg-grayBack border-none"
            }
          >
            Back
          </LinkGreen>
        ) : (
          <LinkGreen
            href={"?preview=true"}
            className={
              "w-full lg:w-[208px] h-[64px] text-black bg-grayBack border-none"
            }
          >
            Preview
          </LinkGreen>
        )} */}
      </div>
    </div>
  );
}

export default Page;

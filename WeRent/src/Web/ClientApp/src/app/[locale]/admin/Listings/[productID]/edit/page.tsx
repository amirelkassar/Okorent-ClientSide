"use client";
import React, { useState } from "react";
import HeaderEdit from "./_components/headerEdit";
import FormOne from "../../_components/forms-list/form-one";
import FormTwo from "../../_components/forms-list/form-two";
import FormThree from "../../_components/forms-list/form-three";
import FormFour from "../../_components/forms-list/form-four";
import FormFive from "../../_components/forms-list/form-five";
import FormSix from "../../_components/forms-list/form-six";


function Page({ params }: any) {
  const [dataList, setDataList] = useState<any>({});
  return (
    <div>
      <HeaderEdit id={params.productID} />
      <div className="flex flex-col gap-6 mb-20">
        <FormOne />
        <FormTwo dataList={dataList} setDataList={setDataList} />
        <FormThree/>
        <FormFour/>
        <FormFive/>
        <FormSix dataList={dataList} setDataList={setDataList}/>
      </div>
    </div>
  );
}

export default Page;

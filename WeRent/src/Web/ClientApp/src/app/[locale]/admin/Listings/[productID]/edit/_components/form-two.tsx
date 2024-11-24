import CardList from "@/src/components/card-list";
import DropImg from "@/src/components/DropImg";
import React from "react";
interface FormOneProps {
    setDataList: React.Dispatch<any>;
    dataList: any;
  }
function FormTwo({ setDataList, dataList }: FormOneProps) {
  return (
    <CardList title="Listing Images">
      <p className="text-xl font-Regular mb-5">Upload up to 8 images</p>
      <DropImg setDataList={setDataList} dataList={dataList} />
    </CardList>
  );
}

export default FormTwo;

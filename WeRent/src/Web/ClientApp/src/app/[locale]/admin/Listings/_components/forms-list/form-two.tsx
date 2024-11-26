import CardList from "@/src/components/card-list";
import DropImg from "@/src/components/DropImg";
import ItemDescriptions from "@/src/components/form-list/item-descriptions";
import React from "react";
interface FormOneProps {
    setDataList: React.Dispatch<any>;
    dataList: any;
  }
function FormTwo({ setDataList, dataList }: FormOneProps) {
  return (
    <CardList title="Listing Images">
      <ItemDescriptions title="Upload up to 8 images" />
      <DropImg setDataList={setDataList} dataList={dataList} />
    </CardList>
  );
}

export default FormTwo;

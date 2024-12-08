import CardList from "@/src/components/card-list";
import ItemDescriptions from "@/src/components/form-list/item-descriptions";
import ItemFaqs from "@/src/components/form-list/item-faqs";
import ItemPercentage from "@/src/components/form-list/item-percentage";
import ItemStatus from "@/src/components/form-list/item-status";
import StepAvailability from "@/src/components/form-list/stepAvailability";
import React, { useState } from "react";
interface StepAvailabilityProps {
  setDataList: React.Dispatch<any>;
  dataList: any;
}
interface FAQ {
  question: string;
  answer: string;
}
function FormSix({ setDataList, dataList }: StepAvailabilityProps) {
  const [selectedCheckbox, setSelectedCheckbox] = useState<string | null>(null);
  const [faqs, setFaqs] = useState<FAQ[]>([{ question: "", answer: "" }]);

  const handleCheckboxChange = (
    value: string,
    setState: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    if (selectedCheckbox === value) {
      setState(null);
    } else {
      setState(value);
      setDataList({ ...dataList, Status: value });
    }
  };
  const handleChangeFAQ = (index: number, field: keyof FAQ, value: string) => {
    const newFaqs = [...faqs];
    newFaqs[index][field] = value;
    setFaqs(newFaqs);
    setDataList({ ...dataList, FAQ: newFaqs });
  };
  return (
    <CardList title="General Information">
      <div className="flex  justify-between flex-wrap gap-7 mb-10">
        <div>
          <ItemDescriptions
            title="Availability"
            description="Choose when your item will be available for rent"
            titleStyle="mb-1"
          />

          <StepAvailability setDataList={setDataList} dataList={dataList} />
        </div>
        <div className="lg:max-w-[520px] w-full">
          <ItemDescriptions title="Item Status" />

          <h3 className="text-base lg:text-xl font-Regular mb-4 "></h3>
          <ItemStatus
            selectedCheckbox={selectedCheckbox}
            setSelectedCheckbox={setSelectedCheckbox}
            handleCheckboxChange={handleCheckboxChange}
          />
        </div>
      </div>
      <div className="flex  justify-between flex-wrap gap-7 pt-12 border-t border-grayMedium/40">
        <div>
          <ItemDescriptions
            title="FAQs"
            description="Add at least two FAQs to make it easier to renters to know more
            about your product"
            titleStyle="mb-1"
          />
          <ItemFaqs
            faqs={faqs}
            setFaqs={setFaqs}
            handleChangeFAQ={handleChangeFAQ}
          />
        </div>
        <ItemPercentage />
      </div>
    </CardList>
  );
}

export default FormSix;

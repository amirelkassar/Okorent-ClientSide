import React from "react";
import Step from "./step";
import { Textarea, TextInput } from "@mantine/core";
import Button from "@/src/components/button";
interface FAQ {
  question: string;
  answer: string;
}
interface StepFAQProps {
  faqs: FAQ[];
  setFaqs: React.Dispatch<any>;
  active: boolean;
  handleChangeFAQ: (index: number, field: keyof FAQ, value: string) => void;
}
function StepFAQ({ faqs, setFaqs, active, handleChangeFAQ }: StepFAQProps) {
  const addQuestion = () => {
    setFaqs([...faqs, { question: "", answer: "" }]);
  };

  return (
    <Step
      title="FAQs"
      stepNum={10}
      active={active}
      last
      dec="Add at least two FAQs to make it easier to renters to know more about your product"
    >
      <div>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <TextInput
              placeholder={`Question - ${index + 1}`}
              onChange={(e) =>
                handleChangeFAQ(index, "question", e.target.value)
              }
              classNames={{
                input:
                  " text-black rounded-2xl text-grayMedium  h-full border border-green/30 focus:border-green active:border-green   placeholder:text-grayMedium placeholder:opacity-100 ",
                wrapper: "h-full",
              }}
              className="h-[64px] mb-4 duration-200 min-h-[64px] bg-white rounded-2xl  text-grayMedium"
            />
            <Textarea
              placeholder="Answer"
              value={faq.answer}
              autosize
              onChange={(e) => handleChangeFAQ(index, "answer", e.target.value)}
              classNames={{
                input:
                  " text-black rounded-2xl text-grayMedium flex items-center min-h-16  h-full border border-green/30 focus:border-green active:border-green  placeholder:text-grayMedium placeholder:pt-3 placeholder:block placeholder:opacity-100 ",
                wrapper: "h-full",
              }}
              className=" mb-4 duration-200 min-h-[64px] bg-white rounded-2xl  text-grayMedium"
            />
          </div>
        ))}

        <Button
          className={
            "mt-8 bg-grayBack gap-3 w-[196px] max-w-full text-xs px-7 h-12 mdl:h-[64px] border-none text-black"
          }
          onClick={addQuestion}
        >
          Add question
        </Button>
      </div>
    </Step>
  );
}

export default StepFAQ;

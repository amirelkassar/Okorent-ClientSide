import { Textarea, TextInput } from "@mantine/core";
import React from "react";
import Button from "../button";
interface FAQ {
  question: string;
  answer: string;
}
interface StepFAQProps {
  faqs: FAQ[];
  setFaqs: React.Dispatch<any>;
  handleChangeFAQ: (index: number, field: keyof FAQ, value: string) => void;
}
function ItemFaqs({ faqs, setFaqs, handleChangeFAQ }: StepFAQProps) {
  const addQuestion = () => {
    setFaqs([...faqs, { question: "", answer: "" }]);
  };

  return (
    <div>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <TextInput
            placeholder={`Question - ${index + 1}`}
            onChange={(e) => handleChangeFAQ(index, "question", e.target.value)}
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
            onChange={(e) => handleChangeFAQ(index, "answer", e.target.value)}
            classNames={{
              input:
                " text-black rounded-2xl text-grayMedium flex items-center  h-full border border-green/30 focus:border-green active:border-green  placeholder:text-grayMedium placeholder:pt-3 placeholder:block placeholder:opacity-100 ",
              wrapper: "h-full",
            }}
            className="h-[64px] mb-4 duration-200 min-h-[64px] bg-white rounded-2xl  text-grayMedium"
          />
        </div>
      ))}

      <Button
        className={
          "mt-8 bg-grayBack gap-3 w-[196px] max-w-full px-7 h-[64px] border-none text-black"
        }
        onClick={addQuestion}
      >
        Add question
      </Button>
    </div>
  );
}

export default ItemFaqs;

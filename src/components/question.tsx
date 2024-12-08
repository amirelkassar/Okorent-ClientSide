"use client";
import React, { useState } from "react";
interface Question {
  id: number;
  question: string;
  answer: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Does the backrest tilt lock in place?",
    answer:
      "The backrest tilt lock works efficiently and stays in place when engaged.",
  },
  {
    id: 2,
    question: "Does the chair have good lumbar support?",
    answer:
      "Customers generally find that the lumbar support is effective and comfortable.",
  },
  {
    id: 3,
    question: "Is the chair easy to assemble?",
    answer:
      "The product information indicates assembly is not difficult. Customers generally find it easy to assemble, with many mentioning clear instructions. One review mentions it was very easy to install. Another review states it was extremely hard to get the decorative back off.",
  },
  {
    id: 4,
    question: "Does the chair wobble or shake?",
    answer:
      "Some reviews mention a slight wobble, but it's not a common issue.",
  },
  {
    id: 5,
    question: "Are the armrests adjustable?",
    answer: "Yes, the armrests can be adjusted to suit the user's preferences.",
  },
];
function QuestionView() {
  const [selectedQuestionId, setSelectedQuestionId] = useState<number | null>(
    1
  );
  const handleQuestionClick = (id: number) => {
    setSelectedQuestionId(id);
  };

  return (
    <div className="w-full pb-5 border-b border-[#B6BFC64D]">
      <h3 className="text-base mb-2 font-SemiBold lg:text-xl">Looking for specific info?</h3>
      <div className="flex flex-wrap gap-2 lg:gap-4 mb-6">
        {questions.map((item) => (
          <button
            key={item.id}
            onClick={() => handleQuestionClick(item.id)}
            className={`px-2 flex duration-300 items-center justify-center py-2 rounded-xl text-xs lg:text-sm  ${
              selectedQuestionId === item.id
                ? "bg-green text-white"
                : "bg-blue/10 text-blue-800"
            } hover:shadow-md `}
          >
            {item.question}
          </button>
        ))}
      </div>

      {/* Display the answer for the selected question */}
      {selectedQuestionId ? (
        <p className="text-grayMedium font-Regular text-sm lg:text-base">
          {questions.find((q) => q.id === selectedQuestionId)?.answer}
        </p>
      ):null}
    </div>
  );
}

export default QuestionView;

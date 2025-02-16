import EmpowerIcon from "@/src/assets/icons/Empowerd";
import SmileIcon from "@/src/assets/icons/smile";
import TransactionsIcon from "@/src/assets/icons/Transactions";
import React from "react";
const dataNumbers = [
  {
    id: "0",
    title: "Business Empowerd",
    textNum: "+510 ",
    icon: <EmpowerIcon />,
  },
  {
    id: "1",
    title: "Transactions Processed",
    textNum: "+1200",
    icon: <TransactionsIcon />,
  },
  {
    id: "2",
    title: "Satisfaction Rate",
    textNum: "99%",
    icon: <SmileIcon />,
  },
];
function NumberWho() {
  return (
    <div className=" my-12 mdl:my-16 lg:my-28 flex-col mdl:flex-row flex justify-center items-center lg:items-start lg:justify-between relative max-w-[1130px] w-full mx-auto gap-4 lg:gap-5">
      {dataNumbers.map((item, i) => {
        return (
          <div
            key={i}
            className="bg-white w-[302px] rounded-2xl shadow-md px-4 py-9 flex flex-col justify-center items-center "
          >
            <div className="bg-[#DFEBF4]/40 rounded-full mb-2 p-1 size-[58px] mdl:size-[74px] flex items-center justify-center">
              <div className="bg-[#DFEBF4]/40 rounded-full p-2 lg:p-1 w-full h-full flex items-center justify-center">
                {item.icon}
              </div>
            </div>
            <h3 className="text-center font-Bold text-2xl mdl:text-3xl mb-1">
              {item.textNum}
            </h3>
            <h4 className="text-grayMedium text-lg mdl:text-2xl text-center">
              {item.title}
            </h4>
          </div>
        );
      })}
    </div>
  );
}

export default NumberWho;

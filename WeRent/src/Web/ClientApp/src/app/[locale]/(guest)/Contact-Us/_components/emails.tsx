import React from "react";
const dataEmails = [
  {
    id: 1,
    title: "Inquires",
    description: "info@okorent.com",
  },
  {
    id: 2,
    title: "Bugs",
    description: "cs@okorent.com",
  },
  {
    id: 3,
    title: "HR",
    description: "hr@okorent.com",
  },
];
function Emails() {
  return (
    <div className="flex flex-col gap-11 justify-center items-center w-[450px] min-w-[350px]">
      <h3 className="text-center text-3xl ">Or email us</h3>
      <div className="flex-1 flex items-center justify-center flex-col gap-16 w-[306px]">
        {dataEmails.map((email,i) => {
          return (
            <div key={i} className="pb-14 border-b border-[#B6BFC6] w-full">
              <h4 className="text-2xl font-SemiBold mb-1 text-center">{email.title}</h4>
              <p className="text-2xl font-Regular text-grayMedium mb-1 text-center">{email.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Emails;

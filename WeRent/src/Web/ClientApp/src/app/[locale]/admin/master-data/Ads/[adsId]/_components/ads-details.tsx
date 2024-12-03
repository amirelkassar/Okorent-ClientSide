import React from "react";

function AdsDetails() {
  return (
    <div className="bg-blue/5 rounded-xl p-9 flex-1 ">
      <h3 className="text-blue text-2xl font-SemiBold mb-12">Ad Details</h3>
      <div className="flex flex-col mdl:flex-row flex-wrap w-full gap-y-10">
        <InfoUser title="Starting date" info="20 Aug 2025" />
        <InfoUser title="Ending Date" info="20 Aug 2025" />
        <InfoUser title="Payment" info="1000$" />
        <InfoUser title="Status" info=" Suspend" />
      </div>
    </div>
  );
}

export default AdsDetails;

const InfoUser = ({ title = "", info = "" }) => {
  return (
    <div className="pe-3 min-w-[50%] flex-1 ">
      <h3 className="mb-1 font-SemiBold text-xl">{title}</h3>
      <p className=" text-grayMedium text-xl">{info}</p>
    </div>
  );
};

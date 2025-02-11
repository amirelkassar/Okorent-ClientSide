"use client";
import DemoIcon from "@/src/assets/icons/demo";
import ToDownIcon from "@/src/assets/icons/ToDown";
import Button from "@/src/components/button";
import Card from "@/src/components/card";
import GetErrorMsg from "@/src/components/getErrorMsg";
import Input from "@/src/components/input";
import InputPhone from "@/src/components/inputPhone";
import { Toast } from "@/src/components/toast";
import { useSendDemoRequest } from "@/src/hooks/queries/user/my-profile";
import React, { useState } from "react";

function RequestDemo() {
  const [formData, setFormData] = useState({
    Name: "",
    PhoneNumber: "",
    Email: "",
  });
  const { mutateAsync: SendDemo, error, reset } = useSendDemoRequest();
  const handleChange = (field: string, value: string) => {
    reset();
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  console.log(formData);
  const handleSubmit = async () => {
    reset();
    await Toast.Promise(SendDemo(formData), {
      success: "Request Demo Sent Successfully",
      onSuccess: async (res) => {
        console.log(res);
        setFormData({ Name: "", PhoneNumber: "", Email: "" });
      },
    });
  };

  return (
    <div>
      <div className="text-center flex items-end justify-center gap-2 relative w-fit mx-auto mb-section">
        <h1 className="text-[32px] lg:text-[56px] text-center mb-2 ">
          Request A Demo
        </h1>
        <span className="  animate-bounce ">
          <ToDownIcon fill="#88BA52" className="w-5 md:w-7 h-auto" />
        </span>
      </div>
      <Card className=" py-8 md:py-11 px-5 md:px-7">
        <div className="flex items-center justify-between gap-5 mdl:pe-3">
          <DemoIcon className="max-w-[480px] w-full h-auto hidden md:block" />
          <div className="flex flex-col gap-4 mdl:gap-6 w-[680px] max-w-full">
            <Input
              label="Name"
              placeholder="Enter your name"
              inputClassName="bg-white h-12 lg:h-16 rounded-xl border-green"
              value={formData.Name}
              onChange={(e) => handleChange("Name", e.target.value)}
              error={GetErrorMsg(error, "Name")}
            />

            <InputPhone
              boxClassName="flex-1 min-w-[220px]"
              inputClassName="bg-white h-12 lg:h-16 !border border-green !rounded-xl"
              flagBorder={false}
              value={formData.PhoneNumber}
              onChange={(e) => handleChange("PhoneNumber", e)}
              error={GetErrorMsg(error, "PhoneNumber")}
            />
            <Input
              label="Email"
              placeholder="Enter your email"
              inputClassName="bg-white h-12 lg:h-16 rounded-xl border-green"
              value={formData.Email}
              onChange={(e) => handleChange("Email", e.target.value)}
              error={GetErrorMsg(error, "Email")}
            />
            <Button
              onClick={handleSubmit}
              className={"flex-1 md:!h-14 !h-12 min-h-12 md:min-h-14"}
            >
              Request
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default RequestDemo;

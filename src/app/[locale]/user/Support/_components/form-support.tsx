"use client";
import Card from "@/src/components/card";
import ComplaintIcon from "@/src/assets/icons/complaint";
import IssueIcon from "@/src/assets/icons/issue";
import SalesIcon from "@/src/assets/icons/Sales";
import SomethingIcon from "@/src/assets/icons/Something";
import React, { useCallback, useState } from "react";
import Input from "@/src/components/input";
import Button from "@/src/components/button";
import { cn } from "@/src/lib/utils";
import InputTextarea from "@/src/components/InputTextarea";
import { useSupportUser } from "@/src/hooks/queries/admin/support";
import { Toast } from "@/src/components/toast";
import GetErrorMsg from "@/src/components/getErrorMsg";
import ErrorMsg from "@/src/components/error-msg";
type SupportType = "complaint" | "technical" | "sales" | "other" | "feedback";

function FormSupport() {
  const [formData, setFormData] = useState({
    Title: "",
    Content: "",
    TicketType: "",
  });
  const { mutateAsync: SendSupport, error, reset } = useSupportUser();

  const supportTypes = [
    {
      id: "1",
      label: "Complaint",
      icon: (active: any) => (
        <ComplaintIcon
          className=" h-auto w-4 mdl:w-6"
          fill={active ? "#FFFFFF" : "#006AFF"}
        />
      ),
    },
    {
      id: "2",
      label: "Technical Issue",
      icon: (active: any) => (
        <IssueIcon
          className={` h-auto w-3 mdl:w-5 `}
          fill={active ? "#FFFFFF" : "#006AFF"}
        />
      ),
    },
    {
      id: "3",
      label: "Sales support",
      icon: (active: any) => (
        <SalesIcon
          className={` h-auto w-3 mdl:w-5 `}
          fill={active ? "#FFFFFF" : "#006AFF"}
        />
      ),
    },
    {
      id: "4",
      label: "Something else",
      icon: (active: any) => (
        <SomethingIcon
          className={` h-auto w-3 mdl:w-5 `}
          fill={active ? "#FFFFFF" : "#006AFF"}
        />
      ),
    },
  ];
  // Handle input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    reset();
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const clearData = () => {
    reset();
    setFormData({
      Title: "",
      Content: "",
      TicketType: "",
    });
  };
  const handleSubmit = useCallback(async () => {
    Toast.Promise(SendSupport(formData), {
      success: "successfully Send Support",
      onSuccess: async (res) => {
        reset();
        clearData();
      },
    });
  }, [SendSupport, formData]);

  return (
    <Card className="rounded-2xl p-4 mdl:p-9">
      <div className="w-full">
        <form className="">
          <div className=" mb-8 mdl:mb-14">
            <h2 className=" text-xs md:text-base mb-5">Choose Support Type</h2>
            <div className="flex flex-wrap gap-3">
              {supportTypes.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  className={cn(
                    "flex items-center h-10 md:h-[50px] hover:shadow-md text-xs mdl:text-base duration-300 min-w-[120px] mdl:min-w-[200px] justify-center px-3 mdl:px-6 rounded-xl gap-2 ",
                    formData.TicketType === type.id
                      ? "bg-green text-white hover:bg-green"
                      : "bg-blueLight hover:bg-green/30 "
                  )}
                  onClick={() => {
                    setFormData((prev) => ({ ...prev, TicketType: type.id }));
                    reset();
                  }}
                >
                  {type.icon(formData.TicketType === type.id)}
                  <span>{type.label}</span>
                </button>
              ))}
            </div>
            <ErrorMsg error={GetErrorMsg(error, "TicketType")} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium mb-2">
                Title
              </label>
              <Input
                id="title"
                name="Title"
                value={formData.Title || ""}
                onChange={handleInputChange}
                placeholder="Profound Agency"
                inputClassName="bg-white !h-16 rounded-xl"
                className="w-full"
                error={GetErrorMsg(error, "Title")}
              />
            </div>

            <div>
              <label htmlFor="topic" className="block text-sm font-medium mb-2">
                Topic
              </label>
              <InputTextarea
                autosize
                id="topic"
                name="Content"
                value={formData.Content || ""}
                onChange={handleInputChange}
                placeholder="I want help in adjusting my..."
                inputClassName="bg-white !h-20 !min-h-20 rounded-xl"
                className="w-full min-h-20 !mb-0 "
                error={GetErrorMsg(error, "Content")}
              />
            </div>
          </div>
          <div className="flex gap-3 mt-6 md:mt-2">
            <Button
              onClick={handleSubmit}
              type="submit"
              className=" h-10 !px-8 "
            >
              Send
            </Button>
            <Button
              type="button"
              onClick={() => {
                clearData();
              }}
              variant="outline"
              className="bg-blueLight text-black border-none h-10 !px-8"
            >
              Discard
            </Button>
          </div>
        </form>
      </div>
    </Card>
  );
}

export default FormSupport;

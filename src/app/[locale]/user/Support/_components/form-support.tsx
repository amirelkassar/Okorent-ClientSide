"use client";
import Card from "@/src/components/card";
import ComplaintIcon from "@/src/assets/icons/complaint";
import IssueIcon from "@/src/assets/icons/issue";
import SalesIcon from "@/src/assets/icons/Sales";
import SomethingIcon from "@/src/assets/icons/Something";
import React, { useState } from "react";
import Input from "@/src/components/input";
import Button from "@/src/components/button";
import { cn } from "@/src/lib/utils";
import InputTextarea from "@/src/components/InputTextarea";
type SupportType = "complaint" | "technical" | "sales" | "other" | "feedback";

function FormSupport() {
  const [selectedType, setSelectedType] = useState<SupportType | null>(null);

  const supportTypes = [
    {
      id: "complaint",
      label: "Complaint",
      icon: (active: any) => (
        <ComplaintIcon
          className=" h-auto w-4 mdl:w-6"
          fill={active ? "#FFFFFF" : "#006AFF"}
        />
      ),
    },
    {
      id: "technical",
      label: "Technical Issue",
      icon: (active: any) => (
        <IssueIcon
          className={` h-auto w-3 mdl:w-5 `}
          fill={active ? "#FFFFFF" : "#006AFF"}
        />
      ),
    },
    {
      id: "sales",
      label: "Sales support",
      icon: (active: any) => (
        <SalesIcon
          className={` h-auto w-3 mdl:w-5 `}
          fill={active ? "#FFFFFF" : "#006AFF"}
        />
      ),
    },
    {
      id: "other",
      label: "Something else",
      icon: (active: any) => (
        <SomethingIcon
          className={` h-auto w-3 mdl:w-5 `}
          fill={active ? "#FFFFFF" : "#006AFF"}
        />
      ),
    },
  ];

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
                    selectedType === type.id
                      ? "bg-green text-white hover:bg-green"
                      : "bg-blueLight hover:bg-green/30 "
                  )}
                  onClick={() => setSelectedType(type.id as SupportType)}
                >
                  {type.icon(selectedType === type.id)}
                  <span>{type.label}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium mb-2">
                Title
              </label>
              <Input
                id="title"
                placeholder="Profcunt Agency"
                inputClassName="bg-white !h-16 rounded-xl"
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="topic" className="block text-sm font-medium mb-2">
                Topic
              </label>
              <InputTextarea
                autosize
                id="topic"
                placeholder="I want help in adjusting my..."
                inputClassName="bg-white !h-20 !min-h-20 rounded-xl"
                className="w-full min-h-20 !mb-0 "
              />
            </div>
          </div>
          <div className="flex gap-3 mt-6 md:mt-2">
            <Button type="submit" className=" h-10 !px-8 ">
              Send
            </Button>
            <Button
              type="button"
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

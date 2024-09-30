import DownIcon from "@/src/assets/icons/down";
import Button from "@/src/components/button";
import { Select, Textarea, TextInput } from "@mantine/core";
import React from "react";

function ContactForm() {
  return (
    <div className="flex-1 max-w-[950px] ">
      <h3 className="text-center text-2xl lg:text-3xl mb-8 lg:mb-10">Fill the form</h3>
      <div className="bg-[#E8EFF8]/80 rounded-2xl py-5 lg:py-8 px-5 lg:px-10  ">
        <form action="" className="flex flex-wrap gap-6">
          <TextInput
            type={"text"}
            label={"First Name"}
            placeholder={"Ex: John "}
            classNames={{
              input:
                "bg-white border-green/30 text-base  h-16 rounded-xl placeholder:text-grayMedium placeholder:text-base duration-300 focus:border-green focus:bg-white ",
              label: "text-lg lg:text-2xl mb-2 font-Medium ms-1",
            }}
            className="w-full md:w-[calc(50%-12px)]"
          />
          <TextInput
            type={"text"}
            label={"Last Name"}
            placeholder={"Ex: Doe"}
            classNames={{
              input:
                "bg-white border-green/30 text-base  h-16 rounded-xl  focus:border-green active:border-green placeholder:text-grayMedium placeholder:text-base duration-300 focus:border-green focus:bg-white ",
              label: "text-lg lg:text-2xl mb-2 font-Medium ms-1",
            }}
            className="w-full md:w-[calc(50%-12px)]"
          />
          <TextInput
            type={"email"}
            label={"Email"}
            placeholder={"Ex: Johndoe@gmail.com"}
            classNames={{
              input:
                "bg-white border-green/30 text-base focus:border-green active:border-green   h-16 rounded-xl placeholder:text-grayMedium placeholder:text-base duration-300 focus:border-green focus:bg-white ",
              label: "text-lg lg:text-2xl mb-2 font-Medium ms-1",
            }}
            className="w-full mb-2"
          />
          <Select
            data={["one", "two", "three", "four"]}
            leftSectionPointerEvents="none"
            rightSection={<DownIcon />}
            placeholder="Choose Subject"
            label={"Subject"}
            defaultValue={"08:00"}
            classNames={{
              label: "text-lg lg:text-2xl mb-2 font-Medium ms-1",
              input:
                "bg-white border-green/30 text-base focus:border-green active:border-green   h-16 rounded-xl placeholder:text-grayMedium placeholder:text-base duration-300 focus:border-green focus:bg-white ",

              wrapper: "h-[64px]",
              dropdown:
                "bg-white text-black rounded-2xl border border-green/50 text-grayDark py-2",
              option: "hover:bg-green hover:text-white duration-300 ",
            }}
            className="w-full mb-2"
          />
          <Textarea
            label={"How can we help"}
            autosize
            placeholder="Give us as much details as possible"
            classNames={{
              input:
                " bg-white border-green/30 text-base focus:border-green active:border-green   min-h-[180px] rounded-xl placeholder:text-grayMedium placeholder:text-base duration-300 focus:border-green focus:bg-white ",
              wrapper: "h-full",
              label: "text-lg lg:text-2xl mb-2 font-Medium ms-1",
            }}
            className="w-full mb-4"
          />
          <Button className={"px-10 w-fit ms-auto"}>Send the message</Button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;

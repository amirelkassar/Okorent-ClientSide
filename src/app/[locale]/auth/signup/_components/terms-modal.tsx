"use client";
import ModalComp from "@/src/components/modal-comp";
import { TermsAndConditions } from "@/src/lib/dataUser";
import { ScrollArea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";


function TermsModal() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div>
      <p className="text-xs text-center w-fit mx-auto mdl:text-sm font-Regular text-grayMedium">
        By Sign Up you are Accepting{" "}
        <span
          onClick={open}
          className="text-blue font-Medium cursor-pointer underline"
        >
          Terms & conditions
        </span>
      </p>
      <ModalComp title="Terms and Conditions" opened={opened} close={close}>
        <div className="w-[980px] max-w-full">
          <h3 className="pb-2 font-Bold text-base md:text-lg">
            Your Agreement
          </h3>
          <ScrollArea
            h={400}
            color="#88BA52"
            type="auto"
            classNames={{
              scrollbar: "bg-grayMedium/15 rounded-2xl",
              thumb: "bg-green",
            }}
            className="pe-5"
          >
            <div className="text-grayMedium text-base">
              <p className="text-xs mdl:text-base text-gray-600">
                Last Revised: December 16, 2013
              </p>

              <p className="text-xs mdl:text-base text-grayMedium">
                Welcome to www.lorem-ipsum.info. This site is provided as a
                service to our visitors and may be used for informational
                purposes only. Because the Terms and Conditions contain legal
                obligations, please read them carefully.
              </p>
              {TermsAndConditions?.map((item, index) => {
                return (
                  <div key={index}>
                    <h2 className="text-xs mdl:text-base text-grayMedium">
                      {index + 1}. {item.Title}
                    </h2>
                    <p className="text-xs mdl:text-base text-grayMedium capitalize">
                      {item.Content}
                    </p>
                  </div>
                );
              })}
            </div>
          </ScrollArea>
        </div>
      </ModalComp>
    </div>
  );
}

export default TermsModal;

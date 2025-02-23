import React from "react";
import Card from "./card";
import { ScrollArea } from "@mantine/core";
import { TermsContent } from "../lib/dataUser";

function ContractContent() {
  return (
    <Card className="w-full max-w-full  py-2 px-2 md:px-5">
      <h3 className="pb-2 font-Bold text-base md:text-lg">Your Agreement</h3>
      <ScrollArea
        h={400}
        color="#88BA52"
        type="auto"
        classNames={{
          scrollbar: "bg-grayMedium/15 rounded-2xl",
          thumb: "bg-green",
        }}
        className=" pe-3 md:pe-5"
      >
        <div className="text-grayMedium text-base">
          <p className="text-xs mdl:text-base text-gray-600">
            Last Revised: December 16, 2013
          </p>

          <pre className="whitespace-pre-wrap text-xs mdl:text-base text-gray-600">
            {TermsContent}
          </pre>
        </div>
      </ScrollArea>
    </Card>
  );
}

export default ContractContent;

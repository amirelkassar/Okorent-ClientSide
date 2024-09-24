"use client";
import LockIcon from "@/src/assets/icons/lock";
import TrueGreenIcon from "@/src/assets/icons/trueGreen";
import { Table } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
const IncludedPlans = [
  {
    section: "Key features",
    features: [
      {
        name: "Lorem ipsum dolor sit amet, consectetur",
        regular: true,
        premium1: true,
        premium2: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur",
        regular: true,
        premium1: true,
        premium2: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur",
        regular: true,
        premium1: true,
        premium2: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur",
        regular: false,
        premium1: true,
        premium2: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur",
        regular: false,
        premium1: true,
        premium2: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur",
        regular: false,
        premium1: true,
        premium2: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur",
        regular: false,
        premium1: true,
        premium2: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur",
        regular: true,
        premium1: true,
        premium2: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur",
        regular: true,
        premium1: true,
        premium2: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur",
        regular: true,
        premium1: true,
        premium2: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur",
        regular: true,
        premium1: true,
        premium2: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur",
        regular: true,
        premium1: true,
        premium2: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur",
        regular: false,
        premium1: true,
        premium2: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur",
        regular: false,
        premium1: true,
        premium2: true,
      },
    ],
  },
  {
    section: "Rental website",
    features: [
      {
        name: "Lorem ipsum dolor sit amet, consectetur",
        regular: true,
        premium1: true,
        premium2: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur",
        regular: true,
        premium1: true,
        premium2: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur",
        regular: true,
        premium1: true,
        premium2: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur",
        regular: true,
        premium1: true,
        premium2: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur",
        regular: true,
        premium1: true,
        premium2: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur",
        regular: false,
        premium1: true,
        premium2: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur",
        regular: false,
        premium1: true,
        premium2: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur",
        regular: true,
        premium1: true,
        premium2: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur",
        regular: true,
        premium1: true,
        premium2: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur",
        regular: true,
        premium1: true,
        premium2: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur",
        regular: true,
        premium1: true,
        premium2: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur",
        regular: true,
        premium1: true,
        premium2: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur",
        regular: false,
        premium1: true,
        premium2: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur",
        regular: false,
        premium1: true,
        premium2: true,
      },
    ],
  },
  {
    section: "Payment features",
    features: [
      {
        name: "Lorem ipsum dolor sit amet, consectetur",
        regular: true,
        premium1: true,
        premium2: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur",
        regular: true,
        premium1: true,
        premium2: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur",
        regular: true,
        premium1: true,
        premium2: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur",
        regular: false,
        premium1: true,
        premium2: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur",
        regular: false,
        premium1: true,
        premium2: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur",
        regular: false,
        premium1: true,
        premium2: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur",
        regular: false,
        premium1: true,
        premium2: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur",
        regular: true,
        premium1: true,
        premium2: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur",
        regular: true,
        premium1: true,
        premium2: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur",
        regular: true,
        premium1: true,
        premium2: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur",
        regular: true,
        premium1: true,
        premium2: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur",
        regular: true,
        premium1: true,
        premium2: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur",
        regular: false,
        premium1: true,
        premium2: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur",
        regular: false,
        premium1: true,
        premium2: true,
      },
    ],
  },
];

function Included() {
  const isMobile = useMediaQuery("(max-width: 992px)");

  return (
    <div className="mb-28">
      <h2 className="text-[32px] lg:text-[56px] text-center mb-2 ">
        What’s included
      </h2>
      <p className="text-base lg:text-xl text-center text-grayMedium mb-4 lg:mb-9">
        All plans include free onboarding, support, and help center access.
      </p>
      <div className="flex flex-col relative gap-11 max-w-[850px] justify-center items-center mx-auto after:absolute after:z-[1] after:content-[''] after:h-[90%] after:rounded-t-[700px] after:bg-[#DFEBF4]/50 after:w-[250%] after:top-1/2 after:-translate-y-1/2">
        {IncludedPlans.map((include, index) => {
          return (
            <div className=" w-full relative z-10 " key={index}>
              <h3 className="text-2xl lg:text-[32px] text-center mb-2 lg:mb-4">
                {include.section}
              </h3>
              <div className="overflow-x-auto w-full bg-white border-green/30 border-[3px] rounded-2xl lg:rounded-md pt-2">
                <Table
                  striped="even"
                  stripedColor="#88ba520f"
                  withColumnBorders
                  withRowBorders={false}
                  className="w-full"
                >
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th className="py-3 border-b font-Bold ">
                        {isMobile ? "" : "Features"}
                        
                      </Table.Th>
                      <Table.Th className="py-3 border-b font-Bold text-center">
                        {isMobile ? "Reg" : "Regular"}
                        
                      </Table.Th>
                      <Table.Th className="py-3 border-b font-Bold text-center">
                        {isMobile ? "Pro" : "Premium"}
                        
                      </Table.Th>
                      <Table.Th className="py-3 border-b font-Bold text-center">
                        {isMobile ? "Pre" : "Premium"}
                        
                      </Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {include.features.map((feature, index) => (
                      <Table.Tr key={index} className="h-11">
                        <Table.Td className="text-grayMedium text-sm lg:text-base font-SemiBold">
                          {feature.name}
                        </Table.Td>
                        <Table.Td className=" text-center">
                          {feature.regular ? (
                            <span className=" size-5 block mx-auto min-w-5">
                              <TrueGreenIcon />
                            </span>
                          ) : (
                            <span className=" size-5 block mx-auto min-w-5">
                              <LockIcon />
                            </span>
                          )}
                        </Table.Td>
                        <Table.Td className=" text-center">
                          {feature.premium1 ? (
                            <span className=" size-5 block mx-auto min-w-5">
                              <TrueGreenIcon />
                            </span>
                          ) : (
                            <span className=" size-5 block mx-auto min-w-5">
                              <LockIcon />
                            </span>
                          )}
                        </Table.Td>
                        <Table.Td className=" text-center">
                          {feature.premium2 ? (
                            <span className=" size-5 block mx-auto min-w-5">
                              <TrueGreenIcon />
                            </span>
                          ) : (
                            <span className=" size-5 block mx-auto min-w-5">
                              <LockIcon />
                            </span>
                          )}
                        </Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Included;

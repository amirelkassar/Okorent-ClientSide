"use client";
import AccordionRow from "@/src/components/accordion-row";
import Button from "@/src/components/button";
import Card from "@/src/components/card";
import { Accordion, Checkbox } from "@mantine/core";
import React from "react";
import RowTax from "./_components/row-tax";
import SearchProduct from "./_components/search-product";
import { useDisclosure } from "@mantine/hooks";
import ModalAssignTax from "./_components/modal-assign-tax";
import ModalProductTax from "./_components/modal-product-tax";
import ModalCustomerTax from "./_components/modal-customer-tax";

function Page() {
  const [opened, { open, close }] = useDisclosure(false);
  const [opened2, { open: open2, close: close2 }] = useDisclosure(false);
  const [opened3, { open: open3, close: close3 }] = useDisclosure(false);

  return (
    <div className="flex gap-8 flex-col lgl:flex-row">
      <div className="flex flex-col gap-4 flex-1">
        <Card className="p-4">
          <div className="flex gap-6 flex-wrap flex-col md:flex-row md:items-center justify-between">
            <div>
              <h3 className="mb-3 font-SemiBold text-base mdl:text-lg ">
                Default
              </h3>
              <div className="my-7 ps-2">
                <Checkbox
                  color="#88BA52"
                  value={"true"}
                  defaultChecked={true}
                  label="My prices include taxs"
                  classNames={{
                    label: "text-base font-SemiBold",
                  }}
                  description="Enable this options if your prices are entered including taxes"
                />
              </div>
            </div>
            <Button className={"h-10 !px-10"}>Save</Button>
          </div>
        </Card>
        <Card className="p-4">
          <h3 className="mb-3 font-SemiBold text-base mdl:text-lg ">
            Product Tax Profile
          </h3>
          <RowTax title="Netherland Tax Profile" />
          <div className="flex md:items-center flex-col md:flex-row gap-4 mt-5 justify-between">
            <p className="text-xs text-grayMedium font-Regular">
              Different products may be taxed at different rates, create Product
              tax profiles fitting the tax requirements of your products.
            </p>
            <Button onClick={open2} className={"!px-6 h-10 text-nowrap"}>
              Create New
            </Button>
          </div>
        </Card>
        <Card className="p-4">
          <h3 className="mb-3 font-SemiBold text-base mdl:text-lg ">
            Customer Tax Profile
          </h3>
          <RowTax title="Alabama State Tax Profile" />
          <div className="flex md:items-center flex-col md:flex-row gap-4 mt-5 justify-between">
            <p className="text-xs text-grayMedium font-Regular">
              Customer tax profiles are applied to customers, and can add to,
              compound, or replace other taxes.
            </p>
            <Button onClick={open3} className={"!px-6 h-10 text-nowrap"}>
              Create New
            </Button>
          </div>
        </Card>
      </div>
      <Card className=" w-full lgl:w-[520px] p-4">
        <h3 className="mb-3 font-SemiBold text-base mdl:text-lg ">
          Assign Tax Profiles
        </h3>
        <Accordion variant="separated" className="flex flex-col gap-6">
          <AccordionRow title="Netherland Tax Profile">
            <div>
              <SearchProduct />
              <Button
                onClick={open}
                className={"h-9 !text-xs !px-10 ms-auto rounded-xl  mt-4"}
              >
                Assign
              </Button>
            </div>
          </AccordionRow>
          <AccordionRow title="Alabama State Tax Profile">
            <div>
              <SearchProduct />
              <Button
                onClick={open}
                className={"h-9 !text-xs !px-10 ms-auto rounded-xl  mt-4"}
              >
                Assign
              </Button>
            </div>
          </AccordionRow>
        </Accordion>
      </Card>
      <ModalAssignTax opened={opened} close={close} />
      <ModalProductTax opened={opened2} close={close2} />
      <ModalCustomerTax opened={opened3} close={close3} />
    </div>
  );
}

export default Page;

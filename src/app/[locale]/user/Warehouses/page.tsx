"use client";
import PlusIcon from "@/src/assets/icons/plus";
import Button from "@/src/components/button";
import Card from "@/src/components/card";
import { DataTable } from "@/src/components/data-table";
import React from "react";
import { columns } from "./_components/columns";
import { GetMyStock } from "@/src/hooks/queries/user/lisitings/stock";
import { QueryWrapper } from "@/src/components/query-wrapper";
import ModalComp from "@/src/components/modal-comp";
import GoogleMapLoc from "@/src/components/GoogleMap";
import { useDisclosure } from "@mantine/hooks";
import CardPhoneWarehouse from "./_components/card-phone-warehouse";


function Page() {
  const query = GetMyStock();
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div>
      <div className="flex items-center justify-between gap-4 flex-wrap mb-5 mdl:mb-12">
        <h3 className=" text-lg md:text-xl mdl:text-[32px] font-SemiBold">
          Warehouses
        </h3>
        <Button onClick={open} className={"!px-3 mdl:!px-8 h-10 items-center gap-2 text-xs mdl:text-base"}>
          <PlusIcon className="mdl:w-4 w-3 h-auto" />
          Add Location
        </Button>
      </div>
      <Card className="rounded-3xl py-4 mdl:py-8 px-2 mdl:px-12 bg-transparent border-none mdl:border mdl:bg-white">
        <QueryWrapper query={query}>
          {({ data }: { data: any }) => {
            console.log(data);

            return (
              <div>
                <DataTable
                  Component={CardPhoneWarehouse}
                  title=""
                  data={data}
                  columns={columns}
                  functionSelect={[]}
                />
              </div>
            );
          }}
        </QueryWrapper>
      </Card>
      <ModalComp title="Add  location" opened={opened} close={close}>
        <GoogleMapLoc close={close} />
      </ModalComp>
    </div>
  );
}

export default Page;

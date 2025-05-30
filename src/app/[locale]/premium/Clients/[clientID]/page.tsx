"use client";
import NoteTableIcon from "@/src/assets/icons/noteTable";
import QuickEditIcon from "@/src/assets/icons/quickEdit";
import SendIcon from "@/src/assets/icons/send";
import AccordionRow from "@/src/components/accordion-row";
import Button from "@/src/components/button";
import Card from "@/src/components/card";
import Input from "@/src/components/input";
import { Accordion } from "@mantine/core";
import React from "react";
import RenderStatus from "../_components/render-status";
import SelectInput from "@/src/components/select-input";
import InputPhone from "@/src/components/inputPhone";
import { useCustomer } from "@/src/hooks/queries/premium/customers";
import { QueryWrapper } from "@/src/components/query-wrapper";
import { useParams } from "next/navigation";
import { getCustomerTypeDisplay } from "../_utils/customer-mappings";
import { CustomerDTO } from "@/src/api/admin/customers";
import { useDisclosure } from '@mantine/hooks';
import ModalEditCustomer from '../_components/modal-edit-customer';

interface ApiResponse<T> {
  data: T;
  succeeded: boolean;
  errors: null | any;
  code: number;
  message: string;
}

const dataCustomer = [
  { value: "Individual", label: "Individual" },
  { value: "Company", label: "Company" },
];
const dataTaxProfile = [
  { value: "UK", label: "UK Tax Profile" },
  { value: "EG", label: "EG Tax Profile" },
];

function Page() {
  const params = useParams();
  const clientId = params?.clientID as string;
  const query = useCustomer(clientId);
  const [opened, { open, close }] = useDisclosure(false);

  console.log('Client ID:', clientId);
  console.log('Query result:', query);
  console.log('Query data:', query.data);
  console.log('Query isLoading:', query.isLoading);
  console.log('Query error:', query.error);

  return (
    <QueryWrapper query={query}>
      {({ data }) => {
        console.log('QueryWrapper data:', data);
        const customerData = data as CustomerDTO;
        console.log('Customer data after parsing:', customerData);
        return (
          <div className="mb-section">
            <div className="flex mb-6 items-center justify-between gap-4">
              <h2 className="text-xl mdl:text-[32px] font-SemiBold">
                {customerData?.name}
              </h2>
              <Button className={"!px-3 h-10"} onClick={open}>Edit Customer Info</Button>
            </div>
            <div className="flex gap-8 flex-col lgl:flex-row">
              <div className="flex flex-col gap-4 flex-1">
                <Card className="px-3 py-4 md:px-4">
                  <h3 className="text-base md:text-xl font-SemiBold mb-7">
                    General Info
                  </h3>
                  <div className="flex flex-col mdl:flex-row gap-4 mdl:gap-8 flex-wrap">
                    <Input
                      label="Email"
                      leftSection={
                        <span className="text-base ms-1 !text-black font-Medium bg-blueLight size-10 rounded-full flex items-center justify-center min-w-10">
                          {customerData?.name?.charAt(0)}
                        </span>
                      }
                      defaultValue={customerData?.email}
                      className="h-auto min-w-[calc(50%-16px)] flex-1"
                      inputClassName="bg-white rounded-xl h-16 border-green/50 ps-[52px]"
                    />
                    <Input
                      label="Discount Percentage"
                      placeholder="% 0"
                      defaultValue={customerData?.discount?.toString()}
                      className="h-auto min-w-[calc(50%-16px)] flex-1"
                      inputClassName="bg-white rounded-xl h-16 border-green/50"
                    />
                    <SelectInput
                      data={dataCustomer}
                      label="Customer Type"
                      placeholder="Customer Type"
                      onChange={(e) => {
                        console.log(e);
                      }}
                      defaultValue={getCustomerTypeDisplay(customerData?.customerType)}
                      inputClassName="!h-16"
                      className="h-auto min-w-[calc(50%-16px)] flex-1"
                    />
                    <SelectInput
                      data={dataTaxProfile}
                      label="Tax Profile"
                      placeholder="Tax Profile"
                      onChange={(e) => {
                        console.log(e);
                      }}
                      defaultValue={"UK"}
                      inputClassName="!h-16"
                      className="h-auto min-w-[calc(50%-16px)] flex-1"
                    />
                    <InputPhone
                      boxClassName={"h-auto min-w-[calc(50%-16px)] flex-1 rounded-xl"}
                      inputClassName="bg-white !h-16 !border border-green/30 rounded-xl"
                      flagBorder={false}
                      value={customerData?.phoneNumber}
                    />
                    <Input
                      label="Security Deposit"
                      placeholder="% 50"
                      defaultValue={customerData?.securityDepositValue}
                      className="h-auto min-w-[calc(50%-16px)] flex-1"
                      inputClassName="bg-white rounded-xl h-16 border-green/50"
                    />
                    <Input
                      label="Contact Person Name"
                      placeholder="Contact Person Name"
                      defaultValue={customerData?.name}
                      className="h-auto min-w-[calc(50%-16px)] flex-1"
                      inputClassName="bg-white rounded-xl h-16 border-green/50"
                    />
                    <Input
                      label="Contact Person Email"
                      leftSection={
                        <span className="text-base ms-1 !text-black font-Medium bg-blueLight size-10 rounded-full flex items-center justify-center min-w-10">
                          {customerData?.name?.charAt(0)}
                        </span>
                      }
                      defaultValue={customerData?.email}
                      className="h-auto min-w-[calc(50%-16px)] flex-1"
                      inputClassName="bg-white rounded-xl h-16 border-green/50 ps-[52px]"
                    />
                  </div>
                </Card>
                <Card className="py-4 px-2 md:px-4 pointer-events-none">
                  <h3 className="text-base md:text-xl font-SemiBold mb-7">
                    Address Info
                  </h3>
                  <div className="flex flex-col mdl:flex-row gap-4 mdl:gap-8 flex-wrap">
                    <Input
                      label="Addresses"
                      placeholder="Addresses"
                      defaultValue={customerData?.address}
                      className="h-auto w-full"
                      inputClassName="bg-white rounded-xl w-full h-16 border-green/50"
                    />
                    <Input
                      label="Country"
                      placeholder="Country"
                      defaultValue={customerData?.country}
                      className="h-auto w-full flex-1 min-w-[calc(50%-16px)]"
                      inputClassName="bg-white rounded-xl w-full h-16 border-green/50"
                    />
                    <Input
                      label="City"
                      placeholder="City"
                      defaultValue={customerData?.city}
                      className="h-auto w-full flex-1 min-w-[calc(50%-16px)]"
                      inputClassName="bg-white rounded-xl w-full h-16 border-green/50"
                    />
                    <Input
                      label="Region"
                      placeholder="Region"
                      defaultValue={customerData?.reigon}
                      className="h-auto w-full flex-1 min-w-[calc(50%-16px)]"
                      inputClassName="bg-white rounded-xl w-full h-16 border-green/50"
                    />
                    <Input
                      label="Zip Code"
                      placeholder="Zip Code"
                      defaultValue={customerData?.zipCode}
                      className="h-auto w-full flex-1 min-w-[calc(50%-16px)]"
                      inputClassName="bg-white rounded-xl w-full h-16 border-green/50"
                    />
                  </div>
                </Card>
              </div>
              <Card className=" w-full lgl:w-[520px] p-4">
                <Accordion variant="Clients" className="flex flex-col gap-6">
                  <AccordionRow
                    title="Tags"
                    icon={() => (
                      <QuickEditIcon fill="#0F2A43" className="w-full h-auto" />
                    )}
                  >
                    <div className="flex flex-wrap gap-2 ">
                      <RenderStatus status="Loyal" />
                      <RenderStatus status="New" />
                    </div>
                    <Button className={"h-9 !px-8 !text-xs ms-auto mt-9"}>
                      Edit Tags
                    </Button>
                  </AccordionRow>
                  <AccordionRow
                    title="Notes"
                    icon={() => (
                      <NoteTableIcon fill="#0F2A43" className="w-full h-auto" />
                    )}
                  >
                    <div>
                      <Input
                        placeholder="Add new note..."
                        inputClassName="h-16 w-full bg-white rounded-xl border-green/50"
                      />
                    </div>
                  </AccordionRow>
                </Accordion>
                <Card className="p-3 flex items-center gap-4 justify-between mt-6">
                  <p className="text-xs">
                    Invite your clients to login and reserve your items online
                  </p>
                  <Button className={"!px-4 h-9 gap-2"}>
                    <SendIcon className="w-3 h-auto -rotate-45" />
                    <p className="!text-xs text-nowrap">Send Invite</p>
                  </Button>
                </Card>
              </Card>
            </div>
            {customerData && (
              <ModalEditCustomer opened={opened} close={close} customer={customerData} />
            )}
          </div>
        );
      }}
    </QueryWrapper>
  );
}

export default Page;

"use client";
import { DataTable } from "@/src/components/data-table";
import { MembershipsData } from "@/src/lib/dataUser";
import React from "react";
import { columns } from "./_components/columns";
import ChangeIcon from "@/src/assets/icons/change";
import HowIcon from "@/src/assets/icons/how";
import NoteTableIcon from "@/src/assets/icons/noteTable";
import CloseIcon from "@/src/assets/icons/close";
import { useDisclosure } from "@mantine/hooks";
import NoteModal from "@/src/components/NoteModal";
import SuspendModal from "./_components/SuspendModal";
import CancelModal from "./_components/cancel-modal";
import ChangePlanModal from "./_components/change-plan-modal";
import CardPhoneMemberships from "./_components/card-phone-account";
import { TableHeader } from "@/src/components/table/table-header";

const FilterOptions = [
  {
    label: "Essential Package",
    type: "filter",
    key: "Essential Package",
  },
  {
    label: "Pro Package",
    type: "filter",
    key: "Pro Package",
  },
  {
    label: "Premium Package",
    type: "filter",
    key: "Premium Package",
  },
];
function Page() {
  const [opened, { open, close }] = useDisclosure(false);
  const [opened2, { open: open2, close: close2 }] = useDisclosure(false);
  const [opened3, { open: open3, close: close3 }] = useDisclosure(false);
  const [opened4, { open: open4, close: close4 }] = useDisclosure(false);

  const functionSelect = [
    {
      title: "Change Plan",
      icon: <ChangeIcon fill="#006AFF" className="max-h-4 w-auto " />,
      onclick: open4,
    },
    {
      title: "Suspend Plan",
      icon: <HowIcon fill="#006AFF" className="max-h-4 w-auto " />,
      onclick: open2,
    },
    {
      title: "Send Note",
      icon: <NoteTableIcon className="max-h-4 w-auto " />,
      onclick: open,
    },
    {
      title: "Cancel Plan",
      icon: <CloseIcon fill="#E31B1B" className="max-h-4 w-auto " />,
      onclick: open3,
    },
  ];
  return (
    <div>
      <TableHeader>
        <TableHeader.First title={` All Memberships - 11054`} />
        <TableHeader.Last options={FilterOptions} />
      </TableHeader>
      <DataTable
        data={MembershipsData}
        columns={columns}
        Component={CardPhoneMemberships}
        functionSelect={functionSelect}
      />
      <NoteModal opened={opened} close={close} />
      <SuspendModal opened={opened2} close={close2} />
      <CancelModal opened={opened3} close={close3} />
      <ChangePlanModal opened={opened4} close={close4} />
    </div>
  );
}

export default Page;

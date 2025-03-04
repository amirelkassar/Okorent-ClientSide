"use client";
import { DataTable } from "@/src/components/data-table";
import LinkGreen from "@/src/components/linkGreen";
import { TableHeader } from "@/src/components/table/table-header";
import { Clients, STYLE_ICON } from "@/src/lib/dataUser";
import React, { useMemo } from "react";
import { columns } from "./_components/columns";
import ROUTES from "@/src/routes";
import PlusIcon from "@/src/assets/icons/plus";
import DeleteIcon from "@/src/assets/icons/delete";
import EditIcon from "@/src/assets/icons/edit";
import QuickEditIcon from "@/src/assets/icons/quickEdit";
import CardPhoneClients from "./_components/card-phone-client";
import { useDisclosure } from "@mantine/hooks";
import ModalEditTags from "./_components/modal-edit-tags";
import ModalEditClients from "./_components/modal-edit-clients";
import ModalAddCustomer from "./_components/modal-add-customer";
import Button from "@/src/components/button";
const FilterOptions = [
  {
    label: "Online",
    key: "Type",
    value: "Online",
  },
  {
    label: "Offline",
    key: "Type",
    value: "Offline",
  },
];

function Page() {
  const [opened, { open, close }] = useDisclosure(false);
  const [opened2, { open: open2, close: close2 }] = useDisclosure(false);
  const [opened3, { open: open3, close: close3 }] = useDisclosure(false);

  const functionSelect = useMemo(
    () => [
      {
        title: "Edit Tag",
        icon: <QuickEditIcon fill="#006AFF" className={STYLE_ICON} />,
        onclick: (ids: any) => {
          open();
        },
      },
      {
        title: "Quick Edit",
        icon: <EditIcon fill="#006AFF" className={STYLE_ICON} />,
        onclick: (ids: any) => {
          open2();
        },
      },
      {
        title: "Delete",
        icon: <DeleteIcon className={STYLE_ICON} />,
        onclick: (ids: any) => {
          console.log(ids);
        },
      },
    ],
    []
  );
  return (
    <div>
      <TableHeader>
        <TableHeader.First title="" className="w-full ">
          <div className="flex items-center gap-3 w-full lg:w-fit justify-between">
            <h2 className="headTitle mdl:min-h-10 text-nowrap place-content-center block lg:hidden">
              Clients
            </h2>
            <Button
              onClick={() => open3()}
              className={"gap-2 h-10"}
            >
              <PlusIcon className="w-4 h-auto" />
              Add Customer
            </Button>
          </div>
        </TableHeader.First>
        <TableHeader.Last className="" options={FilterOptions} />
      </TableHeader>

      <div>
        <DataTable
          Component={CardPhoneClients}
          data={Clients}
          columns={columns}
          functionSelect={functionSelect}
        />
      </div>
      <ModalEditTags opened={opened} close={close} />
      <ModalEditClients opened={opened2} close={close2} />
      <ModalAddCustomer opened={opened3} close={close3} />
    </div>
  );
}

export default Page;

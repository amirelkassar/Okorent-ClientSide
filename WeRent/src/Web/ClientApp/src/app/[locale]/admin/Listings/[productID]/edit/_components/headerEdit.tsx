"use client";
import DeleteIcon from "@/src/assets/icons/delete";
import NoteTableIcon from "@/src/assets/icons/noteTable";
import TrueIcon from "@/src/assets/icons/true";
import UnVerifyIcon from "@/src/assets/icons/unVerify";
import Events from "@/src/components/Events";
import LinkGreen from "@/src/components/linkGreen";
import NoteModal from "@/src/components/NoteModal";
import ROUTES from "@/src/routes";
import { useDisclosure } from "@mantine/hooks";
import React from "react";

function HeaderEdit({ id }: any) {
  const [opened, { open, close }] = useDisclosure(false);
  const functionSelect = [
    {
      title: "Discard Edits",
      icon: <UnVerifyIcon fill="#006AFF" />,
      link: ROUTES.ADMIN.LISTINGSDETAILS(1),
      onclick: () => {},
    },
    {
      title: "Send Note",
      icon: <NoteTableIcon />,
      onclick: open,
    },
    {
      title: "Delete",
      icon: <DeleteIcon />,
      onclick: (ids: any) => {
        console.log([...ids]);
      },
    },
  ];
  return (
    <div className="flex items-center gap-3 mb-8 flex-wrap">
      <LinkGreen
        href={ROUTES.ADMIN.LISTINGSDETAILS(id)}
        className={"h-10 px-5 gap-2"}
      >
        <TrueIcon fill="white" className="w-4 h-auto" />
        <p className="text-sm">Save Edits</p>
      </LinkGreen>
      {functionSelect.map((item, index) => {
        return <Events key={index} item={item} ids={[1]} />;
      })}
      {opened && <NoteModal opened={opened} close={close} />}
    </div>
  );
}

export default HeaderEdit;

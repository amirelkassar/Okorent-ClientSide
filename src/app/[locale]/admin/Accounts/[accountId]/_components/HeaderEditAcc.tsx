"use client";
import DeactivateIcon from "@/src/assets/icons/Deactivate";
import DeleteIcon from "@/src/assets/icons/delete";
import NoteTableIcon from "@/src/assets/icons/noteTable";
import TrueIcon from "@/src/assets/icons/true";
import Events from "@/src/components/Events";
import React from "react";
import SwitchViewProfile from "./switchViewProfile";
import NoteModal from "@/src/components/NoteModal";
import { useDisclosure } from "@mantine/hooks";
import DeactivateModal from "../../_components/DeactivateModal";
import EditIcon from "@/src/assets/icons/edit";
import ModalEditProfile from "./modal-edit-profile";
import { useRowActionAccountInAdmin } from "../../_hooks/use-row-action";
import UnVerifyIcon from "@/src/assets/icons/unVerify";
interface HeaderEditAccProps {
  id: number;
  viewProfile: string;
  setViewProfile: (value: string) => void;
  query: any;
}

function HeaderEditAcc({
  id,
  viewProfile,
  setViewProfile,
  query,
}: HeaderEditAccProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const [opened2, { open: open2, close: close2 }] = useDisclosure(false);
  const [opened3, { open: open3, close: close3 }] = useDisclosure(false);
  const {
    onSubmitDeleteAccount,
    onSubmitActivateAccount,
    onSubmitVerificationAccount,
  } = useRowActionAccountInAdmin(id);

  const functionSelect = [
    {
      title: "Edit",
      icon: <EditIcon className="max-h-3 w-auto" fill="#006AFF" />,
      onclick: () => {
        open3();
      },
    },
    ...(query.data?.data?.isVerified
      ? [
          {
            title: "Unverify",
            icon: <UnVerifyIcon fill="#006AFF" className="w-3 h-auto" />,
            onclick: () => {
              onSubmitVerificationAccount({ userId: id, verify: false });
            },
          },
        ]
      : [
          {
            title: "Verify",
            icon: <TrueIcon className="max-h-4 w-auto" />,
            onclick: () => {
              onSubmitVerificationAccount({ userId: id, verify: true });
            },
          },
        ]),

    ...(query.data?.data?.isActivated
      ? [
          {
            title: "Deactivate",
            icon: <DeactivateIcon className="max-h-4 w-auto" />,
            onclick: () => {
              open2();
            },
          },
        ]
      : [
          {
            title: "Activate",
            icon: <TrueIcon fill="#006AFF" className="w-3 h-auto" />,
            onclick: () => {
              onSubmitActivateAccount();
            },
          },
        ]),

    {
      title: "Send Note",
      icon: <NoteTableIcon className="max-h-4 w-auto" />,
      onclick: open,
    },

    {
      title: "Delete",
      icon: <DeleteIcon className="max-h-4 w-auto" />,
      onclick: () => {
        onSubmitDeleteAccount();
      },
    },
  ];
  console.log(query);

  return (
    <div className="flex items-center justify-center md:justify-between gap-7 flex-wrap mb-8">
      <div className="flex md:items-center flex-col md:flex-row gap-5">
        <h2 className="text-lg lg:text-[32px] font-SemiBold">Profile</h2>
        <div className="flex items-center gap-3 flex-wrap">
          {!query.isLoading &&
            functionSelect.map((item, index) => {
              return <Events key={index} item={item} ids={"id"} />;
            })}
        </div>
      </div>

      <SwitchViewProfile
        viewProfile={viewProfile}
        setViewProfile={setViewProfile}
      />
      <DeactivateModal id={id} opened={opened2} close={close2} />
      <NoteModal opened={opened} close={close} />
      {!query.isLoading && (
        <ModalEditProfile
          opened={opened3}
          close={close3}
          initialData={query.data?.data || {}}
        />
      )}
    </div>
  );
}

export default HeaderEditAcc;

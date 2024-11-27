import ModalComp from "@/src/components/modal-comp";
import React, { useState } from "react";
import { StaticImageData } from "next/image";
import avatar from "@/src/assets/images/avatar.png";
import Input from "@/src/components/input";
import SearchIcon from "@/src/assets/icons/search";
import DeleteIcon from "@/src/assets/icons/delete";
import Button from "@/src/components/button";
import UserCardInfo from "../user-card-info";
import AssignRadioGroup from "./assign-radio-group";

interface UserSelectedProps {
  id: number;
  name: string;
  email: string;
  avatar: StaticImageData;
}
const users = [
  {
    id: 1,
    name: "Ahmed Mohamed Badr",
    email: "ahmed5badr51@gmail.com",
    avatar: avatar,
  },
  {
    id: 2,
    name: "Ahmed Mohamed Badr",
    email: "ahmed5badr5@gmail.com",
    avatar: avatar,
  },
  {
    id: 3,
    name: "Ahmed Mohamed Badr",
    email: "ahmed5badr5@gmail.com",
    avatar: avatar,
  },
  {
    id: 4,
    name: "Ahmed Mohamed Badr",
    email: "ahmed5badr5@gmail.com",
    avatar: avatar,
  },
];

function AssignModal({ opened, close, id }: any) {
  const [userSelected, setUserSelected] = useState<UserSelectedProps | null>();

  return (
    <ModalComp opened={opened} close={close} title={"Assign Listing"}>
      <div className="lg:w-[580px] w-full flex flex-col gap-4">
        <p className="text-base font-Regular">
          Choose a client from the list to complete the assignment.
        </p>
        {userSelected?.id ? (
          <div>
            <div className="flex items-center gap-4 w-full">
              <div className="px-4 py-2 border border-grayLight rounded-xl flex-1 ">
                <UserCardInfo
                  image={userSelected.avatar}
                  name={userSelected.name}
                  email={userSelected.email}
                />
              </div>
              <button
                onClick={() => {
                  setUserSelected(null);
                }}
                className="flex items-center justify-center p-2 md:p-3 bg-blueLight rounded-full size-8 md:size-12"
              >
                <DeleteIcon className="h-full w-auto" />
              </button>
            </div>
            <div className="flex items-center gap-7 w-full mt-10">
              <Button
                onClick={close}
                className={
                  " flex-1 h-[54px] text-black bg-grayBack border-none"
                }
              >
                Cancel
              </Button>
              <Button onClick={close} className={" flex-1 h-[54px]"}>
                Assign
              </Button>
            </div>
          </div>
        ) : (
          <>
            <Input
              placeholder="Search by Name"
              leftSection={<SearchIcon className="w-4 h-auto" fill="#0F2A43" />}
              inputClassName="bg-white h-11 md:h-16 rounded-xl"
            />
            <AssignRadioGroup users={users} setUserSelected={setUserSelected} />
          </>
        )}
      </div>
    </ModalComp>
  );
}

export default AssignModal;

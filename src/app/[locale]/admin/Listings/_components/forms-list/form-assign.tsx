"use client";
import SearchIcon from "@/src/assets/icons/search";
import CardList from "@/src/components/card-list";
import Input from "@/src/components/input";
import { Popover } from "@mantine/core";
import React, { useState } from "react";
import avatar from "@/src/assets/images/avatar.png";
import { StaticImageData } from "next/image";
import DeleteIcon from "@/src/assets/icons/delete";
import UserCardInfo from "./user-card-info";
import AssignRadioGroup from "./assign-comp/assign-radio-group";
import ButtonDelete from "@/src/components/button-delete";
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

function FormAssign() {
  const [openSearch, setOpenSearch] = useState(false); // Default selected user (id: 1)
  const [userSelected, setUserSelected] = useState<UserSelectedProps | null>();

  return (
    <CardList title="Assign Listing">
      {userSelected?.id ? (
        <div className="flex items-center gap-4 md:max-w-[60%] w-full">
          <div className="px-4 py-2 border border-grayLight rounded-xl flex-1 ">
            <UserCardInfo
              image={userSelected.avatar}
              name={userSelected.name}
              email={userSelected.email}
            />
          </div>

          <ButtonDelete
            onClick={() => {
              setUserSelected(null);
            }}
          />
        </div>
      ) : (
        <>
          <Popover
            width="target"
            shadow="md"
            position="top-start"
            opened={openSearch}
            classNames={{
              dropdown: "bg-transparent !p-0 rounded-xl",
            }}
            offset={-12}
            onClose={() => setOpenSearch(false)}
          >
            <Popover.Target>
              <button className="opacity-0 h-0 md:max-w-[60%] w-full">
                Popover
              </button>
            </Popover.Target>
            <Popover.Dropdown>
              <AssignRadioGroup
                users={users}
                setUserSelected={setUserSelected}
              />
            </Popover.Dropdown>
          </Popover>

          <Input
            placeholder="Search by Name"
            leftSection={<SearchIcon className="w-4 h-auto" fill="#0F2A43" />}
            inputClassName="bg-white h-11 md:h-16 rounded-xl"
            className="md:max-w-[60%]"
            onFocus={() => {
              setOpenSearch(true);
            }}
          />
        </>
      )}
    </CardList>
  );
}

export default FormAssign;

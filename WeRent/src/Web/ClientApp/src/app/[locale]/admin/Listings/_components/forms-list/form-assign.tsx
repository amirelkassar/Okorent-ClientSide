import SearchIcon from "@/src/assets/icons/search";
import Button from "@/src/components/button";
import CardList from "@/src/components/card-list";
import Input from "@/src/components/input";
import { Popover, Radio } from "@mantine/core";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import avatar from "@/src/assets/images/avatar.png";
import AssignCardUser from "./assign-card-user";
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
  const [openSearch, setOpenSearch] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState("1"); // Default selected user (id: 1)

  const cards = useMemo(() => {
    return users.map((item) => (
      <Radio.Card
        radius="md"
        className="border-none"
        value={item.id.toString()}
        key={item.id}
      >
        <AssignCardUser
          image={item.avatar}
          name={item.name}
          email={item.email}
        />
      </Radio.Card>
    ));
  }, [users]);

  return (
    <CardList title="Assign Listing">
      <Popover
        width={750}
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
          <button className="opacity-0 h-0">Popover</button>
        </Popover.Target>
        <Popover.Dropdown>
          <div className="  px-4 py-6 rounded-xl border border-green shadow-md duration-200 bg-white">
            <Radio.Group value={selectedUserId} onChange={setSelectedUserId}>
              <div className="flex flex-col gap-4 mb-10">{cards}</div>
            </Radio.Group>
            <Button className={"h-10 w-[174px] ms-auto"}>Assign</Button>
          </div>
        </Popover.Dropdown>
      </Popover>

      <Input
        placeholder="Search by Name"
        leftSection={<SearchIcon className="w-4 h-auto" fill="#0F2A43" />}
        inputClassName="bg-white h-16 rounded-xl"
        className="max-w-[60%]"
        onFocus={() => {
          setOpenSearch(true);
        }}
      />
    </CardList>
  );
}

export default FormAssign;

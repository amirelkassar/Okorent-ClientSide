import { Radio } from '@mantine/core';
import { StaticImageData } from 'next/image';
import React, { useMemo, useState } from 'react'

import Button from '@/src/components/button';
import AssignCardUser from './assign-card-user';
interface UserSelectedProps {
    id: number;
    name: string;
    email: string;
    avatar: StaticImageData;
  }
interface AssignRadioGroupProps{
    users:UserSelectedProps[]
    setUserSelected:React.Dispatch<React.SetStateAction<UserSelectedProps | null | undefined>>
}
function AssignRadioGroup({users,setUserSelected}:AssignRadioGroupProps) {
    const [selectedUserId, setSelectedUserId] = useState("1"); 
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
    <div className=" px-2 md:px-4 py-2 md:py-5 rounded-xl border border-green shadow-md duration-200 bg-white">
    <Radio.Group
      value={selectedUserId}
      onChange={setSelectedUserId}
    >
      <div className="flex flex-col md:gap-2 mb-5 md:mb-10">{cards}</div>
    </Radio.Group>
    <Button
      className={"h-10 w-[174px] ms-auto"}
      onClick={() => {
        setUserSelected(
          users.find((item) => item.id === +selectedUserId)
        );
      }}
    >
      Assign
    </Button>
  </div>
  )
}

export default AssignRadioGroup
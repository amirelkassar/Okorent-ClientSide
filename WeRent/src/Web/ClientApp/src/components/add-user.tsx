"use client";

import React from "react";
import ModalComp from "./modal-comp";
import { useDisclosure } from "@mantine/hooks";
import Button from "./button";
import Input from "./input";
import Password from "./password";
import AddUserIcon from "../assets/icons/addUser";
import InputPhone from "./inputPhone";
import SelectInput from "./select-input";

function AddUser() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Button className={"h-10 w-fit gap-3  "} onClick={open}>
        <AddUserIcon />
        Add user
      </Button>
      <ModalComp title="Add user" opened={opened} close={close}>
        <div className="flex flex-col gap-4 w-[570px] max-w-full">
          <Input
            sectionType="user"
            inputClassName="bg-white h-16 rounded-xl"
            label="Name"
            placeholder="Write customer name here"
            className="flex-1"
          />
          <div className="flex gap-7">
            <Input
              sectionType="email"
              type="email"
              inputClassName="bg-white h-16 rounded-xl"
              label="Name"
              placeholder="Write customer email here"
              className="flex-1"
            />
            <SelectInput
              data={[
                "Basic",
                "Basic2",
                "Basic3",
                "Basic4",
                "Basic5",
              ]}
              label='Plan'
              defaultValue={'Basic'}
              className="flex-1"
            />
          </div>
          <div className="flex gap-7">
            <InputPhone
              boxClassName={"flex-1"}
              inputClassName="bg-white h-16 !border border-green/30"
              flagBorder={false}
            />
            <Password
              label="Password"
              inputClassName="h-16 bg-white border-green-30 border"
              className="flex-1"
              placeholder="Write password here"
            />
          </div>

          <div className="flex items-center gap-7 mt-5 w-full pb-5">
            <Button
              onClick={close}
              className={" flex-1 h-[54px] text-black bg-grayBack border-none"}
            >
              Cancel
            </Button>
            <Button className={"w-full flex-1 "} onClick={close}>
              Create Account
            </Button>
          </div>
        </div>
      </ModalComp>
    </>
  );
}

export default AddUser;

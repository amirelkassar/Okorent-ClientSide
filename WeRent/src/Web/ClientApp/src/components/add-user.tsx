"use client";

import React from "react";
import ModalComp from "./modal-comp";
import { useDisclosure } from "@mantine/hooks";
import Button from "./button";
import Input from "./input";
import Password from "./password";
import AddUserIcon from "../assets/icons/addUser";

function AddUser() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Button className={"h-10 w-fit gap-3 "} onClick={open}>
        <AddUserIcon/>
        Add user
      </Button>
      <ModalComp title="Add user" opened={opened} close={close}>
        <div className="flex flex-col gap-4 w-[460px] max-w-full">
          <Input label="Name" placeholder="Write your name here" />
          <Input label="Email" placeholder="Write you email here" />
          <Password label="Password" placeholder="Write password here" />
          <Input label="Phone Number" placeholder="Write phone number here  " />
          <Button className={'w-full mt-3 '} onClick={close}>Create Account</Button>
        </div>
      </ModalComp>
    </>
  );
}

export default AddUser;

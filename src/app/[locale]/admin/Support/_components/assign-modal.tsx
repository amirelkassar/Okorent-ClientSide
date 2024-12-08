import AddUserIcon from "@/src/assets/icons/addUser";
import Button from "@/src/components/button";
import Input from "@/src/components/input";
import ModalComp from "@/src/components/modal-comp";
import React from "react";

function AssignModal({ opened, close, id }: any) {
  return (
    <ModalComp opened={opened} close={close} title={"Assign Ticket"}>
      <div className="lg:w-[580px] w-full flex flex-col gap-4">
        <Input
          placeholder="Write assigned to name here"
          inputClassName="bg-white h-12 lg:h-16"
          leftSection={<AddUserIcon fill="#0F2A43" className=" w-4 md:w-6 h-auto" />}
        />
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-7 w-full mt-5 md:mt-12">
          <Button
            onClick={close}
            className={" md:flex-1 h-[54px] text-black bg-grayBack border-none"}
          >
            Cancel
          </Button>
          <Button onClick={close} className={" md:flex-1 h-[54px]"}>
            Send
          </Button>
        </div>
      </div>
    </ModalComp>
  );
}

export default AssignModal;

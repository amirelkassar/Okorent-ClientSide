import Image from "next/image";
import React from "react";
import avatar from "@/src/assets/images/avatar.png";
import EditIcon from "@/src/assets/icons/edit";
import { TextInput } from "@mantine/core";
function CardEdit() {
  return (
    <div className="pt-[50px] w-full pb-10 ps-9 pe-14 items-center rounded-3xl border border-green bg-white/50 shadow-sidebar  flex  gap-8 max-w-[684px]">
      <div className="flex size-[104px] relative flex-col gap-2 justify-center mt-4">
        <Image
          alt="user"
          src={avatar}
          className=" size-full  rounded-[50%] object-cover object-top"
          priority
        />
        <div className=" size-8 rounded-full p-2 bg-white cursor-pointer duration-300 hover:shadow-md flex items-center justify-center absolute -bottom-4 left-[50%] -translate-x-1/2">
          <EditIcon className="w-full h-auto"/>
        </div>
      </div>
      <div className="flex flex-col flex-1  gap-3">
        <TextInput label={'Name'}  defaultValue={'Ahmed Mohamed Badr'}
        classNames={{
          input:'bg-white border rounded-lg text-grayMedium font-Medium border-green h-[36px]',
          label:'ps-1 text-black'
        }}
        />
         <TextInput label={'Rating'}  defaultValue={4.52}
        classNames={{
          input:'bg-white border rounded-lg text-grayMedium font-Medium border-green h-[36px]',
          label:'ps-1 text-black'
        }}
        />
         <TextInput label={'Rented Items'}  defaultValue={320}
        classNames={{
          input:'bg-white border rounded-lg text-grayMedium font-Medium border-green h-[36px]',
          label:'ps-1 text-black'
        }}
        />
         <TextInput label={'Leased Items'}  defaultValue={'Ahmed Mohamed Badr'}
        classNames={{
          input:'bg-white border rounded-lg text-grayMedium font-Medium border-green h-[36px]',
          label:'ps-1 text-black'
        }}
        />
      </div>
    </div>
  );
}

export default CardEdit;

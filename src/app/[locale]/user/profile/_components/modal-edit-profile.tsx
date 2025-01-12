import ClockIcon from '@/src/assets/icons/clock'
import Button from '@/src/components/button'
import Input from '@/src/components/input'
import InputTextarea from '@/src/components/InputTextarea'
import ModalComp from '@/src/components/modal-comp'
import { MultiSelect } from '@mantine/core'
import { TimeInput } from '@mantine/dates'
import React from 'react'

function ModalEditProfile({opened,close,initialData}:{opened:boolean,close:()=>void,initialData:any}) {
  console.log(initialData);
  
  return (
    <ModalComp opened={opened} close={close} title="Edit profile">
    <form className="flex flex-col gap-4 w-[500px] max-w-full ">
      <Input label="Name" placeholder="Name" defaultValue={initialData?.name} />
      <Input label="Email" placeholder="Email" defaultValue={initialData?.userName} />
      <Input label="Phone Number" placeholder="Phone Number" defaultValue={initialData?.phone} />

      <MultiSelect
        label="Languages"
        data={["English", "French"]}
        defaultValue={initialData?.languages}
        placeholder="Select Languages"
        searchable
        nothingFoundMessage="No results"
        classNames={{
          input: "bg-grayLight border-none h-11 rounded-[8px] ",
          label: "text-[16px] mb-2 font-Medium ms-1",
          inputField: " h-full placeholder:text-xs ",
          pillsList: "h-full ",
          pill: "bg-green text-white rounded-lg text-xs font-Regular",
          dropdown:
            "bg-white text-black rounded-lg border border-green/50 text-grayDark py-2",
          option:
            "hover:bg-green hover:text-white duration-300  flex items-center ",
        }}
        clearable
      />
      <div className="flex flex-col gap-4">
        <p className="text-sm lg:text-base font-Medium mb-1">
          Address information
        </p>
        <Input label="Street Name" placeholder="Street Name" defaultValue={initialData?.address} />
        <Input label="Postal Code" placeholder="Postal Code" />
      </div>
      <div className="flex gap-7">
        <Input label="Country" placeholder="Country" className="flex-1" />
        <Input label="City" placeholder="City" className="flex-1" />
      </div>
      <InputTextarea
        label="About"
        placeholder="About"
        inputClassName="min-h-[100px] bg-grayLight focus:bg-white"
        autosize
        className="h-auto !min-h-10 !mb-0"
        defaultValue={initialData?.description||''}
      />
      <MultiSelect
        label="Working Days"
        data={["Saturday", "Friday"]}
        placeholder="Select Working Days"
        searchable
        nothingFoundMessage="No results"
        classNames={{
          input: "bg-grayLight border-none h-11 rounded-[8px] ",
          label: "text-[16px] mb-2 font-Medium ms-1",
          inputField: " h-full placeholder:text-xs ",
          pillsList: "h-full ",
          pill: "bg-green text-white rounded-lg text-xs font-Regular",
          dropdown:
            "bg-white text-black rounded-lg border border-green/50 text-grayDark py-2",
          option:
            "hover:bg-green hover:text-white duration-300  flex items-center ",
        }}
        clearable
      />
      <div>
        <p className="text-sm lg:text-base font-Medium mb-1">
          Opining hours
        </p>
        <div className="flex items-center gap-4 w-full">
          <TimeInput
            leftSection={<ClockIcon className="w-4 h-4" />}
            classNames={{
              input: "bg-grayLight border-none w-full  ",
              section: "text-grayMedium",
            }}
            className="w-full"
          />
          <TimeInput
            leftSection={<ClockIcon className="w-4 h-4" />}
            classNames={{
              input: "bg-grayLight border-none w-full  ",
              section: "text-grayMedium",
            }}
            className="w-full"
          />
        </div>
      </div>
    </form>
    <div className="flex items-center mt-11 justify-between w-full gap-6 pb-7">
      <Button
        className={"bg-grayBack flex-1 border-none text-black"}
        onClick={close}
      >
        Discard Edits
      </Button>
      <Button className={"flex-1"}>Confirm</Button>
    </div>
  </ModalComp>
  )
}

export default ModalEditProfile
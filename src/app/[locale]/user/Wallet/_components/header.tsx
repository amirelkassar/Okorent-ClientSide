"use client";
import React from "react";
import ShopIcon from "@/src/assets/icons/shop";
import MoneyIcon from "@/src/assets/icons/money";
import CardStatistical from "./cardStatistical";
import Button from "@/src/components/button";
import EditIcon from "@/src/assets/icons/edit";
import { useDisclosure } from "@mantine/hooks";
import ModalEditAccount from "./modal-edit-account";
import ModalAddAccount from "./modal-add-account";
import ModalComp from "@/src/components/modal-comp";
import MasterCardIcon from "@/src/assets/icons/MasterCard";
import { Icon } from "ol/style";
import SelectInput from "@/src/components/select-input";
const number = [
  {
    id: 2,
    title: "Earnings This Month",
    number: "420$",
    percentage: 65,
    icon: <MoneyIcon />,
    link: "",
    titleLink: "",
  },
];
const dataCard = [
  {
    id: 1,
    number: " xxxxxxx-9089",
    icon: <MasterCardIcon className="w-7 h-auto" />,
  },
  {
    id: 2,
    number: " xxxxxxx-9044",
    icon: <MasterCardIcon className="w-7 h-auto" />,
  },
];
function HeaderDash() {
  const [opened, { open, close }] = useDisclosure(false);
  const [opened2, { open: open2, close: close2 }] = useDisclosure(false);
  const [opened3, { open: open3, close: close3 }] = useDisclosure(false);
  return (
    <div className="flex  justify-between gap-5 lg:gap-8 overflow-x-auto hideScroll md:px-3 pb-3 lg:pb-0 lg:px-0 flex-col mdl:flex-row flex-wrap">
      <div className="min-w-[190px] lg:min-w-[300px] w-full max-w-full shadow-md bg-white lg:pe-10  rounded-[24px] border border-green pt-[14px] flex-1 lg:pt-7 mb-2 px-4 lg:px-9 pb-3 lg:pb-6">
        <div className="   flex items-center justify-between gap-5 ">
          <div>
            <div className="flex items-center gap-4">
              <div className="size-11 rounded-full p-[10px] flex lg:hidden justify-center items-center bg-[#E9F1F8]">
                <ShopIcon />,
              </div>
              <h4 className="font-Regular text-base lg:text-[24px]  mb-3">
                Total Available Balance
              </h4>
            </div>
            <p className=" text-xl lg:text-[32px] font-Bold leading-9 px-2 lg:px-0  ">
              $510
            </p>
          </div>
          <div className="size-[66px] rounded-full p-4 lg:flex hidden justify-center items-center bg-[#E9F1F8]">
            <ShopIcon />,
          </div>
        </div>
        <div className="flex items-center flex-wrap mt-1 lg:mt-3 justify-between gap-2">
          <div className="flex-1 min-w-[240px] flex items-center gap-2">
            <SelectInput
              data={["xxxxxxx-9089", "xxxxxxx-9044"]}
              defaultValue={"xxxxxxx-9089"}
              className="!min-h-10 !h-10 flex-1"
              inputClassName="!h-10 !min-h-10"
            />
            <Button
              onClick={open2}
              className={"bg-blueLight px-3 w-fit h-10 border-none"}
            >
              <EditIcon fill="#006AFF" />
            </Button>
          </div>

          <Button onClick={open} className={"h-10 "}>
            Withdraw
          </Button>
        </div>
      </div>

      {number.map((item) => {
        return (
          <CardStatistical
            key={item.id}
            title={item.title}
            number={item.number}
            percentage={item.percentage}
            icon={item.icon}
            link={item.link}
            titleLink={item.titleLink}
          />
        );
      })}
      <ModalComp title="Manage Wallet" opened={opened} close={close}>
        <div className="w-[523px] max-w-full">
          <div className="mb-9">
            <h3 className="text-sm md:text-base mb-3">Accounts</h3>
            <div className="flex flex-col gap-6">
              {dataCard.map((item) => {
                return (
                  <div key={item.id} className="flex items-center gap-3">
                    <div className="flex items-center gap-2 flex-1 border rounded-xl px-4 py-3">
                      {item.icon}
                      <p className="text-xs mdl:text-sm font-Regular text-grayMedium">
                        {item.number}
                      </p>
                    </div>
                    <Button
                      onClick={open2}
                      className={"bg-blueLight px-3 w-fit h-10 border-none"}
                    >
                      <EditIcon fill="#006AFF" className="w-5 h-auto" />
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
          <Button
            onClick={open3}
            className={
              "!px-9 w-fit bg-blueLight border-none hover:shadow-md text-black"
            }
          >
            Add Account
          </Button>
        </div>
      </ModalComp>
      <ModalAddAccount opened={opened3} close={close3} />
      <ModalEditAccount opened={opened2} close={close2} />
    </div>
  );
}

export default HeaderDash;

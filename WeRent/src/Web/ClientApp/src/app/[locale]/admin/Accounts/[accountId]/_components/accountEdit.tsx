import React from "react";
import CardEdit from "./cardEdit";
import SpeakIcon from "@/src/assets/icons/speake";
import LivesIcon from "@/src/assets/icons/lives";
import GmailIcon from "@/src/assets/icons/gmail";
import CupIcon from "@/src/assets/icons/cup";
import { OneUserData } from "@/src/lib/dataUser";
import { Select, SelectProps, TextInput } from "@mantine/core";
import DiamondIcon from "@/src/assets/icons/diamond";
import StarterIcon from "@/src/assets/icons/starter";
import PremiumIcon from "@/src/assets/icons/premium";
const data = [
  {
    value: "advanced",
    label: "Advanced Package",
  },
  {
    value: "premium",
    label: "Premium Package",
  },
  {
    value: "diamond",
    label: "Diamond Package",
  },
  {
    value: "starter",
    label: "Starter Package",
  },
];
function AccountEdit() {
  const icons: Record<string, React.ReactNode> = {
    advanced: <CupIcon className={"w-4 h-auto"} fill="#344050" />,
    premium: <PremiumIcon  />,
    diamond: <DiamondIcon />,
    starter: <StarterIcon />,
  };

  const renderSelectOption: SelectProps["renderOption"] = ({ option }) => (
    <div className="flex items-center gap-2 ">
      {icons[option.value]}
      {option.label}
    </div>
  );

  return (
    <div>
      <h2 className="headTitle mb-5">Account Details</h2>
      <div className="flex items-center gap-20 justify-between">
        <CardEdit />
        <div className="flex flex-1 mb-5 justify-between gap-5 flex-wrap">
          <div>
            <h3 className="headTitle mb-4">
              About {OneUserData.name.split(" ")[0]}
            </h3>
            <ul className="flex flex-col gap-6">
              <li className="flex items-center gap-4">
                <SpeakIcon />
                <TextInput
                  defaultValue={"Speaks English and French"}
                  classNames={{
                    input:
                      "bg-white border rounded-lg text-grayMedium font-Medium border-green h-[36px]",
                    label: "ps-1 text-black",
                  }}
                />
              </li>
              <li className="flex items-center gap-4">
                <LivesIcon />
                <TextInput
                  defaultValue={"Lives in Neatherland"}
                  classNames={{
                    input:
                      "bg-white border rounded-lg text-grayMedium font-Medium border-green h-[36px]",
                    label: "ps-1 text-black",
                  }}
                />
              </li>
              <li className="flex items-center gap-4">
                <GmailIcon />
                <TextInput
                  defaultValue={OneUserData.email}
                  classNames={{
                    input:
                      "bg-white border rounded-lg text-grayMedium font-Medium border-green h-[36px]",
                    label: "ps-1 text-black",
                  }}
                />
              </li>
            </ul>
          </div>
          <div>
            <h3 className="headTitle mb-4">Membership</h3>
            <Select
              placeholder="Select Package"
              data={data}
              renderOption={renderSelectOption}
              classNames={{
                input:
                  " bg-white text-black  rounded-lg text-grayMedium  h-[36px] border border-green",
                wrapper: "h-[36px]",
                dropdown:
                  "bg-white text-black rounded-lg border border-green/50 text-grayDark py-2",
                option:
                  "hover:bg-green hover:text-white duration-300  flex items-center ",
              }}
              className=" duration-200  rounded-lg  text-grayMedium"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountEdit;

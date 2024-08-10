import React from "react";
import SpeakIcon from "@/src/assets/icons/speake";
import GmailIcon from "@/src/assets/icons/gmail";
import LivesIcon from "@/src/assets/icons/lives";
import { OneUserData } from "@/src/lib/dataUser";
import CupIcon from "@/src/assets/icons/cup";
import CardDetails from "./cardDetails";

function AccountDetails() {
  return (
    <div className="flex items-center gap-20 justify-between">
      <CardDetails />
      <div className="flex flex-1 mb-5 justify-between gap-5 flex-wrap">
        <div>
          <h3 className="headTitle mb-4">
            About {OneUserData.name.split(" ")[0]}
          </h3>
          <ul className="flex flex-col gap-6">
            <li className="flex items-center gap-4">
              <SpeakIcon />
              <p className="text-grayMedium font-Medium text-[20px]">
                Speaks English and French
              </p>
            </li>
            <li className="flex items-center gap-4">
              <LivesIcon />
              <p className="text-grayMedium font-Medium text-[20px]">
                Lives in Neatherland
              </p>
            </li>
            <li className="flex items-center gap-4">
              <GmailIcon />
              <p className="text-grayMedium font-Medium text-[20px]">
                {OneUserData.email}
              </p>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="headTitle mb-4">Membership</h3>
          <ul>
            <li className="flex items-center gap-3">
              <CupIcon />
              <p className="text-blue font-Medium text-[20px]">
                Advanced Package
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AccountDetails;

import DeleteIcon from "@/src/assets/icons/delete";
import ExportIcon from "@/src/assets/icons/export";
import UnVerifyIcon from "@/src/assets/icons/unVerify";
import React from "react";
interface HeaderEditAccProps {
  id: number;
}
function HeaderEditAcc({ id }: HeaderEditAccProps) {
  return (
    <div className="flex items-center justify-between gap-7 flex-wrap mb-8">
      <div className="flex items-center gap-5">
        <h2 className="text-lg lg:text-[32px] font-SemiBold">Profile</h2>
        <div className="flex items-center gap-3 flex-wrap">
          <div className="px-3 min-h-10 bg-grayBack duration-300 hover:shadow-lg cursor-pointer rounded-xl flex items-center gap-2">
            <UnVerifyIcon />
            <p className="text-grayMedium text-[14px]">Un verify</p>
          </div>
          <div className="px-3 min-h-10 bg-grayBack duration-300 hover:shadow-lg cursor-pointer rounded-xl flex items-center gap-2">
            <ExportIcon />
            <p className="text-grayMedium text-[14px]">Export</p>
          </div>
          <div className="px-3 min-h-10 bg-grayBack duration-300 hover:shadow-lg cursor-pointer rounded-xl flex items-center gap-2">
            <DeleteIcon className="h-[14px] w-auto" />
            <p className="text-grayMedium text-[14px]">Delete</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderEditAcc;

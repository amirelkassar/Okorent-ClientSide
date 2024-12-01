"use client";
import CloseIcon from "@/src/assets/icons/close";
import GroupIcon from "@/src/assets/icons/group";
import Input from "@/src/components/input";
import { Checkbox, Popover } from "@mantine/core";
import React, { useState } from "react";
import avatarUser from "@/src/assets/images/avatar.png";
import Image, { StaticImageData } from "next/image";
import Button from "@/src/components/button";
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import PlusImgIcon from "@/src/assets/icons/plusImg";
import FrameIcon from "@/src/assets/icons/frame";
import RemoveIcon from "@/src/assets/icons/remove";

interface User {
  id: number;
  name: string;
  avatarUrl: StaticImageData;
}

const users: User[] = [
  { id: 1, name: "Ahmed Mohamed Badr", avatarUrl: avatarUser },
  { id: 2, name: "Ahmed Mohamed Badr", avatarUrl: avatarUser },
  { id: 3, name: "Ahmed Mohamed Badr", avatarUrl: avatarUser },
  { id: 4, name: "Ahmed Mohamed Badr", avatarUrl: avatarUser },
  { id: 5, name: "Ahmed Mohamed Badr", avatarUrl: avatarUser },
  { id: 6, name: "Ahmed Mohamed Badr", avatarUrl: avatarUser },
];
function AddGroup() {
  const [opened, setOpened] = useState(false); // State to control Popover visibility
  const [pageNum, setPageNum] = useState(1);
  const [file, setFiles] = useState<any>({});
  const [checkedIds, setCheckedIds] = useState<number[]>([]); // Initially selected IDs
  console.log(file);

  const toggleCheckbox = (id: number) => {
    setCheckedIds((prev) =>
      prev.includes(id)
        ? prev.filter((checkedId) => checkedId !== id)
        : [...prev, id]
    );
  };
  const handleDrop = (acceptedFiles: File[]) => {
    setFiles(acceptedFiles[0]);
  };
  return (
    <div>
      <Popover
        onClose={() => setOpened(false)}
        opened={opened}
        width={380}
        shadow="md"
        position="bottom-start"
        offset={0}
      >
        <Popover.Target>
          <button
            onClick={() => setOpened((o) => !o)}
            className="bg-blueLight text-sm flex items-center gap-3 p-3 rounded-xl w-fit duration-200 hover:shadow-md"
          >
            <GroupIcon />
            <p className="text-sm text-blue">Create New Group</p>
          </button>
        </Popover.Target>
        <Popover.Dropdown className="rounded-xl bg-white px-0 border border-green">
          <div className="flex items-center justify-between px-4 pb-4 border-b border-[#B6BFC6]">
            <h3 className=" text-base md:text-xl font-SemiBold">New Group</h3>
            <button
              onClick={() => {
                setOpened(false);
              }}
              className="size-6"
            >
              <CloseIcon className="w-full h-auto" />
            </button>
          </div>
          <div className="p-3">
            {pageNum === 1 ? (
              <>
                <Input
                  placeholder="Search "
                  inputClassName="h-11 bg-white rounded-xl "
                />
                <div className="flex flex-col gap-4 md:gap-5 py-4">
                  {users.map((user) => (
                    <div key={user.id}>
                      <div className="flex items-center gap-3">
                        <Checkbox
                          color="#88BA52"
                          classNames={{
                            input: "bg-transparent",
                          }}
                          checked={checkedIds.includes(user.id)}
                          onChange={() => toggleCheckbox(user.id)}
                        />
                        <Image
                          src={user.avatarUrl}
                          alt={user.name}
                          height={50}
                          width={50}
                          className=" size-9 md:size-11 rounded-full object-cover object-top"
                        />
                        <p className=" text-sm md:text-base ">{user.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-5 mt-4 w-full">
                  <Button
                    onClick={() => setOpened(false)}
                    className={
                      " flex-1 h-12 md:h-14 text-black bg-grayBack border-none"
                    }
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() => setPageNum(2)}
                    className={` flex-1 h-12 md:h-14 ${
                      checkedIds.length === 0
                        ? " opacity-70 pointer-events-none"
                        : "bg-green"
                    }`}
                  >
                    Next
                  </Button>
                </div>
              </>
            ) : (
              <>
                <div>
                  {file?.size ? (
                    <div className="flex items-center justify-between gap-4 mb-5">
                      <div className=" size-14 relative overflow-hidden rounded-full shadow-md">
                        <Image
                          src={URL.createObjectURL(file)}
                          alt={`preview of ${file.name}`}
                          width={60}
                          height={60}
                          className=" object-cover h-full w-full object-top"
                        />
                      </div>
                      <Button
                        className="  bg-white hover:border-red border-grayLight border-2 !p-[4px] size-[30px] rounded-full hover:bg-red-200"
                        onClick={() => setFiles(null)}
                      >
                        <RemoveIcon />
                      </Button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 mb-5">
                      <Dropzone
                        onDrop={handleDrop}
                        multiple={false}
                        onReject={(files) =>
                          console.log("Rejected files", files)
                        }
                        maxSize={3 * 1024 ** 2} // 3MB
                        accept={[
                          MIME_TYPES.jpeg,
                          MIME_TYPES.png,
                          MIME_TYPES.pdf,
                        ]}
                        className=" size-14   border-green/20 bg-grayBack overflow-hidden border-solid border rounded-full"
                      >
                        <div className="h-full absolute w-full inset-0 flex justify-center items-center flex-col gap-3">
                          <FrameIcon />
                        </div>
                      </Dropzone>
                      <p className="text-lg">Add group icon</p>
                    </div>
                  )}

                  <Input
                    label="Group Name"
                    placeholder="Type Group Name Here"
                    inputClassName="h-12 bg-white "
                  />
                </div>
                <div className="flex items-center gap-5 mt-20 w-full">
                  <Button
                    onClick={() => setPageNum(1)}
                    className={
                      " flex-1 h-[54px] text-black bg-grayBack border-none"
                    }
                  >
                    Back
                  </Button>
                  <Button
                    onClick={() => setOpened(false)}
                    className={" flex-1 h-[54px]"}
                  >
                    Create
                  </Button>
                </div>
              </>
            )}
          </div>
        </Popover.Dropdown>
      </Popover>
    </div>
  );
}

export default AddGroup;

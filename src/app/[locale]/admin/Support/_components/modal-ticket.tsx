import Button from "@/src/components/button";
import Input from "@/src/components/input";
import React, { useCallback, useState } from "react";
import ModalComp from "@/src/components/modal-comp";
import {
  GetOneMessagesSupportInAdmin,
  useSolvedSupportInAdmin,
} from "@/src/hooks/queries/admin/support";
import { QueryWrapper } from "@/src/components/query-wrapper";
import RenderStatus from "./render-status";
import { Toast } from "@/src/components/toast";
import RenderCategory from "./render-category";
import SupportChat from "@/src/components/support-chat";
import MessageSend from "./message-send";

function ModalTicket({
  id,
  opened,
  close,
  name,
}: {
  id: any;
  opened: any;
  close: any;
  name: any;
}) {
  const [viewChat, setViewChat] = useState(false);
  const query = GetOneMessagesSupportInAdmin(id);
  const { mutateAsync: SolvedSupport } = useSolvedSupportInAdmin(id);
  const onSubmitSolvedSupport = useCallback(async () => {
    Toast.Promise(
      SolvedSupport({
        TicketId: id,
      }),
      {
        success: "Solved Support Done",
        onSuccess: async (res) => {},
      }
    );
  }, [SolvedSupport, id]);
  return (
    <ModalComp opened={opened} close={close} title={"Ticket By - " + name}>
      <div className="w-[780px] max-w-full">
        <QueryWrapper query={query}>
          {({ data }: { data: any }) => {
            console.log(data);

            return (
              <>
                <div className="flex md:hidden mb-5 gap-9 justify-center items-center">
                  <Button
                    className={`flex-1 max-w-[160px] h-10 text-sm ${
                      viewChat
                        ? "text-blue bg-blueLight border-transparent hover:border-transparent hover:shadow-md"
                        : ""
                    }`}
                    onClick={() => {
                      setViewChat(false);
                    }}
                  >
                    Ticket
                  </Button>
                  <Button
                    className={`flex-1 max-w-[160px] h-10 text-sm ${
                      viewChat
                        ? ""
                        : "text-blue bg-blueLight border-transparent hover:border-transparent hover:shadow-md"
                    }`}
                    onClick={() => {
                      setViewChat(true);
                    }}
                  >
                    Comments
                  </Button>
                </div>
                <div className="lg:w-[750px] w-full flex gap-10">
                  <div
                    className={` flex-col gap-6 w-[274px] ${
                      viewChat ? "hidden md:flex" : "flex !w-full md:!w-[274px]"
                    }`}
                  >
                    <Input
                      placeholder="Write assigned to name here"
                      inputClassName="bg-white h-11"
                      labelClassName="text-[#4A4651]"
                      label="Sender"
                      defaultValue={data.userName || "user name"}
                      readOnly
                    />
                    <Input
                      placeholder="Write assigned to name here"
                      inputClassName="bg-white h-11"
                      labelClassName="text-[#4A4651]"
                      label="Topic"
                      defaultValue={data.title}
                      readOnly
                    />
                    <div>
                      <h3 className="text-sm mdl:text-base text-grayMedium mb-3">
                        Category
                      </h3>
                      <RenderCategory status={data.ticketType} />
                    </div>
                    <div>
                      <h3 className="text-sm mdl:text-base text-grayMedium mb-3">
                        Status
                      </h3>
                      <RenderStatus status={data.contactUsStatus} />
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-7 w-full pt-6 md:pt-12 mt-auto">
                      {data.contactUsStatus !== 4 ? (
                        <Button
                          onClick={onSubmitSolvedSupport}
                          className={" md:flex-1 h-10"}
                        >
                          Issue Solved
                        </Button>
                      ) : null}

                      <Button
                        onClick={close}
                        className={
                          " md:flex-1 h-10 text-black bg-grayBack border-none"
                        }
                      >
                        Exit
                      </Button>
                    </div>
                  </div>
                  <div
                    className={`flex-1 ${
                      viewChat ? "block" : " hidden md:block"
                    } `}
                  >
                    <SupportChat chat={data?.messages || []}>
                      {data.contactUsStatus === 4 ? null : (
                        <MessageSend chatID={id} />
                      )}
                    </SupportChat>
                  </div>
                </div>
              </>
            );
          }}
        </QueryWrapper>
      </div>
    </ModalComp>
  );
}

export default ModalTicket;

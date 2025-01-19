"use client";
import ModalComp from "@/src/components/modal-comp";
import { Radio, Textarea } from "@mantine/core";
import React, { useCallback, useState } from "react";
import DateDeactivateModal from "./DateDeactivateModal";
import Button from "@/src/components/button";
import { Toast } from "@/src/components/toast";
import {
  useDeActivateAccountInAdmin,
  useDeActivateManyAccountInAdmin,
} from "@/src/hooks/queries/admin/account";
import { getDate } from "@/src/lib/utils";
import { useSelectRowTable } from "@/src/components/select-row-table-context";
const OptionAvailability = [
  {
    value: "permanently",
    label: "Deactivate permanently",
  },
  {
    value: "specific",
    label: "Select Specific Period",
  },
];
function DeactivateModalMany({
  opened,
  close,
  ids,
}: {
  opened: any;
  close: any;
  ids: any;
}) {
  console.log(ids);
  const [valueDeactivate, setValueDeactivate] = useState("permanently");
  const [duration, setDuration] = useState({
    deactivationStart: "",
    deactivationEnd: "",
  });
  const { setSelectRowTable } = useSelectRowTable();

  const { mutateAsync: DeActivateManyAccount } =
    useDeActivateManyAccountInAdmin();

  //DeActive Many User
  const onSubmitDeActiveManyAccount = useCallback(async () => {
    const formData = {
      userIds: ids.map((item: any) => item.id),
      isDeactivated: true,
      isPermanentDeactivation: valueDeactivate === "permanently",
      ...(valueDeactivate !== "permanently" && {
        deactivationStart: getDate(duration.deactivationStart).fullYear,
        deactivationEnd: getDate(duration.deactivationEnd).fullYear,
      }),
    };
    Toast.Promise(DeActivateManyAccount(formData), {
      success: "Activate Accounts Done",
      onSuccess(res) {
        setSelectRowTable([]);
        close();
      },
      onError(err) {
        setSelectRowTable([]);
        close();
      },
    });
  }, [DeActivateManyAccount,ids]);
  return (
    <>
      <ModalComp opened={opened} close={close} title={"Deactivate account"}>
        <div className="lg:w-[580px] w-full">
          <Radio.Group
            name="OptionAvailability"
            defaultValue={"permanently"}
            onChange={(e) => {
              setValueDeactivate(e);
              if (e === "permanently") {
                setDuration({ deactivationStart: "", deactivationEnd: "" });
              }
            }}
          >
            <div className="flex my-6 lgl:items-center gap-4 flex-col md:flex-row  lgl:gap-14 flex-wrap">
              {OptionAvailability.map((option, inedx) => {
                return (
                  <Radio
                    color="#88BA52"
                    key={inedx}
                    value={option.value}
                    label={option.label}
                    className="flex-1"
                    classNames={{
                      icon: "w-3 h-3 left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2",
                    }}
                  />
                );
              })}
            </div>
          </Radio.Group>
          {valueDeactivate === "specific" && (
            <DateDeactivateModal
              duration={duration}
              setDuration={setDuration}
            />
          )}

          <Textarea
            label={"Add note to be sent to the account"}
            autosize
            placeholder="Write note here "
            classNames={{
              input:
                " bg-white border-green/30 text-base focus:border-green active:border-green   min-h-[90px] rounded-xl placeholder:text-grayMedium placeholder:text-base duration-300 focus:border-green focus:bg-white ",
              wrapper: "h-full",
              label: "text-xs lg:text-base mb-2 font-Medium ms-1",
            }}
            className="w-full mb-4"
          />
          <div className="flex items-center gap-7 mt-10 w-full">
            <Button
              onClick={close}
              className={" flex-1 h-[54px] text-black bg-grayBack border-none"}
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                onSubmitDeActiveManyAccount();
              }}
              className={" flex-1 h-[54px]"}
            >
              Confirm
            </Button>
          </div>
        </div>
      </ModalComp>
    </>
  );
}

export default DeactivateModalMany;

import Button from "@/src/components/button";
import InputTextarea from "@/src/components/InputTextarea";
import ModalComp from "@/src/components/modal-comp";
import { useSelectRowTable } from "@/src/components/select-row-table-context";
import { Toast } from "@/src/components/toast";
import { useDeleteManyOrderByIDInAdmin } from "@/src/hooks/queries/admin/booking";
import React, { useCallback } from "react";

function CancelManyModal({
  opened,
  close,
  selectedFromTable,
}: {
  opened: any;
  close: any;
  selectedFromTable: any;
}) {
  console.log(selectedFromTable);
  const { mutateAsync: DeleteManyOrders } = useDeleteManyOrderByIDInAdmin();
  const { setSelectRowTable } = useSelectRowTable();

  //delete order
  const onSubmitDelete = async () => {
    Toast.Promise(
      DeleteManyOrders({
        orderIds: selectedFromTable?.map((item: any) => item.id),
      }),
      {
        success: "Deleted Orders Done",
        onSuccess: async (res) => {
          setSelectRowTable([]);
          close();
        },
        onError(err) {
          setSelectRowTable([]);
        },
      }
    );
  };

  return (
    <ModalComp opened={opened} close={close} title="Cancel Booking ">
      <div className="w-[660px] max-w-full">
        <InputTextarea
          placeholder="Write the cancellation reason here"
          inputClassName="min-h-[144px]"
        />
        <div className="flex items-center gap-7 mt-5 w-full">
          <Button
            onClick={close}
            className={" flex-1 h-[54px] text-black bg-grayBack border-none"}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              console.log({
                orderIds: selectedFromTable?.map((item: any) => item.id),
              });

              onSubmitDelete();
            }}
            className={" flex-1 h-[54px]"}
          >
            Confirm
          </Button>
        </div>
      </div>
    </ModalComp>
  );
}

export default CancelManyModal;

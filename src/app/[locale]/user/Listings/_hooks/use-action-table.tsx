"use client";
import { useCallback, useMemo, useState } from "react";
import OnlineIcon from "@/src/assets/icons/online";
import DeleteIcon from "@/src/assets/icons/delete";
import { GetUniqueValues } from "@/src/lib/utils";
import { Toast } from "@/src/components/toast";
import { useUpdateManyToOnlineMutation } from "@/src/hooks/queries/user/lisitings";
import { useSelectRowTable } from "@/src/components/select-row-table-context";

interface SignUpReturn {
  functionSelectView: any[];
  setSelectedFromTable: any;
}
export const useActionTable = (): SignUpReturn => {
  const [selectedFromTable, setSelectedFromTable] = useState([]);
  const { mutateAsync: UpdateManyToOnline } = useUpdateManyToOnlineMutation();
  const {setSelectRowTable } = useSelectRowTable();

  //Make Many Product to Online
  const onSubmitMakeOnline = useCallback(
    async (data: any) => {
      Toast.Promise(UpdateManyToOnline(data), {
        loading: "Processing...",
        success: "Operation completed!",
        error: "Failed to complete operation",
        onSuccess(res) {
          setSelectRowTable([]);
        },
      });
    },
    [UpdateManyToOnline]
  );

  const functionSelect = useMemo(
    () => [
      {
        title: "Make online",
        icon: <OnlineIcon fill="#006AFF" className="max-h-4 w-auto" />,
        onclick: (ids: any) => {
          console.log(ids);

          onSubmitMakeOnline({
            productIds: ids?.map((item: any) => item.id),
            isAvailable: true,
          });
        },
      },
      {
        title: "Delete",
        icon: <DeleteIcon className="max-h-4 w-auto" />,
        onclick: (ids: any) => {
          console.log(ids);
        },
      },
    ],
    [selectedFromTable]
  );

  const functionSelectView = useMemo(() => {
    const ValueSelected = GetUniqueValues(selectedFromTable, "isActive");
    console.log(ValueSelected);

    if (ValueSelected?.toString()) {
      switch (ValueSelected.toString()) {
        case "false":
          return [functionSelect[0], functionSelect[1]];
        default:
          return [functionSelect[1]];
      }
    } else {
      return [functionSelect[1]];
    }
  }, [selectedFromTable, functionSelect]);

  return {
    functionSelectView,
    setSelectedFromTable,
  };
};

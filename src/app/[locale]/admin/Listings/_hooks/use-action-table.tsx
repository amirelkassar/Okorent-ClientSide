"use client";
import { useCallback, useMemo, useState } from "react";
import DeleteIcon from "@/src/assets/icons/delete";
import { Toast } from "@/src/components/toast";
import QuickEditIcon from "@/src/assets/icons/quickEdit";
import { useDeleteManyProductInAdmin } from "@/src/hooks/queries/admin/lisiting";
import { useSelectRowTable } from "@/src/components/select-row-table-context";
import { STYLE_ICON } from "@/src/lib/dataUser";

interface SignUpReturn {
  functionSelectView: any[];
  setSelectedFromTable: any;
  selectedFromTable: any;
}
export const useActionTable = (open: any): SignUpReturn => {
  const [selectedFromTable, setSelectedFromTable] = useState([]);
  const { mutateAsync: DeleteManyProducts } = useDeleteManyProductInAdmin();
  const {setSelectRowTable } = useSelectRowTable();
  //Delete Many Product
  const onSubmitDelete = useCallback(
    async (data: any) => {
      Toast.Promise(DeleteManyProducts(data), {
        loading: "Processing...",
        success: "Deleted Products Done",
        onSuccess(res) {
          setSelectRowTable([]);
        },
        onError(err) {
          setSelectRowTable([])
        },
      });
    },
    [DeleteManyProducts]
  );

  const functionSelect = useMemo(
    () => [
      //0
      {
        title: "Quick Edit",
        icon: <QuickEditIcon className={STYLE_ICON} />,
        onclick: () => {
          open();
        },
      },
      //1
      {
        title: "Delete",
        icon: <DeleteIcon className={STYLE_ICON} />,
        onclick: (ids: any) => {
          onSubmitDelete({
            productIds: ids?.map((item: any) => item.id),
          });
        },
      },
    ],
    [selectedFromTable]
  );

  const functionSelectView = useMemo(() => {
    return [functionSelect[0], functionSelect[1]];
  }, [functionSelect]);

  return {
    functionSelectView,
    setSelectedFromTable,
    selectedFromTable
  };
};

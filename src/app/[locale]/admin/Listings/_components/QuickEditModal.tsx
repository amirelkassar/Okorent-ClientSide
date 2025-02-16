import Button from "@/src/components/button";
import ModalComp from "@/src/components/modal-comp";
import SelectInput from "@/src/components/select-input";
import { useSelectRowTable } from "@/src/components/select-row-table-context";
import { Toast } from "@/src/components/toast";
import { useQuickEditManyProductInAdmin } from "@/src/hooks/queries/admin/lisiting";
import {
  GetCategory,
  GetSubCategory,
} from "@/src/hooks/queries/admin/master-data/category";
import React, { useCallback, useState } from "react";

function QuickEditModal({
  opened,
  close,
  selectedFromTable,
}: {
  opened: boolean;
  close: any;
  selectedFromTable: any;
}) {
  const [dataList, setDataList] = useState<any>({
    categoryId: "",
    subCategoryId: "",
  });
  const { data: dataCategory } = GetCategory();
  const { data: dataSubCategory, refetch: RefetchGetSubCategory } =
    GetSubCategory(dataList?.categoryId);

  const { mutateAsync: QuickEditManyProduct } =
    useQuickEditManyProductInAdmin();
  const { setSelectRowTable } = useSelectRowTable();
  //Delete Many Product
  const onSubmitQuickEdit = useCallback(async () => {
    Toast.Promise(
      QuickEditManyProduct({
        productIds: selectedFromTable?.map((item: any) => item.id),
        categoryId: dataList.categoryId,
        subCategoryId: dataList.subCategoryId,
      }),
      {
        loading: "Processing...",
        success: "Deleted Products Done",
        onSuccess(res) {
          setSelectRowTable([]);
          close();
        },
        onError(err) {
          setSelectRowTable([]);
          close();
        },
      }
    );
  }, [QuickEditManyProduct, dataList, close, setSelectRowTable]);

  return (
    <ModalComp opened={opened} close={close} title={"Quick Edit"}>
      <div className="lg:w-[580px] w-full flex flex-col gap-4">
        <SelectInput
          data={dataCategory?.data?.items?.map((item: any) => {
            return { label: item.name, value: item.id };
          })}
          label="Item Category"
          value={dataList?.categoryId}
          placeholder="Select item category to be assigend for all choosen items"
          onChange={(e) => {
            setDataList({
              ...dataList,
              categoryId: e,
              subCategoryId: null,
            });
            RefetchGetSubCategory();
          }}
          inputClassName="!h-[54px]"
          className="h-auto"
        />
        <SelectInput
          data={dataSubCategory?.data?.map((item: any) => {
            return { label: item.name, value: item.id };
          })}
          label="Select SubCategory"
          value={dataList?.subCategoryId}
          placeholder="Select item category to be assigend for all choosen items"
          onChange={(e) => {
            setDataList({ ...dataList, subCategoryId: e });
          }}
          inputClassName="!h-[54px]"
          className="h-auto"
        />
        <div className="flex items-center gap-7 w-full">
          <Button
            onClick={close}
            className={" flex-1 h-[54px] text-black bg-grayBack border-none"}
          >
            Cancel
          </Button>
          <Button
            onClick={() => onSubmitQuickEdit()}
            className={" flex-1 h-[54px]"}
          >
            Confirm
          </Button>
        </div>
      </div>
    </ModalComp>
  );
}

export default QuickEditModal;

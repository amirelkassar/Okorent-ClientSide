"use client";
import DeleteIcon from "@/src/assets/icons/delete";
import EditIcon from "@/src/assets/icons/edit";
import Button from "@/src/components/button";
import Input from "@/src/components/input";
import { Toast } from "@/src/components/toast";
import {
  useDeleteSubCategory,
  useEditSubCategory,
} from "@/src/hooks/queries/admin/master-data/category";
import React, { useCallback, useState } from "react";

function SubCategoryRow({ data, idCategory }: { data: any; idCategory: any }) {

  const [edit, setEdit] = useState(false);
  const { mutateAsync: DeleteSubCategory } = useDeleteSubCategory(data.id,idCategory);
  const { mutateAsync: EditSubCategory } = useEditSubCategory(idCategory);
  const [subCategoryName, setSubCategoryName] = useState(data.name);
  const onSubmitRemoveSubCategory = useCallback(async () => {
    Toast.Promise(DeleteSubCategory(data.id), {
      success: "Deleted SubCategory Done",
      onError: async (res) => {},
    });
  }, [DeleteSubCategory, data.id]);

  const onSubmitEditSubCategory = useCallback(async () => {
    Toast.Promise(
      EditSubCategory({
        id: data.id,
        name: subCategoryName,
        description: subCategoryName,
      }),
      {
        success: "Edited SubCategory Done",
        onSuccess(res) {
          setEdit(false);
        },
      }
    );
  }, [EditSubCategory, data.id, subCategoryName]);
  return (
    <div className="flex items-center gap-3">
      <Input
        type="text"
        readOnly={!edit}
        value={subCategoryName}
        placeholder={`Enter subcategory `}
        inputClassName={` h-14 mdl:h-16 bg-white  rounded-xl ${
          edit ? "border-green" : "border-green/30"
        } `}
        className={`flex-1  ${
          edit ? "text-black" : "text-grayMedium pointer-events-none"
        }`}
        onChange={(e) => setSubCategoryName(e.target.value)}
      />
      {edit ? (
        <Button
          onClick={() => {
            onSubmitEditSubCategory();
          }}
          className={"  h-10  text-base !px-7 w-[76px] mdl:w-[100px]"}
        >
          Save{" "}
        </Button>
      ) : (
        <div className="flex items-center gap-2 min-w-[76px] mdl:min-w-[100px]">
          <div
            onClick={() => setEdit(true)}
            className="flex size-8 mdl:size-10 min-w-8 mdl:min-w-10 items-center duration-300 hover:shadow-md cursor-pointer justify-center p-2 rounded-xl bg-blueLight"
          >
            <EditIcon fill="#006AFF" className=" w-4 mdl:w-5 h-auto" />
          </div>
          <div
            onClick={onSubmitRemoveSubCategory}
            className="flex size-8 mdl:size-10 min-w-8 mdl:min-w-10 items-center duration-300 hover:shadow-md cursor-pointer justify-center p-2 rounded-xl bg-blueLight"
          >
            <DeleteIcon className=" w-3 mdl:w-4 h-auto" />
          </div>
        </div>
      )}
    </div>
  );
}

export default SubCategoryRow;

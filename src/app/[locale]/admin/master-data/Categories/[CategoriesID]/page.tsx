"use client";
import React, { useCallback } from "react";
import TitleMaster from "../../_components/title-master";
import Button from "@/src/components/button";
import { GetCategoryByID, useDeleteCategory } from "@/src/hooks/queries/admin/master-data/category";
import { Toast } from "@/src/components/toast";
import { QueryWrapper } from "@/src/components/query-wrapper";
import DeleteIcon from "@/src/assets/icons/delete";
import { useRouter } from "@/src/navigation";
import ROUTES from "@/src/routes";
import PageCategoryId from "./_components/page-category-id";

function Page({ params }: any) {
  const router = useRouter();
  
  const query = GetCategoryByID(  params.CategoriesID);
  const { mutateAsync: DeleteCategory } = useDeleteCategory(
    params.CategoriesID
  );
  const onSubmitRemoveCategory = useCallback(async () => {
    Toast.Promise(DeleteCategory(params.CategoriesID), {
      success: "Deleted Category Done",
      onError: async (res) => {},
      onSuccess(res) {
        router.push(ROUTES.ADMIN.CATEGORIES);
      },
    });
  }, [DeleteCategory, params.CategoriesID]);
  return (
    <div className="mb-section">
      <div className="flex items-center justify-between gap-4 flex-wrap mb-section">
        <TitleMaster title="Add Category" />
        <Button
          onClick={onSubmitRemoveCategory}
          className={
            " h-10 mdl:h-12 text-sm mdl:text-base gap-1 mdl:gap-2 hover:shadow-md px-4 md:!px-8 border-none bg-blueLight text-red"
          }
        >
          <DeleteIcon className="mdl:w-4 w-3 h-auto" /> Delete
        </Button>
      </div>
      <QueryWrapper query={query}>
        {({ data, totalPages }: { data: any; totalPages?: any }) => {
          return <PageCategoryId data={data} />;
        }}
      </QueryWrapper>
    </div>
  );
}

export default Page;

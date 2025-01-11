"use client";
import CloseIcon from "@/src/assets/icons/close";
import { GetProductsAll } from "@/src/hooks/queries/user/home";
import { useUpdateQueryParams } from "@/src/lib/utils";
import { useSearchParams } from "next/navigation";
import React, { useCallback, useState } from "react";
import LoadingProductsRow from "./loading-products-row";
import ProductList from "./productList";
import SkeletonLoading from "../skeleton-loading";
import { MultiSelect } from "@mantine/core";
import CantFind from "./CantFind";
import { Pagination } from "../pagination";
import { useQueryState } from "nuqs";
import { GetCategory, GetSubCategory } from "@/src/hooks/queries/admin/master-data/category";
const sortingOptions: any[] = [
  {
    value: "PriceAsc",
    label: "Lowest Price",
  },
  {
    value: "PriceDesc",
    label: "Highest Price",
  },
  {
    value: "VerifiedDesc",
    label: "Verified Accounts",
  },
  {
    value: "CreationDesc",
    label: "Newly Added",
  },
];
function PageCategoryProducts({ children }: { children: React.ReactNode }) {
  const { data: dataCategory, isLoading: isLoadingCategory } = GetCategory();
  const [CategoryIdParams, setCategoryIdParams] = useQueryState("CategoryId");
  const [CategoryNameParams, setCategoryNameParams] = useQueryState("category");
  const searchParams = useSearchParams();
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>(
    searchParams.getAll("SubCategoryIds") || []
  );

  const { data, isLoading } = GetProductsAll(searchParams.toString());
  const query = GetProductsAll(searchParams.toString());
  const { data: dataSubCategories, isLoading: isLoadingSubCategory } =
    GetSubCategory(searchParams.get("CategoryId"));
  const updateQuerySearchParams = useUpdateQueryParams();
  console.log(data);

  // Utility: Update the URL query params
  const updateQueryParams = useCallback(
    (key: any, values: any) => {
      updateQuerySearchParams(key, values);
    },
    [updateQuerySearchParams]
  );

  // Handle toggling subcategory selection
  const handleSubcategoryToggle = useCallback(
    (subcategoryId: any) => {
      const updatedSubcategories = selectedSubcategories.includes(subcategoryId)
        ? selectedSubcategories.filter((id) => id !== subcategoryId)
        : [...selectedSubcategories, subcategoryId];
      if (selectedSubcategories) {
        setSelectedSubcategories(updatedSubcategories);
        updateQueryParams("SubCategoryIds", updatedSubcategories);
      }
    },
    [selectedSubcategories, updateQueryParams]
  );

  // Remove a specific subcategory
  const handleRemoveFromSearch = useCallback(
    (subcategoryId: any) => {
      handleSubcategoryToggle(subcategoryId);
    },
    [handleSubcategoryToggle]
  );
  const handleSearchBySort = (option: any) => {
    const currentSort = searchParams.get("SortField");

    const newSort =
      currentSort === option.split(" ").join("")
        ? ""
        : option.split(" ").join("");
    updateQueryParams("SortField", newSort ? [newSort] : []);
  };
  return (
    <div className="mb-20">
      {children}
      <div className="pt-8 border-t flex flex-col lgl:flex-row lgl:items-start gap-4 border-grayMedium/30">
        <MultiSelect
          data={
            dataSubCategories?.data.map((item: any) => ({
              value: item.id,
              label: item.name,
            })) || []
          }
          value={selectedSubcategories}
          onChange={setSelectedSubcategories}
          placeholder="Subcategories"
          searchable
          size="md"
          classNames={{
            input:
              " bg-white text-black flex items-center   rounded-lg text-grayMedium  min-h-[50px] border border-green",

            inputField:
              "placeholder:text-xl h-full placeholder:text-black placeholder:opacity-100   placeholder:font-SemiBold",
            pillsList: "h-full",
            dropdown:
              "bg-white text-black rounded-lg border border-green/50 text-grayDark py-2",
            option:
              "hover:bg-green hover:text-white duration-300  flex items-center ",
          }}
          clearable
          className="block lgl:hidden" // Visible on mobile, hidden on larger screens
        />
        {searchParams.get("CategoryId") ? (
          isLoadingSubCategory ? (
            <div className=" lgl:block hidden">
              <SkeletonLoading className="!w-[270px] !h-[650px]" />
            </div>
          ) : (
            <div className="border border-green hidden lgl:block px-2 py-8 rounded-2xl bg-white shadow-md max-w-[330px] min-w-[330px] w-full">
              <h2 className="text-3xl font-SemiBold  mb-4 px-3">
                Subcategories
              </h2>
              {dataSubCategories?.data.length === 0 ? (
                <p className="text-grayMedium ps-4 text-sm font-Regular">
                  No subcategories found.
                </p>
              ) : (
                <div className=" flex-col flex gap-5">
                  {dataSubCategories?.data.map(
                    (subcategory: any, index: number) => (
                      <div
                        key={index}
                        className={`${
                          selectedSubcategories.includes(subcategory.id)
                            ? "bg-green/15"
                            : ""
                        } cursor-pointer px-4 py-1 rounded-lg`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleSubcategoryToggle(subcategory.id);
                        }}
                      >
                        {subcategory.name}
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          )
        ) : isLoadingCategory ? (
          <div className=" lgl:block hidden">
            <SkeletonLoading className="!w-[270px] !h-[650px]" />
          </div>
        ) : (
          <div className="border border-green hidden lgl:block px-2 py-8 rounded-2xl bg-white shadow-md max-w-[330px] min-w-[330px] w-full">
            <h2 className="text-3xl font-SemiBold  mb-4 px-3">Categories</h2>
            {dataCategory?.data?.items.length === 0 ? (
              <p className="text-grayMedium ps-4 text-sm font-Regular">
                No Categories found.
              </p>
            ) : (
              <div className=" flex-col flex gap-5">
                {dataCategory?.data?.items.map((category: any, index: number) => (
                  <div
                    key={index}
                    className={`cursor-pointer px-4 py-1 rounded-lg`}
                    onClick={(e) => {
                      e.preventDefault();
                      setCategoryNameParams(category.name); // Set the category name
                      setCategoryIdParams(category.id); // Set the CategoryId
                    }}
                  >
                    {category?.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="flex-1">
          <div className="flex lgl:items-center flex-col lgl:flex-row justify-between mb-4 gap-8 flex-wrap">
            <div className="flex items-center gap-3">
              <h3 className="text-xs lg:text-sm font-Regular text-nowrap block lg:hidden text-grayMedium">
                Sort By
              </h3>
              <div className="flex items-center gap-2 lg:gap-3 flex-wrap">
                {sortingOptions.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      handleSearchBySort(option.value);
                    }}
                    className={`${
                      searchParams.get("SortField") ===
                      option.value.split(" ").join("")
                        ? "bg-green text-white"
                        : "bg-grayBack text-blue"
                    } px-3 py-2 gap-2 flex items-center duration-200 hover:shadow-md text-xs lg:text-sm justify-center w-fit rounded-xl`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
            {selectedSubcategories.length > 0 && (
              <div className="flex items-center gap-3">
                <h3 className="text-xs lg:text-sm text-nowrap font-Regular text-grayMedium">
                  Filtered By
                </h3>
                <div className="flex items-center gap-3 flex-wrap">
                  {dataSubCategories?.data
                    ?.filter((item: any) =>
                      selectedSubcategories.includes(item.id)
                    )
                    .map((subcategory: any, index: any) => (
                      <div
                        key={index}
                        className="bg-green duration-200 hover:shadow-md px-3 py-2 gap-2 flex items-center justify-center w-fit rounded-xl"
                      >
                        <p className="text-white text-xs lg:text-sm font-Medium">
                          {subcategory?.name}
                        </p>
                        <button
                          onClick={() =>
                            handleRemoveFromSearch(subcategory?.id)
                          }
                          className="remove-button"
                        >
                          <CloseIcon fill="white" className="w-4 h-auto" />
                        </button>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>

          {isLoading ? (
            <LoadingProductsRow />
          ) : data?.data?.length === 0 ? (
            <CantFind />
          ) : (
            <div>
              <ProductList data={data?.data.items || []} />
              <Pagination totalPages={data?.data?.totalPages} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PageCategoryProducts;

"use client";

import { Pagination as MantinePagination } from "@mantine/core";
import Button from "./button";
import ArrowLeftIcon from "../assets/icons/arrowLeft";
import ArrowRightIcon from "../assets/icons/ArrowRight";
import SpinnerIcon from "../assets/icons/spinner";
import { useRouter } from "../navigation";

interface PaginationProps {
  pageSize: any;
  totalCount: any;
  pageNumber?: number | undefined;
  disabled?: boolean | undefined;
  setPageNumber: any;
}

export const Pagination = ({
  pageSize,
  totalCount,
  pageNumber = 1,
  disabled = false,
  setPageNumber,
}: PaginationProps) => {
  const router = useRouter();

  const totalPages = Math.ceil(totalCount / pageSize);
  const hasPagination = totalPages > 1;
  const currentPage = Number(pageNumber) || 1;

  if (!hasPagination) return null;

  const updatePage = (newPage:any) => {
    if (typeof window === undefined) return;
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("page", newPage.toString());
    router.replace(`?${searchParams.toString()}`, {
      scroll: false,
    });
  };

  return (
    <div className="font-bold flex ltr:flex-row-reverse items-center justify-between">
      <Button
        className="py-1.5 text-xs lg:text-base px-3 lg:px-6 gap-2 lg:gap-4 rounded-lg"
        onClick={() => {
          if (setPageNumber) return setPageNumber(currentPage + 1);
          updatePage(currentPage + 1);
        }}
        disabled={currentPage === totalPages || disabled}
      >
        <ArrowRightIcon className="rotate-180 size-3 mdl:size-5" />
        التالي
      </Button>

      {disabled && <SpinnerIcon className=" size-9 animate-spin" />}
      {!disabled && (
        <MantinePagination
          total={totalPages}
          dir="ltr"
          classNames={{
            control: "!bg-white hover:!bg-black/5 !transition",
          }}
          size="xs"
          radius="xl"
          withControls={false}
          value={currentPage}
          onChange={(value) => {
            if (setPageNumber) return setPageNumber(value);
            updatePage(value);
          }}
        />
      )}

      <Button
        className="py-1.5 px-3 lg:px-6 gap-2 text-xs lg:text-base lg:gap-4 rounded-lg"
        onClick={() => {
          if (setPageNumber) return setPageNumber(currentPage - 1);
          updatePage(currentPage - 1);
        }}
        disabled={currentPage === 1 || disabled}
      >
        <ArrowLeftIcon className="size-3 mdl:size-5" />
        السابق
      </Button>
    </div>
  );
};

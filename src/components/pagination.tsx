"use client";

import { Pagination as MantinePagination } from "@mantine/core";
import Button from "./button";
import ArrowLeftIcon from "../assets/icons/arrowLeft";
import SpinnerIcon from "../assets/icons/spinner";
import { parseAsInteger, useQueryState } from "nuqs";

interface PaginationProps {
  totalPages?: number | undefined;
  disabled?: boolean | undefined;
}
export const Pagination = ({
  totalPages = 0,
  disabled = false,
}: PaginationProps) => {
  const [PageNumber, setPageNumber] = useQueryState(
    "PageNumber",
    parseAsInteger.withDefault(1)
  );

  const hasPagination = +totalPages > 1;
  const currentPage = Number(PageNumber) || 1;

  if (!hasPagination) return null;
  return (
    <div className="font-bold flex ltr:flex-row-reverse items-center justify-between mb-section">
      <Button
        className={`py-1 text-xs font-Regular h-10  px-2 lg:px-5 gap-2 lg:gap-4 rounded-xl ${
          currentPage === totalPages || disabled
            ? "opacity-55 pointer-events-none"
            : ""
        }`}
        onClick={() => {
          if (setPageNumber) return setPageNumber(+PageNumber + 1);
        }}
        disabled={PageNumber === totalPages || disabled}
      >
        <p className=" hidden mdl:block"> Next</p>
        <ArrowLeftIcon className="rotate-180 size-4 mdl:size-5" />
      </Button>

      {disabled && <SpinnerIcon className=" size-9 animate-spin" />}
      {!disabled && (
        <MantinePagination
          total={totalPages}
          defaultValue={6}
          boundaries={1}
          color="#88BA52"
          dir="ltr"
          classNames={{
            control:
              " data-[active]:!bg-green border-green border text-xs  hover:bg-green/80 hover:text-white duration-300 p-1  !transition md:w-[26px] md:h-[26px] min-w-[22px] w-[22px] h-[22px] ",
          }}
          size="sm"
          radius="md"
          withControls={false}
          value={currentPage}
          onChange={(value) => {
            if (setPageNumber) return setPageNumber(value);
          }}
        />
      )}

      <Button
        className={`py-1 text-xs font-Regular h-10  px-2 lg:px-5 gap-2 lg:gap-4 rounded-xl ${
          currentPage === 1 || disabled ? "opacity-55 pointer-events-none" : ""
        }`}
        onClick={() => {
          if (setPageNumber) return setPageNumber(+PageNumber - 1);
        }}
        disabled={currentPage === 1 || disabled}
      >
        <ArrowLeftIcon className="size-4 mdl:size-5" />
        <p className=" hidden mdl:block"> Prev</p>
      </Button>
    </div>
  );
};

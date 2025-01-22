"use client";
// components/TableFilter.tsx
import { useState } from "react";
import { useQueryState } from "nuqs";
import { Checkbox, CheckboxGroup, Popover } from "@mantine/core";
import Input from "./input";
import ArrowFilter from "../assets/icons/arrowFilter";

interface TableFilterProps {
  title: string;
  column: string;
  type: "search" | "select";
  options?: string[]; // Only needed for select type
}

const TableFilter = ({ column, type, options, title }: TableFilterProps) => {
  const [filterValue, setFilterValue] = useQueryState<string[]>(column, {
    throttleMs: type === "search" ? 2000 : 0,
    defaultValue: [],
    parse: (value) => (value ? value.split("") : []), // تحويل النص إلى مصفوفة
    serialize: (value: any) =>
      value.length > 0 ? value.join(`&${column}=`) : null, // تحويل المصفوفة إلى نص
  });

  const [inputValue, setInputValue] = useState<string[]>(filterValue || []);

  const handleChange = (values: string[]) => {
    setInputValue(values);
    setFilterValue(values.length > 0 ? values : null);
  };
  return (
    <div className="flex items-center gap-1 cursor-pointer">
      <p className="text-[18px]">{title}</p>
      <Popover width={260} position="bottom">
        <Popover.Target>
          <button className="w-4 bg-/10 flex items-center justify-center h-4">
            <ArrowFilter />
          </button>
          {/* Arrow icon */}
        </Popover.Target>
        <Popover.Dropdown className="rounded-2xl py-4 bg-white px-2 border-2 border-green/30">
          {type === "search" ? (
            <Input
              type="text"
              value={inputValue}
              onChange={(e) => handleChange(e.target.value.split(", "))}
              placeholder={`Search ${column}`}
              inputClassName="bg-white h-9 rounded-xl !border-2 border-green/30 min-h-10 max-h-10 text-xs placeholder:text-xs"
            />
          ) : (
            <CheckboxGroup value={inputValue} onChange={handleChange}>
              <div className="flex flex-col gap-2">
                {options?.map((option: any) => (
                  <Checkbox
                    color="#88BA52"
                    size="xs"
                    key={option}
                    value={option.split(" ").join("_")}
                    label={option}
                  />
                ))}
              </div>
            </CheckboxGroup>
          )}
        </Popover.Dropdown>
      </Popover>
    </div>
  );
};

export default TableFilter;

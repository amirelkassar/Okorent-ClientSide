"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "../navigation";
import { useSearchParams } from "next/navigation";

interface SelectRowTableContextType {
  selectRowTable: any[];
  setSelectRowTable: React.Dispatch<React.SetStateAction<any[]>>;
}

const SelectRowTableContext = createContext<
  SelectRowTableContextType | undefined
>(undefined);

export const SelectRowTableProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [selectRowTable, setSelectRowTable] = useState<any[]>([]);
  const path = usePathname();
  const searchparams = useSearchParams();
  useEffect(() => {
    if (path||searchparams.toString()) {
      setSelectRowTable([]);
    }
  }, [path, searchparams]);
  return (
    <SelectRowTableContext.Provider
      value={{ selectRowTable, setSelectRowTable }}
    >
      {children}
    </SelectRowTableContext.Provider>
  );
};

export const useSelectRowTable = () => {
  const context = useContext(SelectRowTableContext);
  if (!context) {
    throw new Error(
      "useSelectRowTable must be used within a SelectRowTableProvider"
    );
  }
  return context;
};

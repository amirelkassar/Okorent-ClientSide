"use client";
import { ReactNode } from "react";
import TableFilter from "./table-filter";
import Events from "../Events";

interface TableHeaderProps {
  children: ReactNode;
}
export interface functionSelectProps {
  title: string;
  icon: React.JSX.Element;
  onclick: (ids: any) => void;
}
interface SectionProps {
  children: ReactNode;
}
interface FirstProps {
  children?: ReactNode;
  title?: string;
  functionSelect?: functionSelectProps[];
}

interface LastProps {
  children?: ReactNode;
  typeData: "sort" | "filter";
  options: any;
}

export const TableHeader: React.FC<TableHeaderProps> & {
  First: React.FC<FirstProps>;
  Middle: React.FC<SectionProps>;
  Last: React.FC<LastProps>;
} = ({ children }) => {
  return (
    <div className={`flex items-center justify-between gap-6 flex-wrap mb-8 `}>
      {children}
    </div>
  );
};

const First: React.FC<FirstProps> = ({ children, functionSelect,title }) => (
  <div className="flex items-center space-x-4 lg:flex-1">
   {title && <h2 className="headTitle mdl:min-h-10 text-nowrap">{title}</h2>}
    {children}
    {functionSelect &&
      functionSelect.map((item, index) => {
        return <Events key={index} item={item} ids={[]} />;
      })}
  </div>
);

const Middle: React.FC<SectionProps> = ({ children }) => (
  <div className="text-center">{children}</div>
);

const Last: React.FC<LastProps> = ({ children, options }) => (
  <div className="flex items-center gap-4 flex-wrap w-fit lg:flex-1  justify-end">
    <TableFilter data={options} />
    {children}
  </div>
);

// ربط الأقسام مع TableHeader
TableHeader.First = First;
TableHeader.Middle = Middle;
TableHeader.Last = Last;

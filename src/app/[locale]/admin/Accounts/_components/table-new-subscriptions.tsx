import { DataTable } from "@/src/components/data-table";
import ROUTES from "@/src/routes";
import React from "react";
import { columns } from "./column";
import { GetNewSubscriptions } from "@/src/hooks/queries/admin/account";
import { TableHeader } from "@/src/components/table/table-header";
import LinkGreen from "@/src/components/linkGreen";
import ArrowWhiteIcon from "@/src/assets/icons/arrowWhite";
import CardPhoneAccount from "./card-phone-account";
import SkeletonLoading from "@/src/components/skeleton-loading";

function TableNewSubscriptions() {
  const { data, isLoading } = GetNewSubscriptions();
  console.log(data);

  return (
    <div>
      <TableHeader>
        <TableHeader.First title="New subscriptions" />
        <TableHeader.Last className="ms-auto">
          <LinkGreen
            href={ROUTES.ADMIN.ACCOUNTS}
            className={"h-10 w-fit gap-3 "}
          >
            <p className="text-white text-[16px]">View all</p>
            <ArrowWhiteIcon />
          </LinkGreen>
        </TableHeader.Last>
      </TableHeader>
      {isLoading ? (
        <div className="flex justify-center items-center mb-section">
          <SkeletonLoading className="w-full !h-28 max-w-full min-w-full" />
        </div>
      ) : (
        <DataTable
          data={data?.data?.items || []}
          columns={columns}
          Component={CardPhoneAccount}
          functionSelect={[]}
        />
      )}
    </div>
  );
}

export default TableNewSubscriptions;

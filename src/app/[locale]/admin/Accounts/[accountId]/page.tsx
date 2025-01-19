"use client";
import React, { useState } from "react";
import HeaderEditAcc from "./_components/HeaderEditAcc";
import ActivityView from "./_components/Activity-view";
import AccountDetailsView from "./_components/account-details-view";
import { GetAccountInAdminByID } from "@/src/hooks/queries/admin/account";

function Page({ params }: any) {
  const [viewProfile, setViewProfile] = useState<string>("Profile");
  const query = GetAccountInAdminByID(params.accountId);

  return (
    <div>
      <HeaderEditAcc
        id={params.accountId}
        viewProfile={viewProfile}
        setViewProfile={setViewProfile}
        query={query}
      />
      {viewProfile === "Profile" ? (
        <AccountDetailsView accountId={params.accountId} query={query} />
      ) : (
        <ActivityView />
      )}
    </div>
  );
}

export default Page;

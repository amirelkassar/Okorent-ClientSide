"use client";
import React, { useState } from "react";
import HeaderEditAcc from "./_components/HeaderEditAcc";
import ActivityView from "./_components/Activity-view";
import AccountDetailsView from "./_components/account-details-view";

function Page({ params }: any) {
  const [viewProfile, setViewProfile] = useState<string>("Profile");

  return (
    <div>
      <HeaderEditAcc
        id={params.accountId}
        viewProfile={viewProfile}
        setViewProfile={setViewProfile}
      />
      {viewProfile === "Profile" ? <AccountDetailsView accountId={params.accountId} /> : <ActivityView />}
    </div>
  );
}

export default Page;

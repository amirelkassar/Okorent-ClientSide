"use client";
import React from "react";
import Complete from "./_components/Complete";
import Upgrade from "./_components/Upgrade";
import ProfileDetails from "./_components/ProfileDetails";
import { QueryWrapper } from "@/src/components/query-wrapper";
import { GetMyProfile } from "@/src/hooks/queries/user/my-profile";
import ReviewAboutMe from "./_components/review-about-me";
import MyProducts from "./_components/my-products";
import RecentActivities from "./_components/recent-activities";

function page() {
  const query = GetMyProfile();
  return (
    <div className="pb-24">
      <QueryWrapper query={query}>
        {({ data }: { data: any }) => {
          console.log(data);
          return (
            <>
              <Complete />
              <div className="flex flex-wrap lgl:flex-row flex-col  gap-8 mb-20">
                <ProfileDetails initialData={data} />
                <Upgrade />
              </div>
            </>
          );
        }}
      </QueryWrapper>

      {/* Your Review  */}
      <ReviewAboutMe />
      {/* Recent Activities */}
      <RecentActivities />
      <MyProducts />
    </div>
  );
}

export default page;

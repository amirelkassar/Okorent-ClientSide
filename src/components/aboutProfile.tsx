import React from "react";

function AboutProfile({
  description = "About ..",
  nameUser = "User",
}: {
  description?: string;
  nameUser?: string;
}) {
  return (
    <div className=" py-5 lg:py-11 px-5 border border-green/30 bg-white/40 shadow-md rounded-2xl mb-section">
      <h3 className="text-base lg:text-3xl mb-3  lg:mb-4">About {nameUser}🌟</h3>
      <p className="font-Regular text-sm lg:text-base text-grayMedium ">
        {description||'No Description'}
      </p>
    </div>
  );
}

export default AboutProfile;

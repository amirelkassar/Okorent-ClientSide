import React from "react";
import Emails from "./_components/emails";
import ContactForm from "./_components/contactForm";

function page() {
  return (
    <div className="mb-6 lg:mb-36">
      <h2 className="text-3xl lg:text-[48px] text-center mt-4 lg:mt-10 mb-6 lg:mb-24">
        Get in touch with us{" "}
      </h2>
      <div className="flex justify-between flex-col lg:flex-row gap-16 lg:gap-5">
        <ContactForm />
        <Emails />
      </div>
    </div>
  );
}

export default page;

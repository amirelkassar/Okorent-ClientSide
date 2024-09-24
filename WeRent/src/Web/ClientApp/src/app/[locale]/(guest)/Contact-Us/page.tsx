import React from "react";
import Emails from "./_components/emails";
import ContactForm from "./_components/contactForm";

function page() {
  return (
    <div className="mb-36">
      <h2 className="text-[48px] text-center lg:mb-24">
        Get in touch with us{" "}
      </h2>
      <div className="flex justify-between gap-5">
        <ContactForm />
        <Emails />
      </div>
    </div>
  );
}

export default page;

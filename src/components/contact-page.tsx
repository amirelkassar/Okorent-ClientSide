"use client";
import React, { useCallback, useState } from "react";
import UnionContactIcon from "../assets/icons/UnionContact";
import Button from "./button";
import InputTextarea from "./InputTextarea";
import Input from "./input";
import FacebookIcon from "../assets/icons/facebook";
import InstaIcon from "../assets/icons/insta";
import TwitterIcon from "../assets/icons/twitter";
import { Toast } from "./toast";
import { useContactUs, useSupportUser } from "../hooks/queries/admin/support";
import GetErrorMsg from "./getErrorMsg";

function ContactPage({ user = false }: { user?: boolean }) {
  const [formData, setFormData] = useState({
    UserName: "",
    UserEmail: "",
    Title: "",
    Content: "",
  });
  const { mutateAsync: SendContactUs, error, reset } = useContactUs();
  const {
    mutateAsync: SendSupport,
    error: errorSupportUser,
    reset: resetSupport,
  } = useSupportUser();

  // Handle input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    resetSupport();
    reset();
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitGuest = useCallback(async () => {
    Toast.Promise(SendContactUs(formData), {
      success: "successfully Send Contact Us Message",
      onSuccess: async (res) => {
        resetSupport();
        reset();
      },
    });
  }, [SendContactUs, formData]);

  const handleSubmitUser = useCallback(async () => {
    Toast.Promise(
      SendSupport({
        Title: formData.Title,
        Content: formData.Content,
        TicketType: 4,
      }),
      {
        success: "successfully Send Contact Us Message",
        onSuccess: async (res) => {
          resetSupport();
          reset();
        },
      }
    );
  }, [SendSupport, formData]);
  const handleSubmit = user ? handleSubmitUser : handleSubmitGuest;
  
  return (
    <div>
      <div className="my-section">
        <div className="flex mdl:items-center justify-between gap-2 mdl:gap-6 flex-col mdl:flex-row">
          <div>
            <h4 className=" mb-1 mdl:mb-8 font-Regular text-sm mdl:text-2xl">
              Get Started
            </h4>
            <h5 className=" leading-normal text-3xl mdl:text-[64px] font-Bold max-w-[800px]">
              Get in touch with us. We Are here to assist you.
            </h5>
          </div>
          <div className="flex flex-row items-center flex-wrap mdl:flex-col gap-4 mdl:gap-6 ">
            <div className="flex items-center justify-center border-grayMedium cursor-pointer duration-300 hover:shadow-md border rounded-full size-10 mdl:size-[50px]">
              <FacebookIcon fill="#1E2532" className="w-2 h-auto" />
            </div>
            <div className="flex items-center justify-center border-grayMedium cursor-pointer duration-300 hover:shadow-md border rounded-full size-10 mdl:size-[50px]">
              <InstaIcon fill="#1E2532" className="w-4 h-auto" />
            </div>
            <div className="flex items-center justify-center border-grayMedium cursor-pointer duration-300 hover:shadow-md border rounded-full size-10 mdl:size-[50px]">
              <TwitterIcon fill="#1E2532" className="w-4 h-auto" />
            </div>
          </div>
        </div>
        <div className="mt-section">
          <form
            onSubmit={handleSubmit}
            className="flex gap-4 mdl:gap-12 flex-wrap"
          >
            <Input
              label="Your Name"
              type="text"
              name="UserName"
              value={formData.UserName || ""}
              onChange={handleInputChange}
              inputClassName="!h-16 !rounded-2xl bg-white"
              className="flex-1 min-w-full md:min-w-[350px]"
              labelClassName=" text-base mdl:!text-2xl"
              error={
                GetErrorMsg(error, "UserName") ||
                GetErrorMsg(errorSupportUser, "UserName")
              }
            />
            <Input
              label="Email Address"
              type="email"
              name="UserEmail"
              value={formData.UserEmail}
              onChange={handleInputChange}
              inputClassName="!h-16 !rounded-2xl bg-white"
              className="flex-1 min-w-full md:min-w-[350px]"
              labelClassName=" text-base mdl:!text-2xl"
              error={
                GetErrorMsg(error, "UserEmail") ||
                GetErrorMsg(errorSupportUser, "UserEmail")
              }
            />
            <Input
              label="Subject"
              type="text"
              name="Title"
              value={formData.Title}
              onChange={handleInputChange}
              inputClassName="!h-16 !rounded-2xl bg-white"
              className="flex-1 min-w-full md:min-w-[350px]"
              labelClassName=" text-base mdl:!text-2xl"
              error={
                GetErrorMsg(error, "Title") ||
                GetErrorMsg(errorSupportUser, "Title")
              }
            />
            <InputTextarea
              label="Message"
              name="Content"
              value={formData.Content}
              onChange={handleInputChange}
              autosize
              inputClassName="!h-24 min-h-24 !rounded-2xl bg-white"
              labelClassName=" text-base mdl:!text-2xl"
              className="min-w-full !min-h-24"
              error={
                GetErrorMsg(error, "Content") ||
                GetErrorMsg(errorSupportUser, "Content")
              }
            />
            <Button
              onClick={() => {
                handleSubmit();
              }}
              className={"!px-8 h-16 my-6"}
            >
              Leave Us a Message
            </Button>
          </form>
        </div>
      </div>
      <div className="flex mt-16 lg:items-center z-10 gap-12 flex-col lg:flex-row py-14  mdl:py-28 relative before:content-[''] before:w-[calc(100%+32px)] lg:before:w-screen before:-z-10  before:bg-[#e6f2e1] before:absolute before:bottom-0 before:-translate-x-1/2   before:h-full before:left-[50%]">
        <UnionContactIcon className="w-screen absolute -translate-x-1/2 left-1/2 -top-3 sml:-top-8 h-auto -mb-10 z-[2] " />

        <div>
          <h3 className="text-base mdl:text-2xl mb-6">Contact Info</h3>
          <p className=" text-2xl mdl:text-[56px] leading-normal max-w-[576px] w-full">
            We are always happy to assist you
          </p>
        </div>
        <div className="flex gap-3 flex-col mdl:flex-row flex-1">
          <div className="flex flex-col gap-4 mdl:gap-6 flex-1">
            <h4 className="text-base mdl:text-xl ">Inquires</h4>
            <span className="w-7 block h-1 bg-black"></span>
            <h5 className="text-base mdl:text-xl ">info@okornet.com</h5>
          </div>
          <div className="flex flex-col gap-4 mdl:gap-6 flex-1">
            <h4 className="text-base mdl:text-xl ">Bugs</h4>
            <span className="w-7 block h-1 bg-black"></span>
            <h5 className="text-base mdl:text-xl ">Cs@okorent.com</h5>
          </div>
          <div className="flex flex-col gap-4 mdl:gap-6 flex-1">
            <h4 className="text-base mdl:text-xl ">HR</h4>
            <span className="w-7 block h-1 bg-black"></span>
            <h5 className="text-base mdl:text-xl ">hr@okornet.com</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;

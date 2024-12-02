import LinkGreen from "@/src/components/linkGreen";
import { Link, useRouter } from "@/src/navigation";
import ROUTES from "@/src/routes";
import React from "react";
import PhoneInput from "react-phone-input-2";
interface AddPhoneProps {
  formData: any;
  setFormData: (val: any) => void;
}
function AddPhone({ setFormData, formData }: AddPhoneProps) {
  const router = useRouter();

  return (
    <div className="flex-1  content-center flex flex-col mt-12">
      <h1 className="mt-1 font-Bold text-lg lg:text-xLarge">One more step</h1>
      <p className="text-grayMedium text-sm lg:text-medium mb-14 max-w-[240px] leading-6">
        Enter your phone number below to verify your identity
      </p>
      <form action="" className="w-full flex flex-col ">
        <p className="text-[16px] mb-2 font-Medium ms-1">Phone number</p>
        <div dir="ltr">
          <PhoneInput
            specialLabel=""
            enableSearch={true}
            country={"eg"} // Set Egypt as the default country (matches your image)
            enableAreaCodes={true}
            searchPlaceholder="Search for country"
            autoFormat={false}
            value={formData.PhoneNumber}
            inputClass="!rounded-lg h-11 w-full text-base border-0 bg-[#D9D9D980] ps-[70px] placeholder:text-base"
            inputProps={{
              type: "text",
              required: true,
              className:
                " py-2 w-full text-base border-0 bg-[#D9D9D980] h-11  !rounded-lg ps-[70px] outline-none",
              placeholder: "",
              id: "phone",
            }}
            buttonClass=" left-0 h-full border border-black/20 w-[64px] flex !rounded-s-lg items-center justify-center !top-1/2 transform -translate-y-1/2 !bg-white" // For flag dropdown
            dropdownClass="top-full !shadow-none border overflow-x-hidden  !rounded-lg border-black/20 left-0 !overflow-y-auto border border-gray-300 rounded-lg bg-white" // Dropdown menu styling
            searchClass="w-full relative  !py-2 !border-0 !px-3 text-sm ps-10 placeholder:text-xs " // Search input in dropdown
            onChange={(phone) => {
              setFormData({ ...formData, PhoneNumber: phone });
              console.log(phone);
            }}
          />
        </div>
        <div className={"w-full mt-10 flex flex-col gap-2 md:mt-28"}>
          <LinkGreen
            href={ROUTES.AUTH.SIGNUP + "?step=confirmPhone"}
            className={"w-full "}
          >
            Next
          </LinkGreen>
        </div>
      </form>
      <div className="flex items-center justify-center py-5 mt-20 lg:mt-auto">
        <h3 className="flex items-center justify-center gap-1 font-Light">
          Already have an account?
          <Link href={ROUTES.AUTH.LOGIN} className="text-blue font-Medium">
            {" "}
            Sign in
          </Link>
        </h3>
      </div>
    </div>
  );
}

export default AddPhone;

import React from "react";
import PhoneInput from "react-phone-input-2";
import ErrorMsg from "./error-msg";
interface InputPhone {
  label?: string;
  placeholder?: string;
  labelClassName?: string;
  inputClassName?: string;
  boxClassName?: string;
  flagBorder?: boolean;
  onChange?: (value: string) => void;
  error?: any;
  value?: any;
}
function InputPhone({
  label = "Phone number",
  inputClassName,
  placeholder,
  labelClassName,
  boxClassName,
  flagBorder = true,
  onChange,
  error,
  value,
}: InputPhone) {
  return (
    <div className={boxClassName}>
      <p
        className={` text-sm md:text-[16px] mb-2 font-Medium ms-1 ${labelClassName}`}
      >
        {label}
      </p>
      <div dir="ltr" className="mx-1">
        <PhoneInput
          placeholder={placeholder}
          value={value}
          specialLabel=""
          enableSearch={true}
          country={"eg"} // Set Egypt as the default country (matches your image)
          enableAreaCodes={true}
          searchPlaceholder="Search for country"
          autoFormat={false}
          inputClass={`!rounded-lg h-11 w-full text-sm lg:text-base border-0 bg-[#D9D9D980] px-14 lg:ps-[70px] placeholder:text-base ${inputClassName}`}
          inputProps={{
            type: "text",
            required: true,
            className: ` py-2 w-full text-sm lg:text-base border-0 bg-[#D9D9D980] h-11  !rounded-lg px-14 lg:ps-[70px] outline-none ${inputClassName}`,
            placeholder: "",
            id: "phone",
          }}
          buttonClass={`  border ${
            flagBorder
              ? "  h-full left-0 border-black/20"
              : " left-[2px] h-[93%]  !border-y-0 !border-s-0"
          }  w-12 lg:w-[64px] flex !rounded-s-lg items-center justify-center !top-1/2 transform -translate-y-1/2 !bg-white`} // For flag dropdown
          dropdownClass="top-full !shadow-none border overflow-x-hidden  !rounded-lg border-black/20 left-0 !overflow-y-auto border border-gray-300 rounded-lg bg-white" // Dropdown menu styling
          searchClass="w-full relative  !py-2 !border-0 !px-3 text-sm ps-10 placeholder:text-xs " // Search input in dropdown
          onChange={(e) => {
            if (onChange) {
              onChange(e);
            }
          }}
        />
      </div>
      {error && <ErrorMsg error={error} />}
    </div>
  );
}

export default InputPhone;

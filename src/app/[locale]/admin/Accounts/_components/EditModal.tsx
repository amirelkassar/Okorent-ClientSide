import React, { useCallback, useState } from "react";
import Button from "@/src/components/button";
import Input from "@/src/components/input";
import InputPhone from "@/src/components/inputPhone";
import ModalComp from "@/src/components/modal-comp";
import SelectInput from "@/src/components/select-input";
import { useEditAccountInAdmin } from "@/src/hooks/queries/admin/account";
import { Accordion } from "@mantine/core";
import { Toast } from "@/src/components/toast";
import GetErrorMsg from "@/src/components/getErrorMsg";

function EditModal({
  opened,
  close,
  dataUSer,
}: {
  dataUSer: any;
  opened: boolean;
  close: any;
}) {
  const {
    mutateAsync: EditUserDetails,
    error,
    reset,
    isError,
  } = useEditAccountInAdmin();

  // Initialize state with default values from dataUSer
  const [formState, setFormState] = useState({
    id: dataUSer.id,
    name: dataUSer.name || "",
    email: dataUSer.userName || "",
    phoneNumber: dataUSer.phoneNumber || "",
    oldPassword: "",
    newPassword: "",
    profileImageFile: "",
    avatarImageFile: "",
    address: dataUSer.address || "",
    city: dataUSer.city || "",
    country: dataUSer.country || "",
    zipCode: dataUSer.zipCode || "",
    region: dataUSer.region || "",
    plan: "Basic",
  });
  console.log(formState);

  // Handle input changes
  const handleChange = (key: string, value: string) => {
    if (isError) {
      reset();
    }
    setFormState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleSubmit = useCallback(async () => {
    Toast.Promise(EditUserDetails(formState), {
      success: "Update User Done",
      onSuccess: async (res) => {
        close();
      },
    });
  }, [EditUserDetails, formState]);
  return (
    <ModalComp opened={opened} close={close} title={"Account Details"}>
      <div className="lg:w-[580px] w-full flex flex-col gap-4">
        <div className="flex gap-3 flex-wrap lg:gap-7 w-full">
          <Input
            sectionType="user"
            value={formState.name}
            onChange={(e) => handleChange("name", e.target.value)}
            inputClassName="bg-white h-12 lg:h-16 rounded-xl"
            label="Name"
            placeholder="Write customer name here"
            className="flex-1"
            error={GetErrorMsg(error, "Name")}
          />
          <Input
            sectionType="email"
            type="email"
            value={formState.email}
            onChange={(e) => handleChange("email", e.target.value)}
            inputClassName="bg-white h-12 lg:h-16 rounded-xl"
            label="Email"
            placeholder="Write customer email here"
            className="flex-1"
            error={GetErrorMsg(error, "Email")}
          />
        </div>
        <div className="flex gap-3 flex-wrap lg:gap-7 w-full">
          <SelectInput
            data={["Basic", "Basic2", "Basic3", "Basic4", "Basic5"]}
            label="Plan"
            value={formState.plan}
            onChange={(value: any) => handleChange("plan", value)}
            className="flex-1"
          />
          <InputPhone
            value={formState.phoneNumber}
            onChange={(value) => handleChange("phoneNumber", value)}
            boxClassName={"flex-1"}
            inputClassName="bg-white h-12 lg:h-16 !border border-green/30"
            flagBorder={false}
            error={GetErrorMsg(error, "PhoneNumber")}
          />
        </div>
        <div>
          <Accordion transitionDuration={300} className="flex flex-col gap-6">
            <Accordion.Item
              value={"edit"}
              className="border-none bg-blueLight/50 rounded-2xl "
            >
              <Accordion.Control className="hover:bg-blueLight/50 h-12 lg:h-16 text-base lg:text-xl font-Medium duration-200 !border border-solid border-green/30 rounded-2xl shadow-sm">
                Address Info
              </Accordion.Control>
              <Accordion.Panel className="border-green/30 border border-t-0 pt-6 lg:pt-8 relative -mt-4 border-solid rounded-b-2xl shadow-md">
                <div className="w-full flex flex-col gap-2">
                  <Input
                    label="Address"
                    value={formState.address}
                    onChange={(e) => handleChange("address", e.target.value)}
                    inputClassName="bg-white h-12 lg:h-16 rounded-xl"
                    className="flex-1"
                  />
                  <div className="flex gap-3 flex-wrap lg:gap-7">
                    <Input
                      label="Zip Code"
                      value={formState.zipCode}
                      onChange={(e) => handleChange("zipCode", e.target.value)}
                      inputClassName="bg-white h-12 lg:h-16 rounded-xl"
                      className="flex-1 min-w-[200px]"
                    />
                    <Input
                      label="City"
                      value={formState.city}
                      onChange={(e) => handleChange("city", e.target.value)}
                      inputClassName="bg-white h-12 lg:h-16 rounded-xl"
                      className="flex-1 min-w-[200px]"
                    />
                  </div>
                  <div className="flex gap-3 flex-wrap lg:gap-7">
                    <Input
                      label="Region"
                      value={formState.region}
                      onChange={(e) => handleChange("region", e.target.value)}
                      inputClassName="bg-white h-12 lg:h-16 rounded-xl"
                      className="flex-1 min-w-[200px]"
                    />
                    <Input
                      label="Country"
                      value={formState.country}
                      onChange={(e) => handleChange("country", e.target.value)}
                      inputClassName="bg-white h-12 lg:h-16 rounded-xl"
                      className="flex-1 min-w-[200px]"
                    />
                  </div>
                </div>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="flex items-center gap-7 w-full">
          <Button
            onClick={close}
            className={"flex-1 h-[54px] text-black bg-grayBack border-none"}
          >
            Cancel
          </Button>
          <Button onClick={handleSubmit} className={"flex-1 h-[54px]"}>
            Save
          </Button>
        </div>
      </div>
    </ModalComp>
  );
}

export default EditModal;

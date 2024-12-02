"use client";
import Logo from "@/src/components/logo";
import React, { useCallback, useState } from "react";
import AddPhone from "./_components/add-phone";
import ConfirmPhone from "./_components/confirm-phone";
import SignupView from "./_components/signup-view";
import { useCreateAccountMutation } from "@/src/hooks/queries/auth";
import Button from "@/src/components/button";
import MakeHome from "./_components/make-home";
import { useSearchParams } from "next/navigation";
import DoneAuth from "./_components/doneAuth";
interface LoginData {
  Name: string;
  Email: string;
  Password: string;
  PhoneNumber: string;
  Theme: "dark" | "light";
  Language: "en" | "ar";
  ProfileImageFile: File | null;
  AvatarFile: File | null;
}
function PageLogin() {
  const [currentPage, setCurrentPage] = useState<string>("signup");
  const searchParams = useSearchParams();
  const [Done, setDone] = useState(false);

  const [formData, setFormData] = useState<LoginData>({
    Name: "",
    Email: "",
    Password: "",
    PhoneNumber: "",
    Theme: "light",
    Language: "en",
    ProfileImageFile: null,
    AvatarFile: null,
  });
  const {
    mutateAsync: CreateAccount,
    error,
    isLoading,
    isError,
    reset,
  } = useCreateAccountMutation();
  const onChange = useCallback(
    (e: any) => {
      const { name, value } = e.target;

      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));

      if (isError) reset();
    },
    [isError, reset]
  );
  const onSubmit = async () => {
    // Create FormData to handle both files and other data
    const requestData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) {
        requestData.append(key, value as any); // Append each field
      }
    });

    try {
      await CreateAccount(requestData).then((res) => {
        if (res?.code === 200) {
          setDone(true);
        }
        console.log(res);
      }); // Use FormData with your mutation
    } catch (error) {
      console.error("Error creating account:", error);
    }
  };
  console.log(formData);

  return (
    <div className="flex-1 pt-4 lgl:pt-20 pb-8 md:pb-16  flex  min-h-full justify-center lgl:justify-start">
      <div className="max-w-[470px] w-full flex flex-col gap-4">
        <Logo theme="green" />
        {!searchParams.get("step") ? (
          <SignupView formData={formData} onChange={onChange} />
        ) : searchParams.get("step") === "addPhone" ? (
          <AddPhone setFormData={setFormData} formData={formData} />
        ) : searchParams.get("step") === "confirmPhone" ? (
          <ConfirmPhone setCurrentPage={setCurrentPage} />
        ) : (
          searchParams.get("step") === "makeHome" && (
            <MakeHome formData={formData} setFormData={setFormData}>
              <Button className={"w-full "} onClick={onSubmit}>
                Next
              </Button>
            </MakeHome>
          )
        )}
        {Done ? <DoneAuth done={Done} /> : null}
      </div>
    </div>
  );
}

export default PageLogin;

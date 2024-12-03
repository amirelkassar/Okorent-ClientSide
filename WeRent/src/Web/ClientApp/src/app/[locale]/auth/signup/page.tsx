"use client";
import Logo from "@/src/components/logo";
import React from "react";
import AddPhone from "./_components/add-phone";
import ConfirmPhone from "./_components/confirm-phone";
import SignupView from "./_components/signup-view";
import Button from "@/src/components/button";
import MakeHome from "./_components/make-home";
import { useSearchParams } from "next/navigation";
import DoneAuth from "./_components/doneAuth";
import { useSignUp } from "./_hooks/use-sign-up";

function PageLogin() {
  const searchParams = useSearchParams();
  const {form, status} = useSignUp();
  // Destructure the form and status objects
  const { setFormData, onChange, onSubmit, data, error ,Done} = form ;
  const { isPaused, isError } = status ;

 
  return (
    <div className="flex-1 pt-4 lgl:pt-20 pb-8 md:pb-16  flex  min-h-full justify-center lgl:justify-start">
      <div className="max-w-[470px] w-full flex flex-col gap-4">
        <Logo theme="green" />
        {!searchParams.get("step") ? (
          <SignupView formData={data} onChange={onChange} />
        ) : searchParams.get("step") === "addPhone" ? (
          <AddPhone setFormData={setFormData} formData={data} />
        ) : searchParams.get("step") === "confirmPhone" ? (
          <ConfirmPhone  />
        ) : (
          searchParams.get("step") === "makeHome" && (
            <MakeHome formData={data} setFormData={setFormData}>
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

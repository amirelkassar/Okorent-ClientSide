"use client";
import React, { useState } from "react";
import ModalComp from "./modal-comp";
import { useDisclosure } from "@mantine/hooks";
import Button from "./button";
import Input from "./input";
import Password from "./password";
import AddUserIcon from "../assets/icons/addUser";
import InputPhone from "./inputPhone";
import SelectInput from "./select-input";
import { useCreateAccountInAdmin } from "../hooks/queries/admin/account";
import { Toast } from "./toast";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorMsg from "./error-msg";
import { schemaSignUp } from "../hooks/schema/auth-schema";
import InputSubmit from "./input-submit";

interface FormData {
  Name: string;
  Email: string;
  Password: string;
  PhoneNumber: string;
}

function AddUser() {
  const [opened, { open, close }] = useDisclosure(false);
  const { mutateAsync: CreateAccount } = useCreateAccountInAdmin();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schemaSignUp),
  });

  const onSubmitCreateAccount = async (data: FormData) => {
    try {
      await Toast.Promise(CreateAccount(data), {
        success: "Account created successfully!",
        onSuccess: (res) => {
          close();
          reset();
        },
      });
      close();
    } catch (error) {
      console.error("Error creating account:", error);
    }
  };

  return (
    <>
      <Button className="h-10 w-fit gap-3" onClick={open}>
        <AddUserIcon />
        Add user
      </Button>
      <ModalComp
        title="Add user"
        opened={opened}
        close={() => {
          close();
          reset();
        }}
      >
        <form
          onSubmit={handleSubmit(onSubmitCreateAccount)}
          className="flex flex-col gap-4 w-[570px] max-w-full"
        >
          {/* Name Input */}
          <Input
            {...register("Name")}
            label="Name"
            placeholder="Write customer name here"
            inputClassName="bg-white h-12 lg:h-16 rounded-xl"
            error={errors.Name?.message}
            className="flex-1 min-w-[220px]"
            sectionType="user"
          />

          {/* Email and Plan Inputs */}
          <div className="flex gap-4 flex-wrap lg:gap-7">
            <Input
              {...register("Email")}
              type="email"
              label="Email"
              placeholder="Write customer email here"
              inputClassName="bg-white h-12 lg:h-16 rounded-xl"
              error={errors.Email?.message}
              className="flex-1 min-w-[220px]"
              sectionType="email"
            />
            <SelectInput
              // {...register("plan")}
              data={["Basic", "Basic2", "Basic3", "Basic4", "Basic5"]}
              label="Plan"
              defaultValue={"Basic"}
              className="flex-1 min-w-[220px]"
              // error={errors.plan?.message}
            />
          </div>

          {/* Phone and Password Inputs */}
          <div className="flex gap-4 flex-wrap lg:gap-7">
            <InputPhone
              boxClassName="flex-1 min-w-[220px]"
              inputClassName="bg-white h-12 lg:h-16 !border border-green/30"
              flagBorder={false}
              onChange={(value: any) => setValue("PhoneNumber", value)}
              error={errors.PhoneNumber?.message}
            />
            <Password
              {...register("Password")}
              label="Password"
              placeholder="Write password here"
              inputClassName="h-12 lg:h-16 bg-white border-green-30 border"
              error={errors.Password?.message}
              className="flex-1 min-w-[220px]"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 flex-wrap lg:gap-7 mt-5 w-full pb-5">
            <Button
              onClick={() => {
                if (errors) {
                  reset();
                }
                close();
              }}
              className="flex-1 h-16 text-black bg-grayBack border-none"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit(onSubmitCreateAccount)}
              type="submit"
              className="w-full flex-1 h-16"
            >
              Create Account
            </Button>
          </div>
        </form>
      </ModalComp>
    </>
  );
}

export default AddUser;

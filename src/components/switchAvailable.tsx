"use client";
import React, { useCallback, useEffect } from "react";
import { useSwitchAvailable } from "../store/rent-slice";
import SwitchControl from "./switch-control";
import { useEndVacationUser } from "../hooks/queries/user/home/user-info";
import { Toast } from "./toast";

function SwitchAvailable({
  open,
  vacation = false,
}: {
  open: () => void;
  vacation: boolean;
}) {
  const { switchAvailable, setSwitchAvailable } = useSwitchAvailable();
  console.log(switchAvailable);
  console.log(vacation);

  useEffect(() => {
    setSwitchAvailable(vacation ? "Vacation" : "Available");
  }, [vacation, setSwitchAvailable]);

  const { mutateAsync: EndVacationUser, error, reset } = useEndVacationUser();
  const handleSubmitEndVacation = useCallback(async () => {
    Toast.Promise(EndVacationUser(), {
      success: "Done End Vacation",
      onSuccess: async (res) => {
        close();
      },
    });
  }, [EndVacationUser]);
  return (
    <SwitchControl
      options={[
        { label: "Available", value: "Available" },
        { label: "Vacation", value: "Vacation" },
      ]}
      defaultValue={vacation ? "Vacation" : "Available"}
      onChange={(e) => {
        if (e === "Vacation") open();
        if (e === "Available") handleSubmitEndVacation();
        setSwitchAvailable(e === "Available" ? "Available" : "Vacation");
      }}
    />
  );
}

export default SwitchAvailable;

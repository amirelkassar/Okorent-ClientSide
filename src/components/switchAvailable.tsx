"use client";
import React, { useCallback, useEffect } from "react";
import { useSwitchAvailable } from "../store/rent-slice";
import SwitchControl from "./switch-control";
import { useEndVacationUser } from "../hooks/queries/user/home/user-info";
import { Toast } from "./toast";
import ModalVacation from "./modal-vacation";
import { useDisclosure } from "@mantine/hooks";

function SwitchAvailable({ vacation = false }: { vacation: boolean }) {
  const [opened, { open, close }] = useDisclosure(false);

  const { switchAvailable, setSwitchAvailable } = useSwitchAvailable();

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
  }, [EndVacationUser, close]);
  return (
    <>
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
      <ModalVacation opened={opened} close={close} />
    </>
  );
}

export default SwitchAvailable;

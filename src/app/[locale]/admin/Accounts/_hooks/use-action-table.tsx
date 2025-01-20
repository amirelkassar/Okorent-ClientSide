"use client";
import { useCallback, useMemo, useState } from "react";
import DeleteIcon from "@/src/assets/icons/delete";
import { GetUniqueValues } from "@/src/lib/utils";
import TrueIcon from "@/src/assets/icons/true";
import DeactivateIcon from "@/src/assets/icons/Deactivate";
import NoteTableIcon from "@/src/assets/icons/noteTable";
import {
  useActiveManyAccountInAdmin,
  useDeleteManyAccountInAdmin,
  useVerificationManyAccountInAdmin,
} from "@/src/hooks/queries/admin/account";
import { Toast } from "@/src/components/toast";
import { useSelectRowTable } from "@/src/components/select-row-table-context";
import UnVerifyIcon from "@/src/assets/icons/unVerify";

interface SignUpReturn {
  functionSelectView: any[];
  setSelectedFromTable: any;
  selectedFromTable: any;
}
export const useActionTable = (open: any): SignUpReturn => {
  const [selectedFromTable, setSelectedFromTable] = useState([]);
  const { mutateAsync: DeleteManyAccount } = useDeleteManyAccountInAdmin();
  const { mutateAsync: ActiveManyAccount } = useActiveManyAccountInAdmin();
  const { mutateAsync: VerificationManyAccount } =
    useVerificationManyAccountInAdmin();

  const { setSelectRowTable } = useSelectRowTable();

  //delete User
  const onSubmitDeleteManyAccount = useCallback(
    async (data: any) => {
      Toast.Promise(DeleteManyAccount(data), {
        success: "Deleted Account Done",
        onSuccess(res) {
          setSelectRowTable([]);
        },
        onError(err) {
          setSelectRowTable([]);
        },
      });
    },
    [DeleteManyAccount, selectedFromTable]
  );
  //Active Many User
  const onSubmitActiveManyAccount = useCallback(
    async (data: any) => {
      Toast.Promise(ActiveManyAccount(data), {
        success: "Activate Accounts Done",
        onSuccess(res) {
          setSelectRowTable([]);
        },
        onError(err) {
          setSelectRowTable([]);
        },
      });
    },
    [ActiveManyAccount, selectedFromTable]
  );
  //Verification Many User
  const onSubmitVerificationManyAccount = useCallback(
    async (data: any, verify: boolean) => {
      Toast.Promise(VerificationManyAccount(data), {
        success: ` ${verify ? "Verified" : "UnVerified"} Accounts Done`,
        onSuccess(res) {
          setSelectRowTable([]);
        },
        onError(err) {
          setSelectRowTable([]);
        },
      });
    },
    [VerificationManyAccount, selectedFromTable]
  );



  const functionSelectView = useMemo(() => {
    const isVerified = GetUniqueValues(selectedFromTable, "isVerified");
    const isActivated = GetUniqueValues(selectedFromTable, "isActivated");

    const functionSelect = [
      ...(isVerified?.toString() === "true"
        ? [
            {
              title: "UnVerify",
              icon: <UnVerifyIcon fill="#006AFF" className="w-3 h-auto" />,
              onclick: (ids: any) => {
                onSubmitVerificationManyAccount(
                  {
                    verify: false,
                    userIds: ids.map((item: any) => item.id),
                  },
                  false
                );
              },
            },
          ]
        : isVerified?.toString() === "false"
        ? [
            {
              title: "Verify",
              icon: <TrueIcon className="max-h-4 w-auto " />,
              onclick: (ids: any) => {
                onSubmitVerificationManyAccount(
                  {
                    verify: true,
                    userIds: ids.map((item: any) => item.id),
                  },
                  true
                );
              },
            },
          ]
        : []),
      ...(isActivated?.toString() === "true"
        ? [
            {
              title: "Deactivate",
              icon: <DeactivateIcon className="max-h-4 w-auto " />,
              onclick: (ids: any) => {
                open();
              },
            },
          ]
        : isActivated?.toString() === "false"
        ? [
            {
              title: "Activate",
              icon: <TrueIcon className="max-h-4 w-auto " />,
              onclick: (ids: any) => {
                onSubmitActiveManyAccount({
                  userIds: ids?.map((item: any) => item.id),
                });
              },
            },
          ]
        : []),

      //2
      {
        title: "Send Note",
        icon: <NoteTableIcon className="max-h-4 w-auto " />,
        onclick: (ids: any) => {
          console.log([...ids]);
        },
      },
      //5
      {
        title: "Delete",
        icon: <DeleteIcon className="max-h-4 w-auto " />,
        onclick: (ids: any) => {
          onSubmitDeleteManyAccount({
            userIds: ids?.map((item: any) => item.id),
          });
        },
      },
    ];

    return functionSelect;
  }, [
    selectedFromTable,
    onSubmitActiveManyAccount,
    onSubmitDeleteManyAccount,
    onSubmitVerificationManyAccount,
    open,
  ]);

  return {
    functionSelectView,
    setSelectedFromTable,
    selectedFromTable,
  };
};

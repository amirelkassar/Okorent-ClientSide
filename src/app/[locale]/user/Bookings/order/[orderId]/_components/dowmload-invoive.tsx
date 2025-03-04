"use client";
import DownloadIcon from "@/src/assets/icons/download";
import { Toast } from "@/src/components/toast";
import { useDownloadInvoice } from "@/src/hooks/queries/user/order";
import { useParams } from "next/navigation";
import React, { useCallback } from "react";

function DownloadInvoice() {
  const params = useParams();
  console.log(params);
  const { mutateAsync: downloadInvoice } = useDownloadInvoice(params.orderId);
  const onSubmitDelete = useCallback(async () => {
    Toast.Promise(downloadInvoice(), {
      success: "get invoice done",
      onSuccess: async (res) => {
        const url = window.URL.createObjectURL(res);
        const a = document.createElement("a");
        a.href = url;
        a.download = `invoice-${params.orderId}.pdf`; // Set the filename
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      },
    });
  }, [downloadInvoice]);
  return (
    <button
      onClick={() => {
        onSubmitDelete();
      }}
    >
      <DownloadIcon fill="#0F2A43" className="w-5 h-auto" />
    </button>
  );
}

export default DownloadInvoice;

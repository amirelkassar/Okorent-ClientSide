import Button from "@/src/components/button";
import ModalComp from "@/src/components/modal-comp";
import SelectInput from "@/src/components/select-input";
import { Toast } from "@/src/components/toast";
import { GetQrCodeMyProduct } from "@/src/hooks/queries/user/lisitings";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
const qrData = [
  {
    value: "1",
    label: "Code 39",
  },
  {
    value: "2",
    label: "Code 128",
  },
  {
    value: "3",
    label: "Data Matrix",
  },
  {
    value: "4",
    label: "QR Code",
  },
];
function ModalBarcode({
  opened,
  close,
  id,
}: {
  opened: boolean;
  close: any;
  id: string;
}) {
  const { mutateAsync: getQrCode, isLoading } = GetQrCodeMyProduct();
  const [qrType, setQrType] = useState<number | any>(null);
  const [ImageSrc, setImageSrc] = useState("");
  const onSubmitQr = useCallback(async () => {
    Toast.Promise(
      getQrCode({
        type: +qrType,
        productId: id,
      }),
      {
        success: "get QrCode Done",
        onSuccess: async (res) => {
          console.log(res);

          const imageUrl = URL.createObjectURL(res.data);
          setImageSrc(imageUrl);
        },
      }
    );
  }, [getQrCode, id, qrType]);

  useEffect(() => {
    if (qrType) {
      onSubmitQr();
    }
  }, [qrType, onSubmitQr]);
  const handleDownload = () => {
    if (ImageSrc) {
      // Create a link element to trigger the download
      const link = document.createElement("a");
      link.href = ImageSrc;
      link.download = `qr_code_${id}.png`; // Set a default filename
      link.click(); // Trigger the download
      close();
    }
  };
  return (
    <ModalComp title="View Barcode" opened={opened} close={close}>
      <div className="w-[564px] max-w-full">
        <h3 className="text-sm font-medium lg:text-base mb-2">
          {" "}
          Select barcode type
        </h3>

        <SelectInput
          data={qrData.map((item: any) => {
            return { label: item.label, value: item.value };
          })}
          placeholder="Choose..."
          onChange={(e) => {
            setQrType(e);
          }}
          inputClassName=" !rounded-xl md:!rounded-2xl text-grayMedium !h-12  md:!h-16 bg-white"
        />
        <div className=" min-h-[140px] h-[180px] md:h-[240px] md:min-h-[240px] w-full flex items-center justify-center  mx-auto  my-7">
          {isLoading ? (
            <h2 className="text-sm font-semibold">loading...</h2>
          ) : ImageSrc ? (
            <Image
              src={ImageSrc}
              alt="qr"
              width={900}
              height={200}
              className="max-w-full h-full w-auto object-contain"
            />
          ) : null}
          {}
        </div>
        <div className="flex items-center gap-7 w-full">
          <Button
            onClick={() => {
              handleDownload();
            }}
            className={" flex-1 h-[54px]"}
          >
            Print
          </Button>
          <Button
            onClick={close}
            className={" flex-1 h-[54px] text-black bg-grayBack border-none"}
          >
            Cancel
          </Button>
        </div>
      </div>
    </ModalComp>
  );
}

export default ModalBarcode;

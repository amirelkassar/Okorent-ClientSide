"use client";
import { useRef } from "react";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import SignatureCanvas from "react-signature-canvas";
import Button from "./button";
import ModalComp from "./modal-comp";

interface ModalSignProps {
  children?: React.ReactNode;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
}

const ModalSign: React.FC<ModalSignProps> = ({ children, setFile }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const sigCanvas = useRef<SignatureCanvas | null>(null);

  const saveSignature = () => {
    if (!sigCanvas.current) return;

    const signatureDataURL = sigCanvas.current
      .getTrimmedCanvas()
      .toDataURL("image/png");
    const base64Data = signatureDataURL.split(",")[1];

    if (!base64Data) return;

    const byteCharacters = atob(base64Data);
    const byteNumbers = new Uint8Array(byteCharacters.length).map((_, i) =>
      byteCharacters.charCodeAt(i)
    );

    const file = new File([byteNumbers], "signature.png", {
      type: "image/png",
    });

    setFile(file);
    close();
  };

  return (
    <>
      <ModalComp opened={opened} close={close} title={"Select rental period"}>
        <div className="mx-auto max-w-[95%] w-[500px] lg:max-w-[500px] flex flex-col gap-4">
          <Signature signRef={sigCanvas} />
          <div className="flex items-center gap-2 lg:gap-5 ">
            <Button
              onClick={() => {
                sigCanvas.current?.clear();
                close();
              }}
              className={
                "h-12  flex-1 font-Medium text-green bg-white border-2 hover:bg-green duration-300 hover:text-white"
              }
            >
              Cancel
            </Button>
            <Button
              onClick={saveSignature}
              className={"h-12 font-Medium flex-1"}
            >
              Save
            </Button>
          </div>
        </div>
      </ModalComp>
      <div onClick={open} role="button">
        {children}
      </div>
    </>
  );
};

interface SignatureProps {
  signRef: React.RefObject<SignatureCanvas>;
}

const Signature: React.FC<SignatureProps> = ({ signRef }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="w-full max-w-full mx-auto h-[172px] mdl:h-[356px] border-4 border-grayLight rounded-xl">
      <SignatureCanvas
        ref={signRef}
        penColor="black"
        canvasProps={{
          width: isMobile ? 280 : 500,
          height: isMobile ? 172 : 356,
          className: "sigCanvas",
        }}
      />
    </div>
  );
};

export default ModalSign;

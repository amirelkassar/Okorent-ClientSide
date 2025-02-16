import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import React, { useState } from "react";
import { useToken } from "../hooks/use-token";
import ImageModal from "./Image-modal";
import { getDate } from "../lib/utils";
interface MessageProps {
  content?: string;
  created: string;
  document: string;
  role: string;
}
function SupportMessageRow({
  messageDetails,
}: {
  messageDetails: MessageProps;
}) {
  const [opened, { open, close }] = useDisclosure(false);
  const { token } = useToken();
  console.log(token);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const handleImageClick = (imgSrc: string) => {
    setSelectedImage(imgSrc);
    open();
  };
  const closeModal = () => {
    close();
    setSelectedImage(null);
  };

  return (
    <div
      className={`pt-2 ps-4 pb-1 pe-2 rounded-xl max-w-[70%] min-w-[166px] w-fit ${
        messageDetails.role === token.userRole
          ? "bg-green text-white ms-auto"
          : "bg-[#E6E6E6]"
      }`}
    >
      {messageDetails.document ? (
        <div className="flex flex-wrap gap-3 mb-3">
          <Image
            src={messageDetails.document}
            className=" object-contain cursor-pointer bg-transparent max-h-14 max-w-14 w-full h-auto"
            alt="person"
            width={180}
            height={180}
            onClick={() => handleImageClick(messageDetails.document)}
          />
        </div>
      ) : null}

      <h5 className="font-Regular text-sm">{messageDetails.content}</h5>
      <p
        className={`text-[10px] font-Regular  text-end -mt-1 ${
          messageDetails.role === token.userRole
            ? "text-white"
            : "text-[#6A6767]"
        }`}
      >
        {getDate(messageDetails.created).time}
      </p>
      {selectedImage && (
        <ImageModal
          imageUrl={selectedImage}
          opened={opened}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default SupportMessageRow;

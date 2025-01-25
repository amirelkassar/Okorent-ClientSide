// components/ImageModal.tsx
import Image from "next/image";
import ModalComp from "./modal-comp";

interface ImageModalProps {
  imageUrl: string;
  opened: boolean;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  imageUrl,
  opened,
  onClose,
}) => {
  return (
    <ModalComp opened={opened} close={onClose} title="Image Preview">
      <Image
        src={imageUrl}
        width={2000}
        height={2000}
        alt="Full Size"
        className="w-full h-auto rounded-lg"
      />
    </ModalComp>
  );
};

export default ImageModal;

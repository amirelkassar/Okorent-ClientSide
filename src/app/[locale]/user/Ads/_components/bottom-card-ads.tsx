import React from "react";
import Button from "@/src/components/button";
import CancelIcon from "@/src/assets/icons/cancel";
import DeleteIcon from "@/src/assets/icons/delete";
import StopIcon from "@/src/assets/icons/stop";
import ResumeIcon from "@/src/assets/icons/Resume";

interface ButtonProps {
  id?: string | number;
  name?: string;
  onClick?: () => void;
  style?: string; // Additional styles
}

const CancelAds: React.FC<ButtonProps> = ({ onClick, style }) => (
  <Button
    onClick={onClick}
    className={`flex-1 h-8 gap-2 text-black w-fit bg-grayBack border-none hover:shadow-md ${style}`}
  >
    <CancelIcon fill="#0F2A43" />
    <p className="text-sm mdl:text-base text-nowrap">Cancel Ad</p>
  </Button>
);
const DeleteAds: React.FC<ButtonProps> = ({ onClick, style }) => (
  <Button
    onClick={onClick}
    className={`flex-1 h-8 gap-2 text-black bg-grayBack border-none hover:shadow-md ${style}`}
  >
    <DeleteIcon className="w-3 h-auto" />
    <p className="text-red text-sm mdl:text-base text-nowrap">Delete Ad</p>
  </Button>
);
const StopAds: React.FC<ButtonProps> = ({ onClick, style }) => (
  <Button
    onClick={onClick}
    className={`flex-1 h-8 gap-2 text-black bg-grayBack border-none hover:shadow-md ${style}`}
  >
    <StopIcon />
    <p className="text-sm mdl:text-base text-nowrap">Stop Ad</p>
  </Button>
);
const ResumeAds: React.FC<ButtonProps> = ({ onClick, style }) => (
  <Button
    onClick={onClick}
    className={`flex-1 h-8 gap-2 text-black bg-grayBack border-none hover:shadow-md ${style}`}
  >
    <ResumeIcon fill="#0F2A43" />
    <p className="text-sm mdl:text-base text-nowrap">Resume Ad</p>
  </Button>
);

const BottomCardAds = {
  CancelAds,
  DeleteAds,
  StopAds,
  ResumeAds,
};

export default BottomCardAds;

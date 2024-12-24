import React from "react";
import ROUTES from "@/src/routes";
import LinkGreen from "@/src/components/linkGreen";
import Button from "@/src/components/button";

interface ButtonProps {
  id?: string | number;
  name?: string;
  onClick?: () => void;
  style?: string; // Additional styles
}

const ViewDetailsLink: React.FC<ButtonProps> = ({ id, style }) => (
  <LinkGreen
    href={id ? ROUTES.USER.ORDERID(id) : "#"}
    className={`h-10 bg-grayBack flex-1 text-black border-none ${style}`}
  >
    View Details
  </LinkGreen>
);

const MessageLink: React.FC<ButtonProps> = ({ id, name, style }) => (
  <LinkGreen
    href={id ? ROUTES.USER.INBOX + "?chat=" + id : "#"}
    className={`h-10 flex-1 truncate max-w-[180px]  ${style}`}
  >
    {`Message ${name || "User"}`}
  </LinkGreen>
);

const RentAgainButton: React.FC<ButtonProps> = ({ onClick, style }) => (
  <Button onClick={onClick} className={`btn-success h-10 flex-1  ${style}`}>
    Rent again
  </Button>
);

const ReorderButton: React.FC<ButtonProps> = ({ onClick, style }) => (
  <Button onClick={onClick} className={`btn-warning h-10 flex-1  ${style}`}>
    Reorder
  </Button>
);
const ScanForReceiving: React.FC<ButtonProps> = ({ onClick, style }) => (
  <Button onClick={onClick} className={`btn-warning h-10 flex-1  ${style}`}>
    Scan For Receiving
  </Button>
);
const Review: React.FC<ButtonProps> = ({ onClick, style }) => (
  <Button onClick={onClick} className={`btn-warning h-10 flex-1  ${style}`}>
    Review
  </Button>
);
const BottomCardRent = {
  ViewDetailsLink,
  MessageLink,
  RentAgainButton,
  ReorderButton,
  ScanForReceiving,
  Review,
};

export default BottomCardRent;

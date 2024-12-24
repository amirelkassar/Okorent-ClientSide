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
const Accept: React.FC<ButtonProps> = ({ onClick, style }) => (
  <Button onClick={onClick} className={` h-10 flex-1  ${style}`}>
    Accept
  </Button>
);
const Reject: React.FC<ButtonProps> = ({ onClick, style }) => (
  <Button
    onClick={onClick}
    className={`h-10 bg-grayBack flex-1 text-black border-none  ${style}`}
  >
    Reject
  </Button>
);
const ViewDetailsLink: React.FC<ButtonProps> = ({ id, style }) => (
  <LinkGreen
    href={id ? ROUTES.USER.ORDERID(id) : "#"}
    className={`h-10 bg-grayBack flex-1 text-black border-none ${style}`}
  >
    View Details
  </LinkGreen>
);
const OutForDelivery: React.FC<ButtonProps> = ({ onClick, style }) => (
  <Button onClick={onClick} className={` h-10 flex-1  ${style}`}>
    Mark as Out For Delivery
  </Button>
);
const MessageLink: React.FC<ButtonProps> = ({ id, name, style }) => (
  <LinkGreen
    href={id ? ROUTES.USER.INBOX + "?chat=" + id : "#"}
    className={`flex-1  h-10 text-black bg-grayBack border-none ${style}`}
  >
    {`Message ${name || "User"}`}
  </LinkGreen>
);
const CancelBookings: React.FC<ButtonProps> = ({ onClick, style }) => (
  <Button
    onClick={onClick}
    className={`flex-1 h-10 text-black bg-grayBack border-none ${style}`}
  >
    Cancel Bookings
  </Button>
);
const OutForReturn: React.FC<ButtonProps> = ({ onClick, style }) => (
  <Button onClick={onClick} className={` h-10 flex-1  ${style}`}>
   Mark as Out for return
  </Button>
);
const MarkAsCompleted: React.FC<ButtonProps> = ({ onClick, style }) => (
  <Button onClick={onClick} className={` h-10 flex-1  ${style}`}>
    Mark as Completed
  </Button>
);
const Delete: React.FC<ButtonProps> = ({ onClick, style }) => (
  <Button
    onClick={onClick}
    className={`h-10 bg-grayBack flex-1 text-black border-none  ${style}`}
  >
    Delete
  </Button>
);
const RejectReturn: React.FC<ButtonProps> = ({ onClick, style }) => (
  <Button
    onClick={onClick}
    className={`h-10 bg-grayBack flex-1 text-black border-none  ${style}`}
  >
    Reject
  </Button>
);

const Approve: React.FC<ButtonProps> = ({ onClick, style }) => (
  <Button onClick={onClick} className={` h-10 flex-1  ${style}`}>
    Approve
  </Button>
);

const BottomCardRentOut = {
  Accept,
  Reject,
  ViewDetailsLink,
  OutForDelivery,
  MessageLink,
  CancelBookings,
  OutForReturn,
  MarkAsCompleted,
  Delete,
  RejectReturn,
  Approve
};

export default BottomCardRentOut;

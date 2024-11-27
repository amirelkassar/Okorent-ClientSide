import { Radio } from "@mantine/core";
import Image, { StaticImageData } from "next/image";
import React from "react";
import UserCardInfo from "../user-card-info";
interface AssignCardUserProps {
  image: StaticImageData;
  name: string;
  email: string;
}
function AssignCardUser({ image, name, email }: AssignCardUserProps) {
  return (
    <div className="flex items-center gap-3 py-3 border-b border-grayLight/50">
      <Radio.Indicator color="#88BA52" />
      <UserCardInfo image={image} name={name} email={email} />
    </div>
  );
}

export default AssignCardUser;

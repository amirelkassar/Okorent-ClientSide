import Image, { StaticImageData } from "next/image";
import React from "react";
interface AssignCardUserProps {
    image: StaticImageData;
    name: string;
    email: string;
  }
function UserCardInfo({ image, name, email }: AssignCardUserProps) {
  return (
    <div className="flex items-center gap-4">
      <Image
        src={image}
        width={50}
        height={50}
        alt={name}
        className=" size-9 rounded-full object-cover object-top "
      />
      <div>
        <h4 className="text-sm mdl:text-base">{name}</h4>
        <p className="text-grayMedium text-xs mdl:text-sm font-Regular">
          {email}
        </p>
      </div>
    </div>
  );
}

export default UserCardInfo;

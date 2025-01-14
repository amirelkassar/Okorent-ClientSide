import React from "react";
interface MessageProps {
  message?: string;
  name?: string;
  time: string;
  admin?: boolean;
}
function Message({
  message = "--",
  name = "name",
  time = "",
  admin = false,
}: MessageProps) {
  return (
    <div
      className={`pt-2 ps-4 pb-1 pe-2 rounded-xl max-w-[70%] min-w-[166px] w-fit ${
        admin ? "bg-green text-white ms-auto" : "bg-[#E6E6E6]"
      }`}
    >
      {!admin && <h4 className="font-SemiBold text-[10px] mb-2">{name}</h4>}
      <h5 className="font-Regular text-sm">{message}</h5>
      <p
        className={`text-[10px] font-Regular  text-end -mt-1 ${
          admin ? "text-white" : "text-[#6A6767]"
        }`}
      >
        {time}
      </p>
    </div>
  );
}

export default Message;

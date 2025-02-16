import { ActionIcon, CopyButton, Tooltip } from "@mantine/core";
import React from "react";
import TrueGreenIcon from "../assets/icons/trueGreen";
import ShareIcon from "../assets/icons/share";

function CopyLink() {
  return (
    <CopyButton value={window.location.href} timeout={2000}>
      {({ copied, copy }) => (
        <Tooltip label={copied ? "Copied" : "Copy"} withArrow position="right">
          <ActionIcon
            color={copied ? "teal" : "gray"}
            variant="subtle"
            onClick={copy}
            className=" size-9 md:size-11 lg:size-[60px] rounded-full bg-grayBack flex items-center justify-center p-2 md:p-3 duration-300 hover:shadow-md"
          >
            {copied ? (
              <TrueGreenIcon className=" w-4 lg:w-7 h-auto" />
            ) : (
              <ShareIcon className=" w-4 lg:w-6 h-auto" />
            )}
          </ActionIcon>
        </Tooltip>
      )}
    </CopyButton>
  );
}

export default CopyLink;

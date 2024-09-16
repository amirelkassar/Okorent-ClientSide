import React from "react";
import OfflineIcon from "../assets/icons/offline";
import AvailableIcon from "../assets/icons/Available";
interface PropsUserAvailable {
  available: boolean;
}
function UserAvailable({ available }: PropsUserAvailable) {
  return (
    <div className="px-2 rounded-lg border border-green py-1 flex items-center justify-center gap-1">
      {available ? <AvailableIcon /> : <OfflineIcon />}
      {available ? <p className="text-base text-green">Available</p> : <p className="text-xs text-grayMedium">Offline</p>}
    </div>
  );
}

export default UserAvailable;

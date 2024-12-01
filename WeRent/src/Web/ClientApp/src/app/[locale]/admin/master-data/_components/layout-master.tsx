import React from "react";
import SwitchPagesMaster from "./switch-pages-master";
interface LayoutProps {
  children: React.ReactNode;
}
function LayoutMaster({ children }: LayoutProps) {
  return (
    <div>
      <SwitchPagesMaster />
      {children}
    </div>
  );
}

export default LayoutMaster;

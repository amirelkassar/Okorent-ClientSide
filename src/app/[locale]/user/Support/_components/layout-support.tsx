import React from "react";
import SwitchPagesSupport from "./switch-pages-support";
interface LayoutProps {
  children: React.ReactNode;
}
function LayoutSupport({ children }: LayoutProps) {
  return (
    <div>
      <SwitchPagesSupport />
      {children}
    </div>
  );
}

export default LayoutSupport;

import React from "react";
interface ProductAvailableProps {
  numAvailable: number;
}
function ProductAvailable({ numAvailable = 1 }: ProductAvailableProps) {
  return (
    <div className="px-3 py-1 bg-black text-white flex items-center justify-center gap-2 w-fit rounded-lg">
      <span className="block rounded-full size-2 min-w-2 bg-white"></span>
      <p> {numAvailable} Left</p>
    </div>
  );
}

export default ProductAvailable;

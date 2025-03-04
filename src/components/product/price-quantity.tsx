import React from "react";
import Input from "../input";

function PriceQuantity({
  setQuantity,
  quantity,
}: {
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  quantity: number;
}) {
  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
    }
  };
  return (
    <div className="flex items-center justify-between gap-3 flex-wrap px-5 mb-3">
      <h5 className="text-[14px] text-grayMedium font-Regular">Quantity</h5>
      <div className="flex h-8 max-w-[120px] border border-black/35 rounded-lg overflow-hidden">
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={handleChange}
          className="rounded-r-none h-8 w-10 px-1 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          aria-label="Quantity"
        />
        <div className="flex flex-col h-full  border-s border-black/35">
          <button
            className="h-[50%] w-5 text-black font-SemiBold rounded-none bg-[#D9D9D9] flex items-center justify-center border-b"
            onClick={increment}
            aria-label="Increase quantity"
          >
            +
          </button>
          <button
            className="h-[50%] w-5 rounded-none  font-SemiBold  text-grayMedium flex items-center justify-center bg-[#D9D9D9]/30"
            onClick={decrement}
            aria-label="Decrease quantity"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default PriceQuantity;

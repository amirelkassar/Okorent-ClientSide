"use client";
import React, { useState } from "react";
const colors = ["#78BE20", "#002D62", "#007FFF", "#4A5568"];
function ColorProduct() {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };
  return (
    <div>
      <h3 className="text-[24px]  mb-1">Colors</h3>
      <div className="flex items-center gap-2">
        {colors.map((color) => (
          <div
            key={color}
            style={{ background: color }}
            onClick={() => handleColorClick(color)}
            className={`w-[26px] h-[23px] duration-300 hover:shadow-lg  outline outline-1  outline-offset-1 outline-transparent rounded-[4px] cursor-pointer  ${
              selectedColor === color && " shadow-lg  !outline-green"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default ColorProduct;

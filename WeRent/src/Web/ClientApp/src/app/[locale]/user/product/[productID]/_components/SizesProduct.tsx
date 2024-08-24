"use client";
import { Radio } from "@mantine/core";
import React from "react";

function SizesProduct() {
  return (
    <div>
      <h3 className="text-[24px] font-Medium text-  mb-1">Sizes</h3>
      <div>
        <Radio.Group name="favoriteFramework">
          <div className="flex items-center gap-3">
            <Radio
              color="#88BA52"
              value="xl"
              label="XL"
              classNames={{
                icon: "w-3 h-3 left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2",
                label: "ps-1 text-grayMedium text-[16px]",
                radio:' bg-white/30'
              }}
            />
            <Radio
              color="#88BA52"
              value="l"
              label="L"
              classNames={{
                icon: "w-3 h-3 left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2",
                label: "ps-1 text-grayMedium text-[16px]",
                radio:' bg-white/30'
              }}
            />
            <Radio
              color="#88BA52"
              value="m"
              label="M"
              classNames={{
                icon: "w-3 h-3 left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2",
                label: "ps-1 text-grayMedium text-[16px]",
                radio:' bg-white/30'
              }}
            />
            <Radio
              color="#88BA52"
              value="S"
              label="S"
              classNames={{
                icon: "w-3 h-3 left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2",
                label: "ps-1 text-grayMedium text-[16px]",
                radio:' bg-white/30'
              }}
            />
          </div>
        </Radio.Group>
      </div>
    </div>
  );
}

export default SizesProduct;

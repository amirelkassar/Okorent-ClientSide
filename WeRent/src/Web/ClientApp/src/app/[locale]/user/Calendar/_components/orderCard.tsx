import Image from 'next/image'
import React from 'react'

function OrderCard({resource}: any) {
  return (
    <div className="flex items-center justify-between gap-3 flex-wrap py-3">
    <div className="flex items-center gap-3">
      <div className=" size-[50px] min-w-[50px] flex items-center justify-center bg-grayBack rounded-full p-[6px]">
        <Image
          alt="order"
          src={resource.resource._resource.extendedProps.img.src}
          className="h-full w-auto"
          width={20}
          height={40}
        />
      </div>
      <div>
        <h3 className="text-base font-SemiBold">
          {resource.resource._resource.title}
        </h3>
        <p className="text-sm font-Regular text-grayMedium">
          {resource.resource._resource.extendedProps.productType}
        </p>
      </div>
    </div>
    <p className="text-sm font-Regular text-grayMedium">
      {resource.resource._resource.extendedProps.code}
    </p>
  </div>
  )
}

export default OrderCard
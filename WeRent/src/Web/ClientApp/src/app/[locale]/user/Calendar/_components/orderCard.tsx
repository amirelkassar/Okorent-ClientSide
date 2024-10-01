import Image from 'next/image'
import React from 'react'

function OrderCard({resource}: any) {
  return (
    <div className="flex flex-col lgl:flex-row lgl:items-center lgl:justify-between gap-1 lgl:gap-3 px-1 lgl:px-5 flex-wrap py-3">
    <div className="flex items-center gap-3">
      <div className=" size-[50px] min-w-[50px] hidden lgl:flex items-center justify-center bg-grayBack rounded-full p-[6px]">
        <Image
          alt="order"
          src={resource._resource.extendedProps.img.src}
          className="h-full w-auto"
          width={20}
          height={40}
        />
      </div>
      <div className='max-w-full'>
        <h3 className="text-xs lgl:text-base font-SemiBold text-wrap ">
          {resource._resource.title}
        </h3>
        <p className="text-[10px] lgl:text-sm font-Regular text-grayMedium">
          {resource._resource.extendedProps.productType}
        </p>
      </div>
    </div>
    <p className="text-[10px] lgl:text-sm font-Regular text-grayMedium">
      {resource._resource.extendedProps.code}
    </p>
  </div>
  )
}

export default OrderCard
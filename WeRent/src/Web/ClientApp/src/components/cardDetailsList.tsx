import React from 'react'
interface CardDetailsListProps{
    title:string,
    decs:string
}
function CardDetailsList({title,decs}:CardDetailsListProps) {
  return (
    <div className="pb-4 border-b border-grayMedium/40 last-of-type:border-none">
        <h3 className="text-base lg:text-[24px] mb-1">{title}</h3>
        <p className="text-base text-grayMedium max-w-[600px] font-Regular">{decs}</p>
      </div>
  )
}

export default CardDetailsList
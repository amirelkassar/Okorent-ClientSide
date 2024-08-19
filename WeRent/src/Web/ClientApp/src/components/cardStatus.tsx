import React from 'react'
interface CardStatusProps {
    type: 'blue'|'green'|'gray'|'red'
    title:string
}
function CardStatus({type,title}:CardStatusProps) {
  return (
    <p className={`px-3 w-fit text-nowrap rounded-lg flex items-center text-[14px] justify-center h-6 min-h-max bg-grayBack ${type==='blue'?'text-blue':type==='green'?'text-green':type==='red'?'text-red':'text-grayMedium'}`}>
        {title}
    </p>
  )
}

export default CardStatus
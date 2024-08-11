import React from 'react'
interface CardStatusProps {
    type: 'blue'|'green'|'gray'
    title:string
}
function CardStatus({type,title}:CardStatusProps) {
  return (
    <p className={`px-3 w-fit rounded-lg flex items-center justify-center h-6 min-h-max bg-grayBack ${type==='blue'?'text-blue':type==='green'?'text-green':'text-grayMedium'}`}>
        {title}
    </p>
  )
}

export default CardStatus
import { cn } from '@/src/lib/utils'
import React from 'react'
interface CountMessageProps {
  title:string,
  num:number,
  all?:boolean
}
function CountMessage({title,num,all=false}:CountMessageProps) {
  return (
    <p className={cn("flex items-center cursor-pointer duration-300 hover:shadow-md h-10 min-h-max justify-center px-3 rounded-xl bg-grayBack text-center w-fit text-grayMedium",
      all && "text-blue"
    )}>{title} ({num})</p>
  )
}

export default CountMessage
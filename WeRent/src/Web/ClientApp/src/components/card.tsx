import React from 'react'
import { cn } from '../lib/utils'
interface CardProps {
    className?: string,
    children: React.ReactNode
}
function Card({ className='', children }: CardProps) {
  return (
    <div className={cn('bg-white/80 border border-green/30 rounded-xl ', className)}>{children}</div>
  )
}

export default Card
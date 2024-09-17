import React from 'react'
import { Link } from '../navigation'
interface PropsLinkViewAll {
    link:string
}
function LinkViewAll({link}:PropsLinkViewAll) {
  return (
    <Link href={link} className='text-[18px] text-base underline'>View all</Link>
  )
}

export default LinkViewAll
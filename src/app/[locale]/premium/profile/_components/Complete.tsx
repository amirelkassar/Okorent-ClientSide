import Warning from '@/src/assets/icons/Warning'
import React from 'react'

function Complete() {
  return (
    <div className='flex items-center justify-center gap-4 px-7 mb-8 lg:mb-10 bg-green/15 w-full rounded-lg py-2 lg:py-6 min-h-[54px] lg:min-h-20'>
        <Warning className='lg:w-8 h-auto min-w-[18px] w-[18px]'/>
        <p className='text-sm  lg:text-2xl font-Regular text-center'>Complete your account to ensure you can receive bookings and payouts</p>
    </div>
  )
}

export default Complete
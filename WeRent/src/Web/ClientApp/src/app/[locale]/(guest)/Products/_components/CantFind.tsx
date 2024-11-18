import ArrowWhiteIcon from '@/src/assets/icons/arrowWhite'
import Button from '@/src/components/button'
import React from 'react'

function CantFind() {
  return (
    <div className='bg-blue/5 rounded-2xl shadow-md px-5 py-6 w-[330px] mx-auto'>
        <h3 className='text-xl lg:text-start text-center font-SemiBold mb-2'>Can’t find the item you want?</h3>
        <p className='text-base lg:text-start text-center text-grayMedium font-Regular mb-4 lg:mb-10'>Request a listing now</p>
        <Button className={'gap-2 lg:mx-0 mx-auto'}>
            <p className='text-white text-base'>Request a rental</p>
            <ArrowWhiteIcon/>
        </Button>
    </div>
  )
}

export default CantFind
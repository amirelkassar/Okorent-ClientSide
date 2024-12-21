'use client';
import { useMemo } from 'react';
import LinkGreen from './linkGreen';
import { usePathname } from '../navigation';
import ROUTES from '../routes';
import imgNoData from '@/src/assets/images/noData.png'
import Image from 'next/image';
function NoDataYet() {
  const pathname = usePathname() || '';

  const href = useMemo(() => {
    if (pathname.includes('admin')) return ROUTES.ADMIN.DASHBOARD;

    if (pathname.includes('user')) return ROUTES.USER.HOMEPAGE;
  }, [pathname]);

  return (
    <div className='flex-1 h-full'>
      <h2 className='text-xl mdl:text-3xl mb-5 text-center'>No Data Available</h2>
      <Image
        src={imgNoData}
        alt='noData'
        width={319}
        height={272}
        className='max-w-full mx-auto block'
      />
      <p className='text-sm mdl:text-xl text-grayMedium font-Regular text-center mb-3'>
        No data is currently available. Please try again later.
      </p>

    </div>
  );
}

export default NoDataYet;

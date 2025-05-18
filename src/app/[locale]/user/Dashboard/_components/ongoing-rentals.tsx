'use client';
import React from 'react';
import Card from '@/src/components/card';
import { GetDashboardOngoingRentals } from '@/src/hooks/queries/user/home/user-info';
import { QueryWrapper } from '@/src/components/query-wrapper';
import CardRentals from '@/src/components/cardRentals';
import { Link } from '@/src/navigation';
import ROUTES from '@/src/routes';
import ArrowWhiteIcon from '@/src/assets/icons/arrowWhite';
import NoDataYet from '@/src/components/noDataYet';

function OngoingRentals() {
  const { data, isLoading } = GetDashboardOngoingRentals();

  return (
    <Card className="p-4 flex-1 min-w-full lg:min-w-[400px] lg:max-w-[580px]">
      <div className="flex items-center justify-between mb-4 w-full">
        <h2 className="font-Bold text-xl">Ongoing Rentals</h2>
        <Link href={ROUTES.USER.BOOKINGS} className="flex items-center gap-2 text-green">
          View all
          <ArrowWhiteIcon className="w-4 h-auto" fill="#0F2A43" />
        </Link>
      </div>

      <QueryWrapper query={{ data, isLoading }}>
        {({ data }: { data: any }) => {
          if (!data?.data?.length) {
            return <NoDataYet />;
          }

          return (
            <div className="flex flex-col gap-4">
              {data?.data?.map((rental: any) => (
                <CardRentals
                  key={rental.id}
                  data={{
                    title: rental.productName,
                    image: rental.productImage,
                    date: rental.startDate,
                    status: rental.status,
                    endDate: rental.endDate,
                  }}
                />
              ))}
            </div>
          );
        }}
      </QueryWrapper>
    </Card>
  );
}

export default OngoingRentals;

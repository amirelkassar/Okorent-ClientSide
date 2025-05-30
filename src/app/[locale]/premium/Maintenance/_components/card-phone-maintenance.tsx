'use client';
import CardPhone from '@/src/components/card-phone';
import Image from 'next/image';
import React from 'react';
import ActionMenu from './action-menu';
import { Link } from '@/src/navigation';
import ROUTES from '@/src/routes';
import RowCardPhone from '@/src/components/row-card-phone';
import avatarUser from '@/src/assets/images/avatar.png';
import RenderStatus from './render-status';
import { MaintenanceItem } from '@/src/types/maintenance';

interface CardDataProps {
  dataCard: MaintenanceItem;
}

function CardPhoneMaintenance({ dataCard }: CardDataProps) {
  const getStatusFromPeriod = (period: number) => {
    return period === 0 ? 'Not Repaired' : period === 1 ? 'Repaired' : 'Offline';
  };

  return (
    <CardPhone>
      <div className=" absolute top-4 end-3">
        <ActionMenu id={dataCard.id} />
      </div>
      <Link
        href={ROUTES.PREMIUM.MAINTENANCEDETAILS(dataCard.id)}
        className="flex items-center w-fit gap-2 mb-2"
      >
        <Image
          src={avatarUser}
          alt={dataCard.customerId}
          width={50}
          height={50}
          className="w-9 h-9 min-w-9 rounded-[50%] object-cover object-top"
        />
        <h2 className="text-base font-SemiBold">{dataCard.customerId || 'Customer'}</h2>
      </Link>
      <div className="flex flex-col gap-3 w-full ps-8 sm:ps-11">
        <RowCardPhone title="Quantity" info={dataCard.quantity} />
        <RowCardPhone title="Start Date" info={new Date(dataCard.rentalPeriodStart).toLocaleDateString()} />
        <RowCardPhone title="End Date" info={new Date(dataCard.rentalPeriodEnd).toLocaleDateString()} />
        <RowCardPhone title="Remark" info={dataCard.remark} />
        <RowCardPhone title="Assigned To" info={dataCard.assignedTo} />
        <RowCardPhone title="Store Location" info={dataCard.storeLocation} />
        <RowCardPhone 
          title="Status" 
          cell={() => <RenderStatus status={getStatusFromPeriod(dataCard.maintenancePeriod)} />} 
        />
      </div>
    </CardPhone>
  );
}

export default CardPhoneMaintenance;

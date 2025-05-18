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

export type TableData = {
  id: number;
  product: string;
  quantity: number;
  from: string;
  to: string;
  remark: string;
  assignedTo: string;
  stockLocation: string;
  status: string;
};

interface CardDataProps {
  dataCard: TableData;
}

function CardPhoneMaintenance({ dataCard }: CardDataProps) {
  return (
    <CardPhone>
      <div className=" absolute top-4 end-3">
        <ActionMenu id={String(dataCard?.id)} />
      </div>
      <Link
        href={ROUTES.ADMIN.ACCOUNTSDETAILS(dataCard.id)}
        className="flex items-center w-fit gap-2 mb-2"
      >
        <Image
          src={avatarUser}
          alt={dataCard.product}
          width={50}
          height={50}
          className="w-9 h-9 min-w-9 rounded-[50%] object-cover object-top"
        />
        <h2 className="text-base font-SemiBold">{dataCard.product || 'Name'}</h2>
      </Link>
      <div className="flex flex-col gap-3 w-full ps-8 sm:ps-11">
        <RowCardPhone title="Quantity" info={dataCard.quantity} />

        <RowCardPhone title="From" info={dataCard.from} />
        <RowCardPhone title="To" info={dataCard?.to} />
        <RowCardPhone title="Remark" info={dataCard?.remark} />
        <RowCardPhone title="Assigned To" info={dataCard?.assignedTo} />
        <RowCardPhone title="Stock Location" info={dataCard?.stockLocation} />
        <RowCardPhone title="Status" cell={() => <RenderStatus status={dataCard.status} />} />
      </div>
    </CardPhone>
  );
}

export default CardPhoneMaintenance;

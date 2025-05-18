'use client';
import CardPhone from '@/src/components/card-phone';
import Image from 'next/image';
import React from 'react';
import ActionMenu from './action-menu';
import { Link } from '@/src/navigation';
import ROUTES from '@/src/routes';
import RowCardPhone from '@/src/components/row-card-phone';
import avatarUser from '@/src/assets/images/avatar.png';
import { CustomerDTO } from '@/src/api/admin/customers';

interface CardDataProps {
  data: CustomerDTO[];
}

function CardPhoneClients({ data }: CardDataProps) {
  return (
    <>
      {data.map((customer) => (
        <CardPhone key={customer.id}>
          <div className="absolute top-4 end-3">
            <ActionMenu customer={customer} />
          </div>
          <Link
            href={ROUTES.PREMIUM.CLIENTSDETAILS(customer.id!)}
            className="flex items-center w-fit gap-2 mb-2"
          >
            <Image
              src={avatarUser}
              alt={customer.name}
              width={50}
              height={50}
              className="w-9 h-9 min-w-9 rounded-[50%] object-cover object-top"
            />
            <h2 className="text-base font-SemiBold">{customer.name}</h2>
          </Link>
          <div className="flex flex-col gap-3 w-full ps-8 sm:ps-11">
            <RowCardPhone title="Email" info={customer.email} />
            <RowCardPhone title="Phone" info={customer.phoneNumber} />
            <RowCardPhone title="Type" info={customer.customerType} />
            <RowCardPhone
              title="Address"
              info={[customer.address, customer.city, customer.country].filter(Boolean).join(', ')}
            />
          </div>
        </CardPhone>
      ))}
    </>
  );
}

export default CardPhoneClients;

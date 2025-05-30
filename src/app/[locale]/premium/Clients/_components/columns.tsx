'use client';
import { ColumnDef } from '@tanstack/react-table';
import ImgProduct from '@/src/components/img-product';
import ActionMenu from './action-menu';
import placeHolderImgProduct from '@/src/assets/images/placTableProduct.png';
import RenderStatus from './render-status';
import { StaticImageData } from 'next/image';
import { Link } from '@/src/navigation';
import ROUTES from '@/src/routes';
import { CustomerDTO } from '@/src/api/admin/customers';
import { getCustomerTypeDisplay } from '../_utils/customer-mappings';

type CustomerWithId = Required<Pick<CustomerDTO, 'id'>> & CustomerDTO;

export const columns: ColumnDef<CustomerWithId>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ getValue, row }) => {
      const name = getValue<string>();
      return (
        <Link href={ROUTES.PREMIUM.CLIENTSDETAILS(row.original.id!)}>
          <ImgProduct productName={name} src={placeHolderImgProduct} />
        </Link>
      );
    },
  },
  {
    accessorKey: 'email',
    header: 'Email',
    cell: ({ getValue }) => {
      const email = getValue<string>();
      return <p className="text-grayMedium text-[16px]">{email}</p>;
    },
  },
  {
    accessorKey: 'phoneNumber',
    header: 'Phone Number',
    cell: ({ getValue }) => {
      const phone = getValue<string>();
      return <p className="text-grayMedium text-[16px]">{phone}</p>;
    },
  },
  {
    accessorKey: 'customerType',
    header: 'Type',
    cell: ({ getValue }) => {
      const type = getValue<string | number>();
      const displayValue = getCustomerTypeDisplay(type);
      return <p className="font-SemiBold text-[16px]">{displayValue}</p>;
    },
  },
  {
    accessorKey: 'address',
    header: 'Address',
    cell: ({ getValue, row }) => {
      const address = getValue<string>();
      return (
        <p className="text-grayMedium text-[16px]">
          {[address, row.original.city, row.original.country].filter(Boolean).join(', ')}
        </p>
      );
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-3 w-fit">
          <ActionMenu customer={row.original} />
        </div>
      );
    },
  },
];

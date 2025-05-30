'use client';
import { ColumnDef } from '@tanstack/react-table';
import ImgProduct from '@/src/components/img-product';
import ActionMenu from './action-menu';
import placeHolderImgProduct from '@/src/assets/images/placTableProduct.png';
import RenderStatus from './render-status';
export type MaintenanceProps = {
  id: string;
  customerId: string;
  quantity: number;
  storeLocation: string;
  maintenancePeriod: number;
  rentalPeriodStart: string;
  rentalPeriodEnd: string;
  reportedBy: string;
  assignedTo: string;
  maintenanceCost: number;
  remark: string;
  fileLocation: string;
};

export const columns: ColumnDef<MaintenanceProps>[] = [
  {
    accessorKey: 'customerId',
    header: 'Customer',
    cell: ({ getValue, row }) => {
      const name = getValue<string>();
      const id = row.original.id;
      return <ImgProduct productName={name} src={placeHolderImgProduct} />;
    },
  },
  {
    accessorKey: 'quantity',
    header: 'Quantity',
    cell: ({ getValue }) => {
      const quantity = getValue<number>();
      return <p className="text-grayMedium text-[16px]">{quantity || 0}</p>;
    },
  },
  {
    accessorKey: 'rentalPeriodStart',
    header: 'Start Date',
    cell: ({ getValue }) => {
      const date = getValue<string>();
      return <p className="text-grayMedium text-[16px]">{new Date(date).toLocaleDateString()}</p>;
    },
  },
  {
    accessorKey: 'rentalPeriodEnd',
    header: 'End Date',
    cell: ({ getValue }) => {
      const date = getValue<string>();
      return <p className="text-grayMedium text-[16px]">{new Date(date).toLocaleDateString()}</p>;
    },
  },
  {
    accessorKey: 'remark',
    header: 'Remark',
    cell: ({ getValue }) => {
      const remark = getValue<string>();
      return <p className="font-SemiBold text-[16px]">{remark}</p>;
    },
  },
  {
    accessorKey: 'assignedTo',
    header: 'Assigned To',
    cell: ({ getValue }) => {
      const assignedTo = getValue<string>();
      const word = assignedTo
        .split(' ')
        .map((word) => word[0])
        .join('');
      return (
        <div className="flex items-center gap-2">
          <p className="size-10 rounded-full bg-blueLight flex items-center justify-center">
            {word}
          </p>
          <p className="font-SemiBold text-[16px]">{assignedTo}</p>
        </div>
      );
    },
  },
  {
    accessorKey: 'storeLocation',
    header: 'Store Location',
    cell: ({ getValue }) => {
      const location = getValue<string>();
      return <p className="font-SemiBold text-[16px]">{location}</p>;
    },
  },
  {
    accessorKey: 'maintenancePeriod',
    header: 'Status',
    cell: ({ getValue }) => {
      const period = getValue<number>();
      const status = period === 0 ? 'Not Repaired' : period === 1 ? 'Repaired' : 'Offline';
      return <RenderStatus status={status} />;
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const id = row.original.id;
      return (
        <div className="flex items-center gap-3 w-fit">
          <ActionMenu id={id} />
        </div>
      );
    },
  },
];

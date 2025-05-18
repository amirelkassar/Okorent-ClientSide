'use client';
import { ColumnDef } from '@tanstack/react-table';
import ImgProduct from '@/src/components/img-product';
import ActionMenu from './action-menu';
import placeHolderImgProduct from '@/src/assets/images/placTableProduct.png';
import RenderStatus from './render-status';
export type MaintenanceProps = {
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

export const columns: ColumnDef<MaintenanceProps>[] = [
  {
    accessorKey: 'product',
    header: 'Product',
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
    accessorKey: 'from',
    header: 'From',
    cell: ({ getValue }) => {
      const from = getValue<number>();
      return <p className="text-grayMedium text-[16px]">{from}</p>;
    },
  },
  {
    accessorKey: 'to',
    header: 'To',
    cell: ({ getValue }) => {
      const to = getValue<number>();
      return <p className="text-grayMedium text-[16px]">{to || 0}</p>;
    },
  },
  {
    accessorKey: 'remark',
    header: 'Remark',
    cell: ({ getValue }) => {
      const remark = getValue<number>();
      return <p className="font-SemiBold text-[16px]">{remark}</p>;
    },
  },
  {
    accessorKey: 'assignedTo',
    header: 'Assigned To',
    cell: ({ getValue }) => {
      const assignedTo = getValue<string>();
      const word = getValue<string>()
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
    accessorKey: 'stockLocation',
    header: 'Stock Location',
    cell: ({ getValue }) => {
      const stockLocation = getValue<string>();
      return <p className="font-SemiBold text-[16px]">{stockLocation}</p>;
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ getValue }) => {
      const status = getValue<string>();
      return <RenderStatus status={status} />;
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const id = row.original.id;
      return (
        <div className="flex items-center gap-3 w-fit">
          <ActionMenu id={id.toString()} />
        </div>
      );
    },
  },
];

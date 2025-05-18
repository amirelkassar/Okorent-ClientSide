'use client';
import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { DataTable } from '@/src/components/data-table';
import { TableHeader } from '@/src/components/table/table-header';
import ROUTES from '@/src/routes';
import { QueryWrapper } from '@/src/components/query-wrapper';
import { Pagination } from '@/src/components/pagination';
import { GetMyOrderAll, GetMyOrderAllCardView } from '@/src/hooks/queries/user/order';
import CardBooking from './_components/card-booking';

// Define an interface for the booking data
interface Booking {
  id: string;
  orderNumber?: string;
  startDate?: string;
  endDate?: string;
  productImage?: string;
  productName?: string;
  categoryName?: string;
  lessorName?: string;
  duration?: string;
  totalPrice?: number;
  status: number;
  isReviewed?: boolean;
  // Add any other properties that might be in your booking data
}

// Create a wrapper component that adapts the props
const CardBookingWrapper: React.FC<{ dataCard: Booking }> = ({ dataCard }) => {
  return <CardBooking booking={dataCard} />;
};

// Define columns for the bookings table
const columns = [
  {
    accessorKey: 'orderNumber',
    header: 'Order #',
  },
  {
    accessorKey: 'productName',
    header: 'Item',
  },
  {
    accessorKey: 'startDate',
    header: 'Start Date',
  },
  {
    accessorKey: 'endDate',
    header: 'End Date',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'totalPrice',
    header: 'Total',
  },
  {
    accessorKey: 'actions',
    header: 'Actions',
  },
];

const FilterOptions = [
  {
    label: 'All',
    key: 'OrderStatus',
    value: '',
  },
  {
    label: 'Pending',
    key: 'OrderStatus',
    value: '0',
  },
  {
    label: 'Confirmed',
    key: 'OrderStatus',
    value: '1',
  },
  {
    label: 'Completed',
    key: 'OrderStatus',
    value: '2',
  },
  {
    label: 'Cancelled',
    key: 'OrderStatus',
    value: '3',
  },
];

function Page() {
  const router = useRouter();
  const pathname = usePathname();

  // Parse query parameters manually
  const [queryParams, setQueryParams] = useState<Record<string, string>>({});
  const [isCardView, setIsCardView] = useState(false);

  useEffect(() => {
    // Get the current URL query string
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);

    // Build queryParams object - using a different approach to avoid iteration issues
    const paramsObj: Record<string, string> = {};

    // Convert URLSearchParams to an object without using entries()
    params.forEach((value, key) => {
      paramsObj[key] = value;
    });

    setQueryParams(paramsObj);
    setIsCardView(params.get('card') === 'true');
  }, [pathname]);

  // Convert queryParams object back to string
  const queryString = Object.entries(queryParams)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

  // Use the appropriate query based on view type
  const query = isCardView ? GetMyOrderAllCardView(queryString) : GetMyOrderAll(queryString);

  // Handle view toggle
  const toggleView = () => {
    const newParams = { ...queryParams };
    if (isCardView) {
      delete newParams.card;
    } else {
      newParams.card = 'true';
    }

    const newQueryString = Object.entries(newParams)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    router.push(`${pathname}${newQueryString ? `?${newQueryString}` : ''}`);
  };

  return (
    <div>
      <TableHeader>
        <TableHeader.First title="Bookings">
          <div className="flex items-center gap-3">
            <button
              onClick={toggleView}
              className="px-3 hidden lg:flex duration-300 hover:shadow-md w-fit py-2 rounded-xl border border-black items-center justify-center gap-2"
            >
              {isCardView ? 'Table View' : 'Card View'}
            </button>
          </div>
        </TableHeader.First>
        <TableHeader.Last className="lg:!flex !hidden" options={FilterOptions} />
      </TableHeader>

      <QueryWrapper query={query}>
        {(args) => {
          // Cast the data to our Booking[] type
          const data = args.data as Booking[];
          const { totalPages } = args;

          return (
            <div>
              {isCardView ? (
                <div className="flex flex-wrap gap-5 my-4">
                  {data.map((booking: Booking, index: number) => (
                    <CardBooking key={index} booking={booking} />
                  ))}
                </div>
              ) : (
                <>
                  <DataTable Component={CardBookingWrapper} data={data} columns={columns} />
                  <Pagination totalPages={totalPages} />
                </>
              )}
            </div>
          );
        }}
      </QueryWrapper>
    </div>
  );
}

export default Page;

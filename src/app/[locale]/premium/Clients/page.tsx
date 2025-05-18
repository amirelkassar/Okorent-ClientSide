'use client';
import React, { useState } from 'react';
import { DataTable } from '@/src/components/data-table';
import { TableHeader } from '@/src/components/table/table-header';
import { columns } from './_components/columns';
import ROUTES from '@/src/routes';
import PlusIcon from '@/src/assets/icons/plus';
import CardPhoneClients from './_components/card-phone-client';
import { useDisclosure } from '@mantine/hooks';
import Button from '@/src/components/button';
import { useCustomers } from '@/src/hooks/queries/premium/customers';
import { QueryWrapper } from '@/src/components/query-wrapper';
import ModalAddCustomer from './_components/modal-add-customer';
import { CustomerDTO } from '@/src/api/admin/customers';

type CustomerWithId = Required<Pick<CustomerDTO, 'id'>> & CustomerDTO;

function Page() {
  // State for filters and pagination
  const [page, setPage] = useState(1);
  const [limit] = useState(10);

  // Fetch customers with pagination
  const { data, isLoading } = useCustomers({ page, limit });
  const customers = data?.data ?? [];

  // Modal states
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div>
      <TableHeader>
        <TableHeader.First title="Customers">
          <p className="text-sm text-muted-foreground">See all your customers in one place</p>
        </TableHeader.First>
        <TableHeader.Last>
          <Button
            onClick={open}
            className={
              'gap-1 h-10 bg-green px-3 border-4 border-[#a9c788] hover:border-green duration-500 text-medium rounded-xl text-white flex items-center justify-center'
            }
          >
            <PlusIcon className={'w-[16px] h-auto'} />
            <p className="text-base">Add Customer</p>
          </Button>
        </TableHeader.Last>
      </TableHeader>

      <div className="hidden lg:block">
        <QueryWrapper query={{ isLoading, data: customers }}>
          {({ data }) => (
            <DataTable<CustomerWithId, any> columns={columns} data={data as CustomerWithId[]} />
          )}
        </QueryWrapper>
      </div>

      <div className="lg:hidden flex flex-col gap-5">
        <CardPhoneClients data={customers} />
      </div>

      <ModalAddCustomer opened={opened} close={close} />
    </div>
  );
}

export default Page;

'use client';
import PlusIcon from '@/src/assets/icons/plus';
import { DataTable } from '@/src/components/data-table';
import LinkGreen from '@/src/components/linkGreen';
import { TableHeader } from '@/src/components/table/table-header';
import ROUTES from '@/src/routes';
import React from 'react';
import { columns } from './_components/columns';
import CardPhoneMaintenance from './_components/card-phone-maintenance';
import { useMaintenanceList } from '@/src/hooks/queries/maintenance';
import { QueryWrapper } from '@/src/components/query-wrapper';
import { MaintenanceItem } from '@/src/types/maintenance';

interface ApiResponse<T> {
  data: {
    items: T[];
  };
}

const FilterOptions = [
  {
    label: 'Not Repaired',
    key: 'Status',
    value: 'Not Repaired',
  },
  {
    label: 'Repaired',
    key: 'Status',
    value: 'Repaired',
  },
  {
    label: 'Offline',
    key: 'Status',
    value: 'Offline',
  },
];

function Page() {
  const query = useMaintenanceList();

  return (
    <div>
      <TableHeader>
        <TableHeader.First title="">
          <div className="flex items-center gap-3">
            <LinkGreen href={ROUTES.PREMIUM.MAINTENANCEADD} className={'gap-2 h-10'}>
              <PlusIcon className="w-4 h-auto" />
              Add Maintenance
            </LinkGreen>
          </div>
        </TableHeader.First>
        <TableHeader.Last options={FilterOptions} />
      </TableHeader>

      <QueryWrapper query={query}>
        {({ data }) => {
          const response = data as ApiResponse<MaintenanceItem>;
          const maintenanceData = response?.data?.items || [];
          
          return (
            <div>
              <DataTable<MaintenanceItem, unknown>
                Component={CardPhoneMaintenance}
                data={maintenanceData}
                columns={columns}
              />
            </div>
          );
        }}
      </QueryWrapper>
    </div>
  );
}

export default Page;

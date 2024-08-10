import FilterBy from '@/src/components/filterBy'
import React from 'react'

import { UserData } from '@/src/lib/dataUser'
import { columns } from './_components/column'
import { DataTable } from '@/src/components/data-table'

function page() {
  return (
    <div>
      <div className='flex items-center justify-between gap-6 flex-wrap mb-10'>
        <h2 className='text-[32px] font-Bold'>All Accounts</h2>
        <FilterBy/>
      </div>
      <div>
      </div>
      <DataTable data={UserData} columns={columns} />
    </div>
  )
}

export default page
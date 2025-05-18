'use client';
import React from 'react';
import { GetMyProductsByID } from '@/src/hooks/queries/user/lisitings';
import { QueryWrapper } from '@/src/components/query-wrapper';
import PageListingId from '@/src/components/product/page-listing-id';
import HeaderActions from './_components/header-actions';

function page({ params }: any) {
  const query = GetMyProductsByID(params.listID);

  return (
    <>
      {query && (
        <QueryWrapper query={query}>
          {({ data }: { data: any }) => {
            console.log(data);
            return (
              <PageListingId initialData={data} id={params.listID}>
                <HeaderActions id={params.listID} />
              </PageListingId>
            );
          }}
        </QueryWrapper>
      )}
    </>
  );
}

export default page;

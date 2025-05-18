'use client';
import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import TableViewListings from './_components/table-view-listings';
import { GetMyProductsAll } from '@/src/hooks/queries/user/lisitings';
import PageCardsView from './_components/page-cards-view';

function Page() {
  const router = useRouter();
  const pathname = usePathname();

  // Parse query parameters manually
  const [queryParams, setQueryParams] = useState({});
  const [isCardView, setIsCardView] = useState(false);

  useEffect(() => {
    // Get the current URL query string
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);

    // Build queryParams object
    const paramsObj: { [key: string]: string } = {};
    for (const [key, value] of Array.from(params.entries())) {
      paramsObj[key] = value;
    }

    setQueryParams(paramsObj);
    setIsCardView(params.get('card') === 'true');
  }, [pathname]);

  // Convert queryParams object back to string for API calls
  const queryString = Object.entries(queryParams)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

  // Fetch data using the query string
  const query = GetMyProductsAll(queryString);

  return (
    <div>
      {isCardView ? (
        <PageCardsView />
      ) : (
        <>
          <TableViewListings query={query} />
          <div className="block mdl:hidden">
            <PageCardsView />
          </div>
        </>
      )}
    </div>
  );
}

export default Page;

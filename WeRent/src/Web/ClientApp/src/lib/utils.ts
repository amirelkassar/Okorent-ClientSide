import { type ClassValue, clsx } from 'clsx';

import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


// Utility to build a query string from a base URL and parameters
export const buildQuery = (baseUrl: string, params: Record<string, any> = {}): string => {
  const queryString = Object.entries(params)
    .filter(([_, value]) => value !== undefined && value !== null) // Remove undefined or null values
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join('&');

  return queryString ? `${baseUrl}?${queryString}` : baseUrl;
};

// // Interface for query options
// interface QueryOptions {
//   maxCount: number;
// }

// // Function to calculate queries for pagination
// export function getQueries(
//   pageNum: number | '*',
//   search: string = '',
//   queries: QueryOptions
// ): QueryOptions & { skipCount: number; search: string } {
//   if (pageNum === '*') {
//     return {
//       search: '',
//       skipCount: 0,
//       maxCount: 100,
//     };
//   }

//   // Ensure pageNum is at least 1
//   const validPageNum = pageNum < 1 ? 1 : pageNum;

//   // Calculate skipCount based on the valid page number and maxCount
//   const skipCount = (validPageNum - 1) * queries.maxCount;

//   // Return updated queries
//   return {
//     ...queries,
//     skipCount,
//     search,
//   };
// }

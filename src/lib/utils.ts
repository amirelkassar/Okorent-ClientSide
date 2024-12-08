import { type ClassValue, clsx } from 'clsx';
import dayjs from 'dayjs';
import 'dayjs/locale/ar';
import relativeTime from 'dayjs/plugin/relativeTime';
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

export async function blobUrlToFile(blobUrl: string, fileName: string) {
  const response = await fetch(blobUrl); // Fetch the blob data
  const blob = await response.blob(); // Convert the response to a Blob
  const file = new File([blob], fileName, { type: blob.type }); // Create a File object
  console.log(file);

  return file;
}
export function formatDate(date: string | Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

  return new Date(date).toLocaleDateString('en-US', options);
}


export function getDate(date = '', locale = 'en') {
  if (!date)
    return {
      fullYear: '',
      time: '',
      fullYearWithMonthName: '',
      timeFromNow: '',
    };

  const fullYear = dayjs(date)
    .locale(locale)
    .format('YYYY/MM/DD');
  const time = dayjs(date).locale(locale).format('hh:mm A');
  const fullYearWithMonthName = dayjs(date)
    .locale(locale)
    .format('DD MMM, YYYY');
  const fullMonthNameWithDayName = dayjs(date)
    .locale(locale)
    .format('MMM DD');
  dayjs.extend(relativeTime);
  const timeFromNow = dayjs(date).locale(locale).fromNow();

  return {
    fullYear,
    time,
    fullYearWithMonthName,
    timeFromNow,
    fullMonthNameWithDayName
  };
}

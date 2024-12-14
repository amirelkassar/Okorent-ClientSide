import { type ClassValue, clsx } from 'clsx';
import dayjs from 'dayjs';
import 'dayjs/locale/ar';
import relativeTime from 'dayjs/plugin/relativeTime';
import { twMerge } from 'tailwind-merge';
import axios from "axios";
import { useRouter } from '../navigation';
import ROUTES from '../routes';



export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}



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
    .format('YYYY-MM-DD');
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



// Utility to build a query string from a base URL and parameters
export const buildQuery = (baseUrl: string, params: string): string => {
  return params ? `${baseUrl}?${params}` : baseUrl;
};





type PageNum = number | 'all';
type Params = Record<string, any> & any;
type InitialQueries = { maxCount: number } | any;

export const getSkipCountFromPageNum = (
  pageNum: PageNum | undefined,
  maxCount: number
): { skipCount: number; maxCount: number } => {
  if (pageNum === 'all') return { skipCount: 0, maxCount: 100 };
  if (!pageNum) return { skipCount: 0, maxCount };

  // Ensure pageNum is at least 1
  const validPageNum = Math.max(1, pageNum);

  // Calculate skipCount based on the valid page number and maxCount
  const skipCount = (validPageNum - 1) * maxCount;

  return { skipCount, maxCount };
};

export function getQueries({
  params,
  initialQueries,
}: {
  params: Params;
  initialQueries: InitialQueries;
}): Record<string, any> {
  const { maxCount, skipCount } = getSkipCountFromPageNum(
    params.pageNum,
    initialQueries.maxCount
  );

  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(
      ([key, value]) => key !== 'pageNum' && value?.toString().trim() !== ''
    )
  );

  return {
    maxCount,
    skipCount,
    ...filteredParams,
  };
}




export const fetchLocationDetails = async (lat: number, lng: number): Promise<{
  address: string;
  country: string;
  city: string;
  state: string;
}> => {
  const apiKey = "AIzaSyAdseC43NWVi8d4BAjCOFByov7bFdVQr1M";
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    const results = response.data.results;

    if (results.length === 0) {
      throw new Error("No address found for the given coordinates.");
    }

    const addressComponents = results[0].address_components;

    const getComponent = (type: string) =>
      addressComponents.find((component: any) =>
        component.types.includes(type)
      )?.long_name || "";

    const details = {
      address: results[0].formatted_address,
      country: getComponent("country"),
      city: getComponent("locality") || getComponent("administrative_area_level_2"),
      state: getComponent("administrative_area_level_1"),
    };

    return details;
  } catch (error) {
    console.error("Error fetching location details:", error);
    throw error;
  }
};

export const useSearchParams = () => {
  let params = new URLSearchParams(window.location.search);
  if (!params.toString()) {
    return '';
  } else {
    return params.toString();

  }
};
export const useUpdateQueryParams = () => {
  const router = useRouter();
  // Utility: Update the URL query params
  const updateQueryParams = (key: string, values: string[]) => {
    const params = new URLSearchParams(window.location.search);
    console.log(params);
    params.delete(key);
    values.forEach((value) => {
      if (value) params.append(key, value);
    });

    router.replace(`${ROUTES.USER.CATEGORIESPATH}?${params.toString()}`);
  };

  return updateQueryParams;
};
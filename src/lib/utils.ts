import { type ClassValue, clsx } from 'clsx';
import dayjs from 'dayjs';
import 'dayjs/locale/ar';
import relativeTime from 'dayjs/plugin/relativeTime';
import { twMerge } from 'tailwind-merge';
import axios from "axios";
import { usePathname, useRouter } from '../navigation';
import { serialize } from 'object-to-formdata';



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
  const pathName = usePathname();
  console.log(pathName);

  // Utility: Update the URL query params
  const updateQueryParams = (key: string, values: string[]) => {
    const params = new URLSearchParams(window.location.search);
    console.log(params);
    params.delete(key);
    values.forEach((value) => {
      if (value) params.append(key, value);
    });

    router.replace(`${pathName}?${params.toString()}`);
  };

  return updateQueryParams;
};

export const calculateDurationRange = (valueDateFrom: Date | null, valueDateTo: Date | null) => {
  if (valueDateFrom && valueDateTo) {
    const diffTime = Math.abs(valueDateTo.getTime() - valueDateFrom.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert the difference to days
  }
  return 0;
};
export const getFormData = (data: Record<string, any>) => {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if ((key === "ProductImageFiles"||key === "images") && Array.isArray(value)) {
      // Handle ProductImageFiles as files
      value.forEach((file) => {
        if (file instanceof File) {
          formData.append(key, file, file.name); // Append File objects
        } else if (file.path) {
          const mockFile = new File([], file.path); // Create a mock File for path strings
          formData.append(key, mockFile, file.path);
        }
      });
    } else if ((key === "FAQs"||key === "faQs") && Array.isArray(value)) {
      // Handle FAQs as indexed structure
      value.forEach((faq, index) => {
        Object.entries(faq).forEach(([faqKey, faqValue]) => {
          formData.append(`${key}[${index}][${faqKey}]`, String(faqValue));
        });
      });
    } else if (Array.isArray(value)) {
      // Handle other arrays
      value.forEach((item) => {
        formData.append(key, String(item));
      });
    } else if (typeof value === "object" && value !== null) {
      // Handle objects
      Object.entries(value).forEach(([innerKey, innerValue]) => {
        formData.append(`${key}[${innerKey}]`, String(innerValue));
      });
    } else if (value !== undefined && value !== null) {
      // Handle primitive values
      formData.append(key, String(value));
    }
  });

  return formData;
};

export const GetUniqueValues = (data: any[], key: string) => {
  if (!key) return null; // Return null if no key is provided

  const uniqueValues = new Set(data.map((item: any) => item[key]));

  return uniqueValues.size === 1
    ? Array.from(uniqueValues)[0]
    : null;
};


export const GetIdsValues = (data: any[] = []) => {
  if (!Array.isArray(data) || data.length === 0) {
    return null; // Return null if data is not an array or is empty
  }

  const ids = data
    .filter((item) => item && item.id) // Ensure each item and id exist
    .map((item) => item.id); // Extract ids

  return ids.length > 0 ? ids : null; // Return ids if any, else null
};
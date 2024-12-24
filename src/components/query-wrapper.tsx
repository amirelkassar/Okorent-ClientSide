"use client";

import React, { memo, useCallback, useMemo } from "react";
import NoDataYet from "./noDataYet";
import Loading from "./loading";
import Error404 from "./error-404";
import Error403 from "./error-403";
import Error500 from "./error-500";

const MemowizedLoader = memo(Loading);
const MemowizedNotFound404 = memo(Error404);
const MemowizedForbiden403 = memo(Error403);
const MemowizedServerError = memo(Error500);
const MemowizedNoDataYet = memo(NoDataYet);

interface QueryWrapperProps<T> {
  query: any;
  isSearching?: boolean;
  isFiltered?: boolean;
  children?: (args: {
    data: T[] | Record<string, any>;
    pageSize?: number;
    totalCount?: number;
    totalPages?: number;
    isPlaceholderData?: boolean;
    hasData: boolean;
  }) => React.ReactNode;
}

export const QueryWrapper = <T extends unknown>({
  query,
  isSearching = false,
  isFiltered = false,
  children,
}: QueryWrapperProps<T>) => {
  if (!query) throw new Error("No query props provided");

  const items = query.data?.data?.items ?? query.data?.data ?? {};
  const pageSize = query.data?.data?.pageSize;
  const totalCount = query.data?.data?.totalCount;
  const totalPages = query.data?.data?.totalPages;

  const hasData = useMemo(() => {
    if (Array.isArray(items)) return items.length > 0;
    if (typeof items === "object" && items !== null)
      return Object.keys(items).length > 0;
    return false;
  }, [items]);

  const onRetry = useCallback(() => query.refetch?.(), [query]);
console.log(query?.isFetching);

  if (query?.isPaused) return <MemowizedServerError />;
  if (query?.isLoading) return <MemowizedLoader />;
  if (query?.isError && query?.failureReason?.status === 404)
    return <MemowizedNotFound404 />;
  if (query?.isError && query?.failureReason?.status === 403)
    return <MemowizedForbiden403 />;
  if (query?.isError) return <MemowizedServerError />;
  if (!hasData && !isFiltered) return <MemowizedNoDataYet />;
  if (isSearching && !hasData) return <MemowizedNoDataYet />; // Adjust logic if other components are needed.

  if (children) {
    return (
      <>
        {children({
          data: items as T[] | Record<string, any>, // Ensuring type safety with explicit casting
          pageSize,
          totalCount,
          totalPages,
          isPlaceholderData: query.isPlaceholderData,
          hasData,
        })}
      </>
    );
  }

  return null;
};

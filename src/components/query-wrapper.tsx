'use client';
import React, { memo, useCallback, useMemo } from 'react';
import NoDataYet from './noDataYet';
import Loading from './loading';
import Error404 from './error-404';
import Error403 from './error-403';
import Error500 from './error-500';
import { clearToken } from '../lib/token';

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
  // Define all hooks at the top level before any conditional returns
  // Wrap items initialization in useMemo to avoid changing on every render
  const itemsData = useMemo(() => {
    return query?.data?.data?.items ?? query?.data?.data ?? {};
  }, [query?.data?.data?.items, query?.data?.data]);

  const pageSize = query?.data?.data?.pageSize;
  const totalCount = query?.data?.data?.totalCount;
  const totalPages = query?.data?.data?.totalPages;

  // This hook is now safely defined at the top level
  const hasData = useMemo(() => {
    if (Array.isArray(itemsData)) return itemsData.length > 0;
    if (typeof itemsData === 'object' && itemsData !== null)
      return Object.keys(itemsData).length > 0;
    return false;
  }, [itemsData]);

  // This hook is now safely defined at the top level
  const onRetry = useCallback(() => query?.refetch?.(), [query]);

  // Add a safety check - return a fallback component instead of throwing an error
  if (!query) {
    console.warn('No query props provided to QueryWrapper');
    return <MemowizedLoader />;
  }

  console.log(query?.data);

  if (query?.isPaused) return <MemowizedServerError />;
  if (query?.isLoading) return <MemowizedLoader />;
  if (query?.isPending) return <MemowizedLoader />;
  if (query?.isError && query?.failureReason?.status === 404) return <MemowizedNotFound404 />;
  if (query?.isError && query?.failureReason?.status === 403) return <MemowizedForbiden403 />;
  if (query?.isError && query?.failureReason?.status === 401) return clearToken();
  if (query?.isError) return <MemowizedServerError />;
  if (!hasData && !isFiltered) return <MemowizedNoDataYet />;
  if (isSearching && !hasData) return <MemowizedNoDataYet />; // Adjust logic if other components are needed.

  if (children) {
    return (
      <>
        {children({
          data: itemsData as T[] | Record<string, any>, // Ensuring type safety with explicit casting
          pageSize,
          totalCount,
          totalPages,
          isPlaceholderData: query?.isPlaceholderData,
          hasData,
        })}
      </>
    );
  }

  return null;
};

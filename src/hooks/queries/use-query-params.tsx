import { useSearchParams } from 'next/navigation';

export const useQueryParams = () => {
  const searchParams = useSearchParams();

  const PageNumber = searchParams.get('page') || '1';

  const search = searchParams.get('search') || '';
  const Filter = searchParams.get('filter') || '';

  return { PageNumber, search,Filter };
};

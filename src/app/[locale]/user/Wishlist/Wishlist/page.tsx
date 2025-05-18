'use client';
import React from 'react';
import { GetProductsFavoriteAll } from '@/src/hooks/queries/user/home';
import { QueryWrapper } from '@/src/components/query-wrapper';
import CardFavView from './_components/card-fav-view';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/src/api/axios';
import { user } from '@/src/api/user';
import { Toast } from '@/src/components/toast';

// Define query key for favorites
const initialQueryKeyFavorites = 'user.favorites';

// Define Product interface
interface Product {
  id: string;
  // Add other product properties as needed
}

// Define CardFavViewProps interface
interface CardFavViewProps {
  product: Product;
  onRemove?: () => void; // Make it optional to avoid breaking existing usages
}

// Type assertion to inform TypeScript about the expected props
const TypedCardFavView = CardFavView as React.ComponentType<CardFavViewProps>;

// Custom hook to remove from wishlist
const useRemoveFromWishlist = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (productId: string) => {
      const response = await api.delete(`/api/favorites/${productId}`); // Update with actual API endpoint
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [initialQueryKeyFavorites] });
      Toast.Notification('Item removed from wishlist');
    },
    onError: (error) => {
      Toast.Notification('Failed to remove item from wishlist');
      console.log(error);
    },
  });
};

function Page() {
  // Use a fixed query parameter string instead of dynamic params
  const query = GetProductsFavoriteAll('IncludeFavoritesOnly=true');
  const { mutate: removeFromWishlist } = useRemoveFromWishlist();

  const handleRemove = (productId: string) => {
    if (window.confirm('Are you sure you want to remove this item from your wishlist?')) {
      removeFromWishlist(productId);
    }
  };

  return (
    <QueryWrapper query={query}>
      {({
        data,
        totalPages,
        hasData,
      }: {
        data: Product[] | Record<string, any>;
        totalPages?: number;
        hasData: boolean;
      }) => (
        <>
          {!hasData || (Array.isArray(data) && data.length === 0) ? (
            <div className="flex flex-col items-center justify-center py-20">
              <h3 className="text-xl font-medium mb-2">Your wishlist is empty</h3>
              <p className="text-gray-500">Browse products and add items to your wishlist</p>
            </div>
          ) : (
            <div className="flex gap-x-5 justify-center md:justify-start lg:gap-x-10 mb-24 flex-wrap gap-y-4 lg:gap-y-8">
              {Array.isArray(data) &&
                data.map((item: Product) => (
                  <TypedCardFavView
                    product={item}
                    key={item.id}
                    onRemove={() => handleRemove(item.id)}
                  />
                ))}
            </div>
          )}
        </>
      )}
    </QueryWrapper>
  );
}

export default Page;

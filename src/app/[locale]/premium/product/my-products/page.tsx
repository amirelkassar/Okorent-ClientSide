'use client';
import React, { useEffect, useState } from 'react';

const ListingsPage = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch('/api/Product/my-products', {
          credentials: 'include',
        });
        if (!res.ok) throw new Error('Failed to fetch listings');
        const data = await res.json();
        setListings(data?.data || []);
      } catch (err: any) {
        setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    };
    fetchListings();
  }, []);

  if (loading) return <div>Loading listings...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Premium Listings</h1>
      <ul>
        {listings.map((listing: any) => (
          <li key={listing.id}>{listing.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListingsPage;

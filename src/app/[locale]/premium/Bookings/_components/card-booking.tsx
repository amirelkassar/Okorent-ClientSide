'use client';
import React from 'react';
import ROUTES from '@/src/routes';
import Link from 'next/link';
import Button from '@/src/components/button';
import { useCancelOrderMutation } from '@/src/hooks/queries/user/order';
import { Toast } from '@/src/components/toast';

// Define TypeScript interfaces
interface Booking {
  id: string;
  orderNumber?: string;
  startDate?: string;
  endDate?: string;
  productImage?: string;
  productName?: string;
  categoryName?: string;
  lessorName?: string;
  duration?: string;
  totalPrice?: number;
  status: number;
  isReviewed?: boolean;
}

interface CardBookingProps {
  booking: Booking;
}

// Helper function to format dates
const formatDate = (dateString?: string): string => {
  if (!dateString) return 'N/A';
  const date = new Date(dateString);
  return date.toLocaleDateString();
};

// Helper function to format currency
const formatCurrency = (amount?: number): string => {
  if (amount === undefined || amount === null) return 'N/A';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

// Helper function to determine status badge color
const getStatusColor = (status: number): string => {
  const statusMap: Record<number, string> = {
    0: 'bg-yellow-100 text-yellow-800', // Pending
    1: 'bg-blue-100 text-blue-800', // Confirmed
    2: 'bg-green-100 text-green-800', // Completed
    3: 'bg-red-100 text-red-800', // Cancelled
    4: 'bg-purple-100 text-purple-800', // On Hold
  };
  return statusMap[status] || 'bg-gray-100 text-gray-800';
};

// Helper function to get status text
const getStatusText = (status: number): string => {
  const statusMap: Record<number, string> = {
    0: 'Pending',
    1: 'Confirmed',
    2: 'Completed',
    3: 'Cancelled',
    4: 'On Hold',
  };
  return statusMap[status] || 'Unknown';
};

const CardBooking: React.FC<CardBookingProps> = ({ booking }) => {
  // Fix: Use the correct status value for React Query v4
  const cancelOrderMutation = useCancelOrderMutation();
  const cancelOrder = cancelOrderMutation.mutate;

  // Use only 'pending' which is the correct status in React Query v4
  const isCancelling = cancelOrderMutation.status === 'pending';

  // Format dates properly
  const startDate = formatDate(booking.startDate);
  const endDate = formatDate(booking.endDate);

  // Handle cancel booking
  const handleCancel = (): void => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      cancelOrder(
        { orderId: booking.id },
        {
          onSuccess: () => {
            // Use Notification method which appears to be available on Toast
            Toast.Notification('Booking cancelled successfully');
          },
          onError: (error) => {
            // Use Notification method for errors too
            Toast.Notification('Failed to cancel booking');
            console.error('Error details:', error);
          },
        },
      );
    }
  };

  // Handle empty or undefined booking
  if (!booking || Object.keys(booking).length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-md bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="p-4">
        {/* Header with Order Number and Status */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-lg font-semibold">Order #{booking.orderNumber || booking.id}</h3>
            <p className="text-sm text-gray-600">
              {startDate} - {endDate}
            </p>
          </div>
          <span
            className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
              booking.status,
            )}`}
          >
            {getStatusText(booking.status)}
          </span>
        </div>

        {/* Product Details */}
        <div className="mb-4">
          <div className="flex items-center space-x-3">
            {booking.productImage && (
              <img
                src={booking.productImage}
                alt={booking.productName || 'Product image'}
                className="w-16 h-16 object-cover rounded-md"
              />
            )}
            <div>
              <h4 className="font-medium">{booking.productName || 'Product'}</h4>
              {booking.categoryName && (
                <p className="text-sm text-gray-500">{booking.categoryName}</p>
              )}
            </div>
          </div>
        </div>

        {/* Booking Details */}
        <div className="space-y-2 mb-4">
          {booking.lessorName && (
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Owner:</span>
              <span className="text-sm font-medium">{booking.lessorName}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Duration:</span>
            <span className="text-sm font-medium">{booking.duration || 'N/A'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Total Price:</span>
            <span className="text-sm font-medium">{formatCurrency(booking.totalPrice)}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center pt-3 border-t border-gray-100">
          <Link
            href={ROUTES.USER.BOOKINGSDETAILS(booking.id)}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            View Details
          </Link>

          {/* Only show cancel button for pending or confirmed orders */}
          {(booking.status === 0 || booking.status === 1) && (
            <Button
              variant="outline"
              size="sm"
              className="text-red-600 border-red-600 hover:bg-red-50"
              onClick={handleCancel}
              disabled={isCancelling}
            >
              {isCancelling ? 'Cancelling...' : 'Cancel Order'}
            </Button>
          )}

          {/* For completed bookings, show review option if not reviewed */}
          {booking.status === 2 && !booking.isReviewed && (
            <Link
              href={`${ROUTES.USER.BOOKINGSDETAILS(booking.id)}?review=true`}
              className="text-green-600 hover:text-green-800 text-sm font-medium"
            >
              Leave Review
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardBooking;

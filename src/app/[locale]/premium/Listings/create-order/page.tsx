'use client';
// import React, { useState, useEffect } from 'react';
// import { usePathname, useRouter } from 'next/navigation';
// import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
// import { api } from '@/src/api/axios';
// import { user } from '@/src/api/user';
// import { Toast } from '@/src/components/toast';
// import ROUTES from '@/src/routes';

// // Define interfaces
// interface Product {
//   id: string;
//   productName: string;
//   price: number;
//   quantity: number;
//   heroImage?: string;
// }

// interface Customer {
//   id: string;
//   [key: string]: any; // other customer properties
// }

// interface CustomFee {
//   name: string;
//   amount: string;
// }

// interface RentalPeriod {
//   startDate: Date | null;
//   endDate: Date | null;
// }

// interface OrderData {
//   customer: Customer | null;
//   products: Product[];
//   deliveryMethod: 'store' | 'delivery';
//   deliveryAddress: string;
//   orderType: string;
//   rentalPeriod: RentalPeriod;
//   customFees: CustomFee[];
//   discount: string;
//   sendReminderEmail: boolean;
// }

// interface OrderDetails extends OrderData {
//   status?: string;
//   invoice?: any;
//   payments?: any[];
//   notes?: string;
// }

// interface ApiResponse<T> {
//   data: T;
//   message?: string;
// }

// // Define query keys
// const initialQueryKey = 'order.create';
// const initialQueryKeyProducts = 'order.products';

// // Get available products
// const useGetProducts = (search = '') => {
//   return useQuery({
//     queryKey: [initialQueryKeyProducts, search],
//     queryFn: async () => {
//       const response = await api.get(user.product.my_products(`search=${search}&isAvailable=true`));
//       return response.data;
//     },
//   });
// };

// // Get order details if editing an existing order
// const useGetOrderDetails = (orderId) => {
//   return useQuery({
//     queryKey: [initialQueryKey, orderId],
//     queryFn: async () => {
//       if (!orderId) return null;
//       const response = await api.get(user.order.getById(orderId));
//       return response.data;
//     },
//     enabled: !!orderId,
//   });
// };

// // Create a new order
// const useCreateOrderMutation = () => {
//   const queryClient = useQueryClient();
//   const router = useRouter();

//   return useMutation({
//     mutationFn: async (data) => {
//       const response = await api.post(user.order.base, data, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       return response.data;
//     },
//     onSuccess: (res) => {
//       Toast.show({
//         title: 'Success',
//         message: 'Order created successfully',
//         color: 'green',
//       });
//       queryClient.invalidateQueries({ queryKey: [initialQueryKey] });
//       router.push(ROUTES.PREMIUM.BOOKINGS);
//     },
//     onError: (error) => {
//       Toast.show({
//         title: 'Error',
//         message: error?.response?.data?.message || 'Failed to create order',
//         color: 'red',
//       });
//       console.error(error);
//     },
//   });
// };

// function Page() {
//   const router = useRouter();
//   const pathname = usePathname();
//   const queryClient = useQueryClient();

//   // Modal state
//   const [opened, { open, close }] = useDisclosure(false);

//   // Custom fee form
//   const [feeForm, setFeeForm] = useState({
//     name: '',
//     amount: '',
//   });

//   // Parse URL for order ID if editing
//   const [orderId, setOrderId] = useState(null);
//   useEffect(() => {
//     const queryString = window.location.search;
//     const params = new URLSearchParams(queryString);
//     const id = params.get('id');
//     if (id) setOrderId(id);
//   }, [pathname]);

//   // State for the order form
//   const [orderData, setOrderData] = useState<OrderData>({
//     customer: null,
//     deliveryMethod: 'store', // "store" or "delivery"
//     deliveryAddress: '',
//     orderType: '',
//     rentalPeriod: {
//       startDate: null,
//       endDate: null,
//     },
//     discount: '',
//     sendReminderEmail: false,
//     products: [],
//     customFees: [],
//   });

//   // State for product search
//   const [searchQuery, setSearchQuery] = useState('');
//   const { data: productsData, isLoading: isLoadingProducts } = useGetProducts(searchQuery);
//   const { data: orderDetails, isLoading: isLoadingOrder } = useGetOrderDetails(orderId);
//   const { mutate: createOrder, isLoading: isCreatingOrder } = useCreateOrderMutation();

//   // Calculate totals
//   const calculateSubtotal = () => {
//     const productTotal = orderData.products.reduce((total, product) => {
//       return total + product.price * product.quantity;
//     }, 0);

//     const feesTotal = orderData.customFees.reduce((total, fee) => {
//       return total + parseFloat(fee.amount || 0);
//     }, 0);

//     return productTotal + feesTotal;
//   };

//   const calculateDiscount = () => {
//     const discount = parseFloat(orderData.discount) || 0;
//     return (calculateSubtotal() * discount) / 100;
//   };

//   const calculateTax = () => {
//     // Assuming tax is 10% of subtotal after discount
//     return (calculateSubtotal() - calculateDiscount()) * 0.1;
//   };

//   const calculateTotal = () => {
//     return calculateSubtotal() - calculateDiscount() + calculateTax();
//   };

//   const calculateDeposit = () => {
//     // Assuming deposit is 20% of total
//     return calculateTotal() * 0.2;
//   };

//   // Load order details if editing
//   useEffect(() => {
//     if (orderDetails && !isLoadingOrder) {
//       setOrderData({
//         customer: orderDetails.customer,
//         deliveryMethod: orderDetails.deliveryMethod || 'store',
//         deliveryAddress: orderDetails.deliveryAddress || '',
//         orderType: orderDetails.orderType || '',
//         rentalPeriod: {
//           startDate: orderDetails.startDate ? new Date(orderDetails.startDate) : null,
//           endDate: orderDetails.endDate ? new Date(orderDetails.endDate) : null,
//         },
//         discount: orderDetails.discount || '',
//         sendReminderEmail: orderDetails.sendReminderEmail || false,
//         products: orderDetails.products || [],
//         customFees: orderDetails.customFees || [],
//       });
//     }
//   }, [orderDetails, isLoadingOrder]);

//   // Add product to order
//   const handleAddProduct = (product) => {
//     const existingProductIndex = orderData.products.findIndex((p) => p.id === product.id);

//     if (existingProductIndex >= 0) {
//       // If product already exists, update its quantity
//       const updatedProducts = [...orderData.products];
//       updatedProducts[existingProductIndex].quantity += 1;
//       setOrderData({
//         ...orderData,
//         products: updatedProducts,
//       });
//     } else {
//       // Add new product with quantity 1
//       setOrderData({
//         ...orderData,
//         products: [
//           ...orderData.products,
//           {
//             ...product,
//             quantity: 1,
//           },
//         ],
//       });
//     }

//     // Clear search after adding
//     setSearchQuery('');
//   };

//   // Remove product from order
//   const handleRemoveProduct = (productId) => {
//     setOrderData({
//       ...orderData,
//       products: orderData.products.filter((p) => p.id !== productId),
//     });
//   };

//   // Update product quantity
//   const handleUpdateQuantity = (productId, quantity) => {
//     if (quantity < 1) return;

//     setOrderData({
//       ...orderData,
//       products: orderData.products.map((p) => (p.id === productId ? { ...p, quantity } : p)),
//     });
//   };

//   // Add custom fee
//   const handleAddCustomFee = () => {
//     if (!feeForm.name || !feeForm.amount) {
//       Toast.show({
//         title: 'Error',
//         message: 'Please fill in both name and amount',
//         color: 'red',
//       });
//       return;
//     }

//     const newFee = {
//       name: feeForm.name,
//       amount: parseFloat(feeForm.amount),
//     };

//     // Update order data with new custom fee
//     const updatedFees = [...orderData.customFees, newFee];
//     setOrderData({
//       ...orderData,
//       customFees: updatedFees,
//     });

//     // Reset form and close modal
//     setFeeForm({ name: '', amount: '' });
//     close();
//   };

//   // Remove custom fee
//   const handleRemoveCustomFee = (index) => {
//     const updatedFees = [...orderData.customFees];
//     updatedFees.splice(index, 1);
//     setOrderData({
//       ...orderData,
//       customFees: updatedFees,
//     });
//   };

//   // Handle customer selection
//   const handleCustomerSelect = (customer) => {
//     setOrderData({
//       ...orderData,
//       customer,
//     });
//   };

//   // Handle delivery method change
//   const handleDeliveryMethodChange = (method) => {
//     setOrderData({
//       ...orderData,
//       deliveryMethod: method,
//     });
//   };

//   // Handle rental period selection
//   const handleRentalPeriodChange = (period) => {
//     setOrderData({
//       ...orderData,
//       rentalPeriod: period,
//     });
//   };

//   // Handle submit
//   const handleSubmit = () => {
//     if (!orderData.customer) {
//       Toast.show({
//         title: 'Error',
//         message: 'Please select a customer',
//         color: 'red',
//       });
//       return;
//     }

//     if (!orderData.rentalPeriod.startDate || !orderData.rentalPeriod.endDate) {
//       Toast.show({
//         title: 'Error',
//         message: 'Please select a rental period',
//         color: 'red',
//       });
//       return;
//     }

//     if (orderData.products.length === 0) {
//       Toast.show({
//         title: 'Error',
//         message: 'Please add at least one product',
//         color: 'red',
//       });
//       return;
//     }

//     // Format data for API
//     const formData = new FormData();
//     formData.append('customerId', orderData.customer.id);
//     formData.append('deliveryMethod', orderData.deliveryMethod);
//     formData.append('startDate', orderData.rentalPeriod.startDate.toISOString());
//     formData.append('endDate', orderData.rentalPeriod.endDate.toISOString());
//     formData.append('discount', orderData.discount || '0');
//     formData.append('sendReminderEmail', orderData.sendReminderEmail ? '1' : '0');

//     // Add products
//     orderData.products.forEach((product, index) => {
//       formData.append(`products[${index}][id]`, product.id);
//       formData.append(`products[${index}][quantity]`, product.quantity);
//     });

//     // Add custom fees
//     orderData.customFees.forEach((fee, index) => {
//       formData.append(`customFees[${index}][name]`, fee.name);
//       formData.append(`customFees[${index}][amount]`, fee.amount);
//     });

//     if (orderData.deliveryMethod === 'delivery' && orderData.deliveryAddress) {
//       formData.append('deliveryAddress', orderData.deliveryAddress);
//     }

//     if (orderData.orderType) {
//       formData.append('orderType', orderData.orderType);
//     }

//     // If editing, update order
//     if (orderId) {
//       // Call edit API
//     } else {
//       // Create new order
//       createOrder(formData);
//     }
//   };

//   // Prepare data for the table
//   const tableData = orderData.products.map((product) => [
//     <ImgProduct
//       key={`product-img-${product.id}`}
//       src={product?.heroImage || placTableProductImg}
//       productName={product.productName}
//     />,
//     <Counter
//       key={`product-quantity-${product.id}`}
//       quantity={product.quantity}
//       setQuantity={(quantity) => handleUpdateQuantity(product.id, quantity)}
//     />,
//     <PriceOrderTable
//       key={`product-price-${product.id}`}
//       price={
//         product.price /
//         (orderData.rentalPeriod.startDate && orderData.rentalPeriod.endDate
//           ? calculateDurationRange(orderData.rentalPeriod.startDate, orderData.rentalPeriod.endDate)
//           : 1)
//       }
//       days={
//         orderData.rentalPeriod.startDate && orderData.rentalPeriod.endDate
//           ? calculateDurationRange(
//               orderData.rentalPeriod.startDate,
//               orderData.rentalPeriod.endDate,
//             ).toString()
//           : '0'
//       }
//     />,
//     `USD ${(product.price * product.quantity).toFixed(2)}`,
//     <button
//       key={`product-close-${product.id}`}
//       className=""
//       onClick={() => handleRemoveProduct(product.id)}
//     >
//       <CloseIcon className="w-5 h-auto" />
//     </button>,
//   ]);

//   // Log current state for debugging
//   console.log('Current order data:', orderData);

//   return (
//     <div className="mb-section">
//       <div className="flex mb-3 items-center justify-between gap-4">
//         <h2 className="text-base mdl:text-2xl font-SemiBold">Order Information</h2>
//         <StateOrder
//           status={orderDetails?.status || 'pending'}
//           onChange={(status) => {
//             // Handle status change if editing an existing order
//           }}
//         />
//       </div>
//       <div className="flex gap-8 flex-col lgl:flex-row">
//         <div className="flex flex-col gap-4 flex-1">
//           <OrderInfo
//             customer={orderData.customer}
//             onCustomerSelect={handleCustomerSelect}
//             deliveryMethod={orderData.deliveryMethod}
//             onDeliveryMethodChange={handleDeliveryMethodChange}
//             deliveryAddress={orderData.deliveryAddress}
//             onDeliveryAddressChange={(address) =>
//               setOrderData({ ...orderData, deliveryAddress: address })
//             }
//             rentalPeriod={orderData.rentalPeriod}
//             onRentalPeriodChange={handleRentalPeriodChange}
//             orderType={orderData.orderType}
//             onOrderTypeChange={(type) => setOrderData({ ...orderData, orderType: type })}
//             discount={orderData.discount}
//             onDiscountChange={(discount) => setOrderData({ ...orderData, discount: discount })}
//           />
//           <Card className="py-4 px-2 md:px-4">
//             <div className="flex mdl:min-w-[400px] flex-1 flex-wrap gap-y-5 gap-x-8 py-3 mdl:py-4 px-3 mdl:px-4 bg-white rounded-xl border border-green/50">
//               <Input
//                 leftSection={<SearchIcon fill="#6F6B7D" className="w-4 h-auto" />}
//                 placeholder="Search to add products"
//                 className="h-auto w-full"
//                 inputClassName="bg-white rounded-xl w-full h-10 border-green/50"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />

//               {searchQuery && !isLoadingProducts && productsData?.data && (
//                 <div className="w-full bg-white border border-gray-200 rounded-md shadow-sm">
//                   {productsData.data.length === 0 ? (
//                     <div className="p-4 text-center text-gray-500">No products found</div>
//                   ) : (
//                     <ul>
//                       {productsData.data.map((product) => (
//                         <li
//                           key={product.id}
//                           className="p-2 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
//                           onClick={() => handleAddProduct(product)}
//                         >
//                           <div className="flex items-center">
//                             <div className="w-10 h-10 bg-gray-100 rounded-md overflow-hidden mr-3">
//                               <img
//                                 src={product.heroImage || placTableProductImg.src}
//                                 alt={product.productName}
//                                 className="w-full h-full object-cover"
//                               />
//                             </div>
//                             <div>
//                               <h4 className="font-medium">{product.productName}</h4>
//                               <p className="text-sm text-gray-500">${product.price.toFixed(2)}</p>
//                             </div>
//                           </div>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </div>
//               )}

//               {orderData.products.length > 0 ? (
//                 <>
//                   <div className="w-full hidden mdl:block">
//                     <OrderTable data={tableData} />
//                   </div>
//                   <div className="flex flex-col gap-4 w-full mdl:hidden">
//                     {orderData.products.map((product) => (
//                       <OrderCardPhone
//                         key={product.id}
//                         data={product}
//                         cellDelete={() => (
//                           <button
//                             key={`product-close-${product.id}`}
//                             className=""
//                             onClick={() => handleRemoveProduct(product.id)}
//                           >
//                             <CloseIcon className="w-5 h-auto" />
//                           </button>
//                         )}
//                         cellCounter={() => (
//                           <Counter
//                             quantity={product.quantity}
//                             setQuantity={(quantity) => handleUpdateQuantity(product.id, quantity)}
//                           />
//                         )}
//                       />
//                     ))}
//                   </div>
//                 </>
//               ) : (
//                 <div className="w-full p-8 text-center text-gray-500">
//                   Search for products to add to the order
//                 </div>
//               )}

//               {/* Custom Fees List */}
//               {orderData.customFees && orderData.customFees.length > 0 && (
//                 <div className="w-full mt-4">
//                   <h4 className="font-medium mb-2">Custom Fees</h4>
//                   <div className="border border-gray-200 rounded-md overflow-hidden">
//                     {orderData.customFees.map((fee, index) => (
//                       <div
//                         key={index}
//                         className="py-2 px-4 flex justify-between items-center border-b border-gray-200 last:border-b-0"
//                       >
//                         <span>{fee.name}</span>
//                         <div className="flex items-center">
//                           <span className="mr-4">USD {parseFloat(fee.amount).toFixed(2)}</span>
//                           <button
//                             onClick={() => handleRemoveCustomFee(index)}
//                             className="text-red-500"
//                           >
//                             <CloseIcon className="w-4 h-auto" />
//                           </button>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               <Button className={'h-9 px-5 !text-xs !rounded-lg'} onClick={open}>
//                 Add custom fee
//               </Button>

//               <div className="flex flex-col gap-2 md:ms-auto w-fit lg:me-20">
//                 <PriceRow label="Subtotal" value={calculateSubtotal().toFixed(2)} />
//                 <PriceRow label="Discount" value={calculateDiscount().toFixed(2)} />
//                 <PriceRow label="Tax" value={calculateTax().toFixed(2)} />
//                 <PriceRow label="Total" value={calculateTotal().toFixed(2)} />
//                 <PriceRow label="Deposit" value={calculateDeposit().toFixed(2)} />
//               </div>
//             </div>
//           </Card>
//         </div>
//         <Card className="w-full lgl:w-[520px] p-4">
//           <Accordion variant="separated" className="flex flex-col gap-6">
//             <PaymentMethods
//               orderId={orderId}
//               onChange={(paymentMethod) => {
//                 // Handle payment method selection
//               }}
//             />
//             <Quotations
//               orderId={orderId}
//               onChange={(quotation) => {
//                 // Handle quotation selection
//               }}
//             />
//             <Invoice
//               orderId={orderId}
//               total={calculateTotal()}
//               invoiceDetails={orderDetails?.invoice}
//             />
//             <PaymentsReceived orderId={orderId} payments={orderDetails?.payments || []} />
//             <Notes
//               orderId={orderId}
//               notes={orderDetails?.notes || ''}
//               onChange={(notes) => {
//                 // Handle notes update
//               }}
//             />
//           </Accordion>
//           <div className="my-7 ps-2">
//             <Checkbox
//               color="#88BA52"
//               checked={orderData.sendReminderEmail}
//               onChange={(e) =>
//                 setOrderData({ ...orderData, sendReminderEmail: e.currentTarget.checked })
//               }
//               label="Email the customer 1 Day before the return date"
//             />
//           </div>

//           <div className="flex justify-end gap-3 mt-6">
//             <Button
//               variant="outline"
//               className="h-10 px-5"
//               onClick={() => router.push(ROUTES.PREMIUM.BOOKINGS)}
//             >
//               Cancel
//             </Button>
//             <Button className="h-10 px-5" loading={isCreatingOrder} onClick={handleSubmit}>
//               {orderId ? 'Update Order' : 'Create Order'}
//             </Button>
//           </div>
//         </Card>
//       </div>

//       {/* Custom Fee Modal */}
//       <Modal opened={opened} onClose={close} title="Add Custom Fee" centered>
//         <div className="p-2">
//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-1">Fee Name</label>
//             <Input
//               value={feeForm.name}
//               onChange={(e) => setFeeForm({ ...feeForm, name: e.target.value })}
//               placeholder="e.g. Delivery Fee, Late Fee"
//               className="w-full"
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-sm font-medium mb-1">Amount (USD)</label>
//             <Input
//               value={feeForm.amount}
//               onChange={(e) => setFeeForm({ ...feeForm, amount: e.target.value })}
//               placeholder="0.00"
//               type="number"
//               step="0.01"
//               min="0"
//               className="w-full"
//             />
//           </div>
//           <div className="flex justify-end gap-3">
//             <Button variant="outline" onClick={close} className="px-4 py-2">
//               Cancel
//             </Button>
//             <Button onClick={handleAddCustomFee} className="px-4 py-2">
//               Add Fee
//             </Button>
//           </div>
//         </div>
//       </Modal>
//     </div>
//   );
// }

// export default Page;

import React from 'react';

const Page = () => {
  return <div>Page</div>;
};

export default Page;

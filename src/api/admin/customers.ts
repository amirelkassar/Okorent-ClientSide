import { api } from '../axios';

export interface CustomerDTO {
  id?: string;
  name: string;
  email: string;
  phoneNumber: string;
  address?: string;
  country?: string;
  city?: string;
  state?: string;
  reigon?: string;
  zipCode?: string;
  discount?: number;
  customerType: string;
  securityDeposit: string;
  securityDepositValue?: string;
}

export const customersEndpoints = {
  create: '/api/customer/Create Customer',
  update: (id: string) => `/api/customer/${id}`,
  delete: (id: string) => `/api/customer/${id}`,
  getById: (id: string) => `/api/customer/${id}`,
  getAll: '/api/customer',
};

export const customerApi = {
  create: (data: Omit<CustomerDTO, 'id'>) => api.post(customersEndpoints.create, data),
  update: (id: string, data: Partial<CustomerDTO>) => api.put(customersEndpoints.update(id), data),
  delete: (id: string) => api.delete(customersEndpoints.delete(id)),
  getById: (id: string) => api.get(customersEndpoints.getById(id)),
  getAll: (params?: { page?: number; limit?: number }) =>
    api.get(customersEndpoints.getAll, { params }),
};

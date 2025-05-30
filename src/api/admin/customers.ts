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
  customerType: number;
  securityDeposit:number;
  securityDepositValue?: string;
}

export const customersEndpoints = {
  create: '/customer/Create Customer',
  update: (id: string) => `/Customer/${id}`,
  delete: (id: string) => `/Customer/${id}`,
  getById: (id: string) => `/Customer/${id}`,
  getAll: '/Customer',
};

export const customerApi = {
  create: (data: Omit<CustomerDTO, 'id'>) => {
   
    
    return api.post(customersEndpoints.create, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => {
      
      return response;
    }).catch(error => {
     
      throw error;
    });
  },
  update: (id: string, data: Partial<CustomerDTO>) =>
    api.put(customersEndpoints.update(id), data, {
      headers: {
        'Content-Type': 'application/json',
      },
    }),
  delete: (id: string) => api.delete(customersEndpoints.delete(id)),
  getById: (id: string) => {
    console.log('Fetching customer with ID:', id);
    return api.get(customersEndpoints.getById(id))
      .then(response => {
        console.log('Customer API response:', response);
        return response.data;
      })
      .catch(error => {
        console.error('Error fetching customer:', error);
        throw error;
      });
  },
  getAll: (params?: { page?: number; limit?: number }) =>
    api.get(customersEndpoints.getAll, { params }),
};

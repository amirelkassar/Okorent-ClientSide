'use client';
import Button from '@/src/components/button';
import Input from '@/src/components/input';
import InputPhone from '@/src/components/inputPhone';
import ModalComp from '@/src/components/modal-comp';
import SelectInput from '@/src/components/select-input';
import { Accordion } from '@mantine/core';
import React, { useState } from 'react';
import { useForm } from '@mantine/form';
import { Toast } from '@/src/components/toast';
import { CustomerDTO } from '@/src/api/admin/customers';
import { useCreateCustomer } from '@/src/hooks/queries/premium/customers';
import {
  customerTypeFormOptions,
  securityDepositFormOptions,
  getCustomerTypeIndex,
  getSecurityDepositIndex,
} from '../_utils/customer-mappings';

// Form values type allowing string or number for the two select fields
type CustomerFormValues = Omit<CustomerDTO, 'customerType' | 'securityDeposit'> & {
  customerType: string | number;
  securityDeposit: string | number;
};

function ModalAddCustomer({ opened, close }: { opened: boolean; close: () => void }) {
  const { mutate: createCustomer, isPending, error } = useCreateCustomer();

  // Form state using mantine form
  const form = useForm<CustomerFormValues>({
    initialValues: {
      name: '',
      email: '',
      phoneNumber: '',
      address: '',
      country: '',
      city: '',
      state: '',
      reigon: '',
      zipCode: '',
      discount: 0,
      customerType: 'Regular',
      securityDeposit: 'none',
      securityDepositValue: '',
    },
    validate: {
      name: (value) => (!value ? 'Name is required' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      phoneNumber: (value) => (!value ? 'Phone number is required' : null),
      customerType: (value) => (!value ? 'Customer type is required' : null),
    },
  });

  const [addressOpened, setAddressOpened] = useState(false);

  const handleSubmit = (values: CustomerFormValues) => {
    // Use the working Swagger data structure
    const customerData = {
      name: values.name?.trim() || '',
      email: values.email?.trim() || '',
      phoneNumber: values.phoneNumber?.trim() || '',
      address: values.address?.trim() || '',
      country: values.country?.trim() || '',
      city: values.city?.trim() || '',
      state: values.state?.trim() || '',
      reigon: values.reigon?.trim() || '',
      zipCode: values.zipCode?.trim() || '',
      discount: Number(values.discount) || 0,
      customerType: getCustomerTypeIndex(values.customerType || 'Regular'),
      securityDeposit: getSecurityDepositIndex(values.securityDeposit || 'none'),
      securityDepositValue: values.securityDepositValue?.trim() || '',
    };

    createCustomer(customerData, {
      onSuccess: (response) => {
        Toast.Notification('Customer created successfully');
        close();
        form.reset();
      },
      onError: (error: any) => {
        let errorMessage = 'Failed to create customer';
        if (error.response?.data) {
          if (typeof error.response.data === 'string') {
            const errorText = error.response.data;
            if (errorText.includes('ArgumentNullException')) {
              errorMessage = 'Server received null data. Please check all required fields.';
            } else if (errorText.includes('ValidationException')) {
              errorMessage = 'Invalid data format. Please check your input.';
            } else if (errorText.includes('email')) {
              errorMessage = 'Invalid email format.';
            } else if (errorText.includes('phone')) {
              errorMessage = 'Invalid phone number format.';
            } else {
              errorMessage = 'Server error. Please try again.';
            }
          } else if (error.response.data.message) {
            errorMessage = error.response.data.message;
          }
        } else if (error.message) {
          errorMessage = error.message;
        }
        
        Toast.Notification(errorMessage);
      },
    });
  };

  // Simple direct submit using working data structure
  const handleDirectAddCustomer = () => {
    // Get current form values
    const values = form.values;
    
    // Basic validation
    if (!values.name?.trim()) {
      Toast.Notification('Name is required');
      return;
    }
    if (!values.email?.trim()) {
      Toast.Notification('Email is required');
      return;
    }
    if (!values.phoneNumber?.trim()) {
      Toast.Notification('Phone number is required');
      return;
    }
    
    const customerData = {
      name: values.name.trim(),
      email: values.email.trim(),
      phoneNumber: values.phoneNumber.trim(),
      address: values.address?.trim() || '',
      country: values.country?.trim() || '',
      city: values.city?.trim() || '',
      state: values.state?.trim() || '',
      reigon: values.reigon?.trim() || '',
      zipCode: values.zipCode?.trim() || '',
      discount: Number(values.discount) || 0,
      customerType: getCustomerTypeIndex(values.customerType || 'Regular'),
      securityDeposit: getSecurityDepositIndex(values.securityDeposit || 'none'),
      securityDepositValue: values.securityDepositValue?.trim() || '',
    };

    createCustomer(customerData, {
      onSuccess: (response) => {
        Toast.Notification('Customer created successfully');
        close();
        form.reset();
      },
      onError: (error: any) => {
        Toast.Notification('Failed to create customer: ' + (error?.response?.status || error?.message));
      },
    });
  };

  return (
    <ModalComp opened={opened} close={close} title="Add New Customer">
      <form onSubmit={form.onSubmit(handleSubmit)} className="flex flex-col gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Name"
            required
            placeholder="Enter customer name"
            {...form.getInputProps('name')}
          />
          <Input
            label="Email"
            type="email"
            required
            placeholder="Enter email address"
            {...form.getInputProps('email')}
          />

          <InputPhone
            value={form.values.phoneNumber}
            onChange={(value) => form.setFieldValue('phoneNumber', value)}
            error={form.errors.phoneNumber}
          />

          <SelectInput
            label="Customer Type"
            required
            data={customerTypeFormOptions}
            {...form.getInputProps('customerType')}
          />

          <SelectInput
            label="Security Deposit"
            data={securityDepositFormOptions}
            {...form.getInputProps('securityDeposit')}
          />

          {`${form.values.securityDeposit}` !== 'none' && (
            <Input
              label="Security Deposit Value"
              placeholder="Enter amount"
              {...form.getInputProps('securityDepositValue')}
            />
          )}

          <Input
            label="Discount (%)"
            type="number"
            min={0}
            max={100}
            placeholder="0"
            {...form.getInputProps('discount')}
          />
        </div>

        <Accordion
          variant="contained"
          value={addressOpened ? 'address' : ''}
          onChange={() => setAddressOpened(!addressOpened)}
        >
          <Accordion.Item value="address">
            <Accordion.Control>Address Details (Optional)</Accordion.Control>
            <Accordion.Panel>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <Input
                  label="Address"
                  placeholder="Street address"
                  {...form.getInputProps('address')}
                />
                <Input label="City" placeholder="City" {...form.getInputProps('city')} />
                <Input label="Country" placeholder="Country" {...form.getInputProps('country')} />
                <Input
                  label="State/Province"
                  placeholder="State/Province"
                  {...form.getInputProps('state')}
                />
                <Input label="Region" placeholder="Region" {...form.getInputProps('reigon')} />
                <Input
                  label="ZIP Code"
                  placeholder="ZIP/Postal code"
                  {...form.getInputProps('zipCode')}
                />
              </div>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>

        {error && (
          <div className="text-red-500 text-sm">
            Error: {error?.message || 'Something went wrong'}
          </div>
        )}

        <div className="flex justify-end gap-3 mt-4">
          <Button
            type="button"
            onClick={close}
            className="bg-grayBack text-blue border-grayBack hover:border-grayBack hover:shadow-md"
          >
            Cancel
          </Button>
          <Button
            type="button"
            onClick={handleDirectAddCustomer}
            loading={isPending}
            className="bg-green text-white hover:bg-green/90"
          >
            {isPending ? 'Adding Customer...' : 'Add Customer'}
          </Button>
        </div>
      </form>
    </ModalComp>
  );
}

export default ModalAddCustomer;

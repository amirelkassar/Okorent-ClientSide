'use client';
import Button from '@/src/components/button';
import Input from '@/src/components/input';
import InputPhone from '@/src/components/inputPhone';
import ModalComp from '@/src/components/modal-comp';
import SelectInput from '@/src/components/select-input';
import { Accordion } from '@mantine/core';
import React, { useState } from 'react';
import { useForm } from '@mantine/form';
import { CustomerDTO } from '@/src/api/admin/customers';
import { useUpdateCustomer } from '@/src/hooks/queries/premium/customers';
import {
  customerTypeFormOptions,
  securityDepositFormOptions,
  getCustomerTypeIndex,
  getSecurityDepositIndex,
  getCustomerTypeDisplay,
  getSecurityDepositDisplay,
} from '../_utils/customer-mappings';

interface ModalEditCustomerProps {
  opened: boolean;
  close: () => void;
  customer: CustomerDTO;
}

// A helper type for the form where customerType and securityDeposit can be string (display) or number (index)
type CustomerFormValues = Omit<CustomerDTO, 'customerType' | 'securityDeposit'> & {
  customerType: string | number;
  securityDeposit: string | number;
};

export default function ModalEditCustomer({ opened, close, customer }: ModalEditCustomerProps) {
  const { mutate: updateCustomer, isPending } = useUpdateCustomer();
  const [addressOpened, setAddressOpened] = useState(false);

  // Initialize form with customer data
  const form = useForm<CustomerFormValues>({
    initialValues: {
      id: customer?.id || '',
      name: customer?.name || '',
      email: customer?.email || '',
      phoneNumber: customer?.phoneNumber || '',
      address: customer?.address || '',
      country: customer?.country || '',
      city: customer?.city || '',
      state: customer?.state || '',
      reigon: customer?.reigon || '',
      zipCode: customer?.zipCode || '',
      discount: customer?.discount || 0,
      customerType: customer?.customerType ? getCustomerTypeDisplay(customer.customerType as any) : '',
      securityDeposit: customer?.securityDeposit ? getSecurityDepositDisplay(customer.securityDeposit as any) : '',
      securityDepositValue: customer?.securityDepositValue || '',
    },
    validate: {
      name: (value) => (!value ? 'Name is required' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      phoneNumber: (value) => (!value ? 'Phone number is required' : null),
    },
  });

  const handleSubmit = (values: CustomerFormValues) => {
    if (values.id) {
      const payload: Partial<CustomerDTO> = {
        id: values.id,
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
        customerType: getCustomerTypeIndex(values.customerType as any),
        securityDeposit: getSecurityDepositIndex(values.securityDeposit as any),
        securityDepositValue: values.securityDepositValue?.trim() || '',
      };

      updateCustomer(
        { id: values.id, data: payload },
        {
          onSuccess: () => {
            close();
            form.reset();
          },
        },
      );
    }
  };

  // Direct update triggered by button, bypassing form.onSubmit (for reliability)
  const handleDirectUpdateCustomer = () => {
    const values = form.values;
    if (!values.id) return;

    const payload: Partial<CustomerDTO> = {
      id: values.id,
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
      customerType: getCustomerTypeIndex(values.customerType as any),
      securityDeposit: getSecurityDepositIndex(values.securityDeposit as any),
      securityDepositValue: values.securityDepositValue?.trim() || '',
    };

    updateCustomer(
      { id: values.id, data: payload },
      {
        onSuccess: () => {
          close();
          form.reset();
        },
      },
    );
  };

  return (
    <ModalComp opened={opened} close={close} title="Edit Customer">
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
            {...form.getInputProps('discount')}
          />
        </div>

        <Accordion
          variant="contained"
          value={addressOpened ? 'address' : ''}
          onChange={() => setAddressOpened(!addressOpened)}
        >
          <Accordion.Item value="address">
            <Accordion.Control>Address Details</Accordion.Control>
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

        <div className="flex justify-end gap-3 mt-4">
          <Button
            onClick={close}
            className="bg-grayBack text-blue border-grayBack hover:border-grayBack hover:shadow-md"
          >
            Cancel
          </Button>
          <Button type="button" onClick={handleDirectUpdateCustomer} loading={isPending}>
            {isPending ? 'Saving...' : 'Save Changes'}
          </Button>
        </div>
      </form>
    </ModalComp>
  );
}

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

// Customer types
const customerTypes = ['Individual', 'Business', 'Organization', 'VIP', 'Regular'];

// Security deposit options
const OptionQuotation = [
  {
    value: 'none',
    label: 'No Deposit',
  },
  {
    value: 'default',
    label: 'Default item security deposit',
  },
  {
    value: 'extra',
    label: 'Extra Security Deposit',
  },
];

interface ModalEditCustomerProps {
  opened: boolean;
  close: () => void;
  customer: CustomerDTO;
}

export default function ModalEditCustomer({ opened, close, customer }: ModalEditCustomerProps) {
  const { mutate: updateCustomer, isPending } = useUpdateCustomer();
  const [addressOpened, setAddressOpened] = useState(false);

  // Initialize form with customer data
  const form = useForm<CustomerDTO>({
    initialValues: {
      id: customer.id,
      name: customer.name,
      email: customer.email,
      phoneNumber: customer.phoneNumber,
      address: customer.address || '',
      country: customer.country || '',
      city: customer.city || '',
      state: customer.state || '',
      reigon: customer.reigon || '',
      zipCode: customer.zipCode || '',
      discount: customer.discount || 0,
      customerType: customer.customerType || 'Regular',
      securityDeposit: customer.securityDeposit || 'none',
      securityDepositValue: customer.securityDepositValue || '',
    },
    validate: {
      name: (value) => (!value ? 'Name is required' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      phoneNumber: (value) => (!value ? 'Phone number is required' : null),
    },
  });

  const handleSubmit = (values: CustomerDTO) => {
    if (values.id) {
      updateCustomer(
        { id: values.id, data: values },
        {
          onSuccess: () => {
            close();
            form.reset();
          },
        },
      );
    }
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
            data={customerTypes.map((type) => ({ value: type, label: type }))}
            {...form.getInputProps('customerType')}
          />

          <SelectInput
            label="Security Deposit"
            data={OptionQuotation}
            {...form.getInputProps('securityDeposit')}
          />

          {form.values.securityDeposit !== 'none' && (
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
          <Button type="submit" loading={isPending}>
            Save Changes
          </Button>
        </div>
      </form>
    </ModalComp>
  );
}

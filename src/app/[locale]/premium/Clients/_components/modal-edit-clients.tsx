'use client';
import Button from '@/src/components/button';
import Input from '@/src/components/input';
import ModalComp from '@/src/components/modal-comp';
import SelectInput from '@/src/components/select-input';
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { api } from '@/src/api/axios';
import { user } from '@/src/api/user';
import { Toast } from '@/src/components/toast';

// Default security deposit options
const dataNotes = [
  { value: 'default', label: 'Default Product Deposit' },
  { value: 'none', label: 'No Security Deposit' },
  { value: 'extra', label: 'Added to the product deposit' },
];

// Default tax profiles if API call fails
const DEFAULT_TAX_PROFILES = ['Default', 'None', 'Custom'];

// Get tax profiles from API - Using a hardcoded or alternate endpoint
const useGetTaxProfiles = () => {
  return useQuery({
    queryKey: ['taxProfiles'],
    queryFn: async () => {
      try {
        const response = await api.get('/api/settings/tax-profiles');
        return response.data?.profiles || DEFAULT_TAX_PROFILES;
      } catch (error) {
        console.error('Failed to fetch tax profiles:', error);
        return DEFAULT_TAX_PROFILES;
      }
    },
  });
};

function ModalEditClients({
  opened,
  close,
  client,
  clientDetails,
  onSave,
}: {
  opened: any;
  close: any;
  client: any;
  clientDetails: any;
  onSave: (data: any) => void;
}) {
  // Fetch tax profiles
  const { data: taxProfiles = DEFAULT_TAX_PROFILES } = useGetTaxProfiles();

  // Form state
  const [formData, setFormData] = useState({
    securityDeposit: 'default',
    discount: '',
    taxProfile: '',
  });

  // Load client details when they change
  useEffect(() => {
    if (clientDetails) {
      setFormData({
        securityDeposit: clientDetails.securityDeposit || 'default',
        discount: clientDetails.discount?.toString() || '',
        taxProfile: clientDetails.taxProfile || '',
      });
    } else if (client) {
      // Fallback to client data if clientDetails not available
      setFormData({
        securityDeposit: client.securityDeposit || 'default',
        discount: client.discount?.toString() || '',
        taxProfile: client.taxProfile || '',
      });
    }
  }, [client, clientDetails, opened]);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle security deposit selection
  const handleSecurityDepositChange = (value: string | null, option: any) => {
    setFormData({
      ...formData,
      securityDeposit: value || 'default',
    });
  };

  // Handle tax profile selection
  const handleTaxProfileChange = (value: string | null) => {
    setFormData({
      ...formData,
      taxProfile: value || '',
    });
  };

  // Handle form submission
  const handleSubmit = () => {
    // Validate discount if provided
    if (
      formData.discount &&
      (isNaN(parseFloat(formData.discount)) ||
        parseFloat(formData.discount) < 0 ||
        parseFloat(formData.discount) > 100)
    ) {
      // Use Notification instead of error
      Toast.Notification('Discount must be a number between 0 and 100');
      return;
    }

    // Call the onSave function with the form data
    onSave(formData);
  };

  return (
    <ModalComp opened={opened} close={close} title={'Edit customer'}>
      <div className="lg:w-[580px] w-full flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-4">
          <SelectInput
            data={dataNotes}
            label="Security Deposit"
            placeholder="Select deposit type"
            inputClassName="!h-16 !border-green"
            className="h-auto flex-1"
            value={formData.securityDeposit}
            onChange={handleSecurityDepositChange}
          />
          <Input
            label={'Discount'}
            placeholder="% Write discount you want to apply"
            onChange={handleChange}
            inputClassName="h-16 bg-white border-green rounded-xl"
            className="flex-1"
            name="discount"
            value={formData.discount}
            type="number"
            min="0"
            max="100"
            leftSection={<span className="text-base">%</span>}
          />
        </div>
        <SelectInput
          data={taxProfiles.map((profile: any) =>
            typeof profile === 'string' ? profile : profile.value || profile,
          )}
          label="Tax Profile"
          placeholder="Select tax profile"
          inputClassName="!h-16 !border-green"
          className="h-auto flex-1"
          value={formData.taxProfile}
          onChange={handleTaxProfileChange}
        />
        <div className="flex items-center gap-7 w-full mt-8">
          <Button onClick={close} className={' flex-1 h-[54px] text-black bg-grayBack border-none'}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} className={' flex-1 h-[54px]'}>
            Confirm
          </Button>
        </div>
      </div>
    </ModalComp>
  );
}

export default ModalEditClients;

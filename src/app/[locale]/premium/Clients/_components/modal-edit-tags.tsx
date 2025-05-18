'use client';
import Button from '@/src/components/button';
import Input from '@/src/components/input';
import ModalComp from '@/src/components/modal-comp';
import SelectInput from '@/src/components/select-input';
import { Radio } from '@mantine/core';
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { api } from '@/src/api/axios';
import { user } from '@/src/api/user';
import { Toast } from '@/src/components/toast';

// Tag modification options
const OptionReturn = [
  {
    value: 'add',
    label: 'I want to add the following tags',
  },
  {
    value: 'replace',
    label: 'I want to replace tags with',
  },
  {
    value: 'remove',
    label: 'I want to remove the following tags',
  },
  {
    value: 'removeAll',
    label: 'I want to remove all tags',
  },
];

// // Get all available tags from API
// const useGetAvailableTags = () => {
//   return useQuery({
//     queryKey: ['availableTags'],
//     queryFn: async () => {
//       try {
//         const response = await api.get(user.tags);
//         return response.data?.tags || [];
//       } catch (error) {
//         console.error('Failed to fetch available tags:', error);
//         return [];
//       }
//     },
//   });
// };

function ModalEditTags({
  opened,
  close,
  client,
  onSave,
  availableTags = [],
}: {
  opened: any;
  close: any;
  client: any;
  onSave: (data: any) => void;
  availableTags?: any[];
}) {
  // Fetch available tags if not provided
  const tags = availableTags.length > 0 ? availableTags : [];

  // Format tags for select input
  const formattedTags = tags.map((tag: any) => ({
    value: typeof tag === 'string' ? tag : tag.id || tag.value,
    label: typeof tag === 'string' ? tag : tag.name || tag.label,
  }));

  // Form state
  const [formData, setFormData] = useState({
    action: 'add',
    selectedTag: '',
    newTag: '',
  });

  // Reset form when modal closes or client changes
  useEffect(() => {
    if (!opened) {
      setFormData({
        action: 'add',
        selectedTag: '',
        newTag: '',
      });
    }
  }, [opened, client]);

  // Handle action selection
  const handleActionChange = (value: any) => {
    setFormData({
      ...formData,
      action: value,
    });
  };

  // Handle tag selection
  const handleTagChange = (value: any) => {
    setFormData({
      ...formData,
      selectedTag: value,
    });
  };

  // Handle new tag input
  const handleNewTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      newTag: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = () => {
    // For "removeAll" action, no tag selection is needed
    if (formData.action === 'removeAll') {
      onSave({
        action: formData.action,
        tags: [],
      });
      return;
    }

    // For other actions, validate tag selection or new tag
    const tag = formData.selectedTag || formData.newTag;
    if (!tag) {
      Toast.Notification('Please select an existing tag or enter a new one');
      return;
    }

    // Call the onSave function with the form data
    onSave({
      action: formData.action,
      tags: [tag],
    });
  };

  return (
    <ModalComp opened={opened} close={close} title={'Edit tags customers'}>
      <div className="lg:w-[580px] w-full flex flex-col gap-4">
        <Radio.Group name="OptionReturn" value={formData.action} onChange={handleActionChange}>
          <div className="flex flex-col gap-3 mb-8">
            {OptionReturn.map((item, index) => {
              return (
                <Radio
                  value={item.value}
                  label={item.label}
                  key={index}
                  color="#88BA52"
                  classNames={{
                    icon: 'w-3 h-3 left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2',
                  }}
                  className="pb-3"
                />
              );
            })}
          </div>
        </Radio.Group>

        {formData.action !== 'removeAll' && (
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <SelectInput
              data={formattedTags}
              label="Available Tags"
              placeholder="Select Tag"
              inputClassName="!h-16 !border-green"
              className="h-auto flex-1"
              value={formData.selectedTag}
              onChange={handleTagChange}
              disabled={formData.action === 'removeAll'}
            />
            <Input
              label={'New Tag'}
              placeholder="Create New Tag"
              onChange={handleNewTagChange}
              inputClassName="h-16 bg-white border-green rounded-xl"
              className="flex-1"
              value={formData.newTag}
              disabled={formData.action === 'removeAll' || formData.selectedTag !== ''}
            />
          </div>
        )}

        <div className="flex items-center gap-7 w-full">
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

export default ModalEditTags;

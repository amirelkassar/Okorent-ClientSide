'use client';
import React from 'react';
import { Menu, Modal } from '@mantine/core';
import { CustomerDTO } from '@/src/api/admin/customers';
import EditIcon from '@/src/assets/icons/edit';
import DeleteIcon from '@/src/assets/icons/delete';
import { useDeleteCustomer } from '@/src/hooks/queries/premium/customers';
import { Toast } from '@/src/components/toast';
import { useDisclosure } from '@mantine/hooks';
import Button from '@/src/components/button';
import ModalEditCustomer from './modal-edit-customer';

function ActionMenu({ customer }: { customer: CustomerDTO }) {
  const { mutate: deleteCustomer } = useDeleteCustomer();
  const [deleteModalOpened, { open: openDelete, close: closeDelete }] = useDisclosure(false);
  const [editModalOpened, { open: openEdit, close: closeEdit }] = useDisclosure(false);

  const handleDelete = () => {
    if (customer.id) {
      deleteCustomer(customer.id);
      closeDelete();
    } else {
      // Use the Notification method instead of the non-existent error method
      Toast.Notification('Customer ID not found');
    }
  };

  return (
    <>
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <button className="w-8 h-8 rounded-lg duration-300 hover:bg-green/10 flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item
            leftSection={<EditIcon className="w-4 h-4" />}
            component="button"
            onClick={openEdit}
          >
            Edit
          </Menu.Item>
          <Menu.Item
            leftSection={<DeleteIcon className="w-4 h-4" />}
            color="red"
            component="button"
            onClick={openDelete}
          >
            Delete
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
      {/* Delete Confirmation Modal */}
      <Modal opened={deleteModalOpened} onClose={closeDelete} title="Delete Customer" centered>
        <p className="mb-6">
          Are you sure you want to delete this customer? This action cannot be undone.
        </p>
        <div className="flex justify-end gap-3">
          <Button
            onClick={closeDelete}
            className="bg-grayBack text-blue border-grayBack hover:border-grayBack hover:shadow-md"
          >
            Cancel
          </Button>
          <Button onClick={handleDelete} color="red">
            Delete
          </Button>
        </div>
      </Modal>
      {/* Edit Customer Modal */}
      <ModalEditCustomer opened={editModalOpened} close={closeEdit} customer={customer} />
    </>
  );
}

export default ActionMenu;

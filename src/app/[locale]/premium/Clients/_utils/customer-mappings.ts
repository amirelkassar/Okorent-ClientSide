// Customer types array - INVESTIGATING THE MISMATCH
// You selected VIP (should be index 3) but API returned index 5
export const customerTypes = [
  'Individual',   // Index 0 – Backend value: Individual
  'Company',      // Index 1 – Backend value: Company (displayed as "Business" in UI)
  'Organization', // Index 2
  'VIP',          // Index 3
  'Regular',      // Index 4
];

// Security deposit options array - matches the API order
export const securityDepositOptions = ['none', 'default', 'extra'];

// Options for the Select component (value must match backend; label is friendly for the user)
export const customerTypeFormOptions = [
  { value: 'Individual', label: 'Individual' },
  { value: 'Company', label: 'Business' },
  { value: 'Organization', label: 'Organization' },
  { value: 'VIP', label: 'VIP' },
  { value: 'Regular', label: 'Regular' },
];

// Map backend enum value to a user-friendly label
const customerTypeLabelMap: Record<string, string> = {
  Individual: 'Individual',
  Company: 'Business',
  Organization: 'Organization',
  VIP: 'VIP',
  Regular: 'Regular',
};

// Helper functions to get array indices (for sending to API)
const customerTypeIndexMap: Record<string, number> = {
  Individual: 0,
  Company: 1,
  Organization: 2,
  VIP: 3,
  Regular: 4,
};

export const getCustomerTypeIndex = (customerType: string | number): number => {
  if (typeof customerType === 'number') return customerType;

  const key = customerType as string;
  return customerTypeIndexMap[key] ?? 0;
};

export const getSecurityDepositIndex = (securityDeposit: string | number): number => {
  if (typeof securityDeposit === 'number') return securityDeposit;
  const index = securityDepositOptions.findIndex(option => option === securityDeposit);
  return index >= 0 ? index : 0; // Default to first item if not found
};

// Helper functions to get display strings (for receiving from API)
export const getCustomerTypeDisplay = (index: number | string ): string => {
  // If we receive a number (or numeric string) treat it as index
  const parsed = typeof index === 'string' ? parseInt(index, 10) : index;

  if (!isNaN(parsed as number)) {
    const enumValue = customerTypes[parsed as number] ?? customerTypes[0];
    return customerTypeLabelMap[enumValue] ?? enumValue;
  }

  // Otherwise we received the backend enum string directly (e.g., "Company")
  const enumValue = index as string;
  return customerTypeLabelMap[enumValue] ?? enumValue;
};

export const getSecurityDepositDisplay = (index: number | string): string => {
  // Convert string numbers to actual numbers
  let numericIndex: number;
  if (typeof index === 'string') {
    // Check if it's a numeric string
    const parsed = parseInt(index, 10);
    if (!isNaN(parsed)) {
      numericIndex = parsed;
    } else {
      return index;
    }
  } else {
    numericIndex = index;
  }
  
  const result = securityDepositOptions[numericIndex] || securityDepositOptions[0];
  return result;
};

// Security deposit options for form dropdowns
export const securityDepositFormOptions = [
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
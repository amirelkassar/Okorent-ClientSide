import { create } from 'zustand';

interface Store {
  isRent: 'rent' | 'rent_out';
  setSwitchRent: (isRent: 'rent' | 'rent_out') => void;
}

export const useSwitchRent = create<Store>((set) => ({
  isRent: 'rent_out', // default state
  setSwitchRent: (isRent) => set({ isRent }),
}));

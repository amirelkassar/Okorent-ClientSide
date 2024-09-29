import { create } from "zustand";


/*store Switch User*/
interface Store {
  isRent: "rent" | "rent_out";
  setSwitchRent: (isRent: "rent" | "rent_out") => void;
}
export const useSwitchRent = create<Store>((set) => ({
  isRent: "rent_out", // default state
  setSwitchRent: (isRent) => set({ isRent }),
}));


/*store Switch Guest*/
interface StoreGuest {
  isGuestRent: "rent" | "rent_out";
  setSwitchGuestRent: (isRent: "rent" | "rent_out") => void;
}
export const useSwitchGuestRent = create<StoreGuest>((set) => ({
  isGuestRent: "rent_out", // default state
  setSwitchGuestRent: (isGuestRent) => set({ isGuestRent }),
}));
/*store Switch Billing*/
interface StoreBilling {
  switchBilling: "plan&wallet" | "renting"|'rentOuts';
  setSwitchBilling: (switchBilling: "plan&wallet" | "renting"|'rentOuts') => void;
}
export const useSwitchBilling = create<StoreBilling>((set) => ({
  switchBilling: "plan&wallet", // default state
  setSwitchBilling: (switchBilling) => set({ switchBilling }),
}));


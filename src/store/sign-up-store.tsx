import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserState {
  user: Record<string, any>; // لتخزين بيانات المستخدم
  setUser: (user: Record<string, any>) => void; // دالة لتحديث البيانات
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: {}, // الحالة الابتدائية
      setUser: (user) => set({ user }), // تحديث البيانات
    }),
    {
      name: 'user-storage', // اسم التخزين في LocalStorage
    }
  )
);

 

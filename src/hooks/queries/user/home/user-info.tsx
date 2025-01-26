import { api } from "@/src/api/axios";
import { user } from "@/src/api/user";
import { storeToken } from "@/src/lib/token";
import { useRouter } from "@/src/navigation";
import { decodedToken } from "@/token";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const initialQueryKey = "user.information";
export const initialQueryKeyProductOrder = "user.information.ProductsOrder";

//get user information
export const GetUserInfo = (id: any) => {
  return useQuery({
    queryKey: [initialQueryKey, id],
    queryFn: async () => {
      const response = await api.get(user.information.base(id));
      return response.data;
    },
  });
};
//edit user
export const useUserEditMutation = (token: any) => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.put(user.information.user_edit, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      storeToken(token);
      console.log(
        decodedToken(token).then((res2) => {
          console.log(res2);
        })
      );
    },
    onError: () => {},
  });
};

//get User Order Products ByID
export const GetUserProductsOrderByID = (id: any) => {
  return useQuery({
    queryKey: [initialQueryKeyProductOrder, id],
    queryFn: async () => {
      const response = await api.get(user.information.ProductsOrder(id));
      return response.data;
    },
  });
};

//get user Dashboard
export const GetUserHeaderDashboard = () => {
  return useQuery({
    queryKey: [initialQueryKey, "Header_Dashboard"],
    queryFn: async () => {
      const response = await api.get(user.information.Header_Dashboard);
      return response.data;
    },
  });
};

//get user Dashboard
export const GetDashboardOngoingRentals = () => {
  return useQuery({
    queryKey: [initialQueryKey, "Ongoing_Rentals"],
    queryFn: async () => {
      const response = await api.get(user.information.Ongoing_Rentals);
      return response.data;
    },
  });
};

//Vacation USer
export const useVacationUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.put(user.information.Vacation, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      });
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
    },
    onError: (res) => {
      console.log(res);
    },
  });
};

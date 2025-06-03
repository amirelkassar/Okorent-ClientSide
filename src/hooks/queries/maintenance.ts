import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "@/src/api/axios";
import { maintenance } from "@/src/api/maintenance";
import { MaintenanceItem } from "@/src/types/maintenance";
import { useSearchParams } from "next/navigation";

const QUERY_KEY = "maintenance";

export const useMaintenanceList = () => {
    const searchParams = useSearchParams();
    const statusFilter = searchParams.get('Status');

    return useQuery({
        queryKey: [QUERY_KEY, statusFilter],
        queryFn: async () => {
            const response = await api.get(maintenance.actions.getAll);
            if (!statusFilter) return response;

            // Filter the data based on status
            const filteredData = {
                ...response,
                data: {
                    ...response.data,
                    data: response.data.data.filter((item: MaintenanceItem) => {
                        const period = item.maintenancePeriod;
                        const status = period === 0 ? 'Not_Repaired' : period === 1 ? 'Repaired' : 'Offline';
                        return status === statusFilter;
                    })
                }
            };
            return filteredData;
        },
        staleTime: 0,
        gcTime: 0,
        refetchOnMount: 'always',
        refetchOnWindowFocus: true
    });
};

export const useMaintenanceById = (id: string) => {
    return useQuery({
        queryKey: [QUERY_KEY, id],
        queryFn: () => api.get(maintenance.actions.getById(id)),
        enabled: !!id
    });
};

export const useUpdateMaintenance = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, data }: { id: string; data: Partial<MaintenanceItem> }) =>
            api.put(maintenance.actions.update(id), data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
            queryClient.refetchQueries({ queryKey: [QUERY_KEY], exact: true });
        }
    });
};

export const useCreateMaintenance = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: Partial<MaintenanceItem>) =>
            api.post(maintenance.actions.create, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
            queryClient.refetchQueries({ queryKey: [QUERY_KEY], exact: true });
        }
    });
};

export const useDeleteMaintenance = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id: string) =>
            api.delete(maintenance.actions.delete(id)),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
        }
    });
};
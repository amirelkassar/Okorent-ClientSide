import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "@/src/api/axios";
import { maintenance } from "@/src/api/maintenance";
import { MaintenanceItem } from "@/src/types/maintenance";

const QUERY_KEY = "maintenance";

export const useMaintenanceList = () => {
    return useQuery({
        queryKey: [QUERY_KEY],
        queryFn: () => api.get(maintenance.actions.getAll)
    });
};

export const useCreateMaintenance = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: Partial<MaintenanceItem>) =>
            api.post(maintenance.actions.create, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
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
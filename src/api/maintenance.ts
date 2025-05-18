export const maintenance = {
    base: '/api/maintenance',
    actions: {
        create: '/api/maintenance/create',
        update: (id: string) => `/api/maintenance/${id}`,
        delete: (id: string) => `/api/maintenance/${id}`,
        getById: (id: string) => `/api/maintenance/${id}`,
        getAll: '/api/maintenance'
    }
};
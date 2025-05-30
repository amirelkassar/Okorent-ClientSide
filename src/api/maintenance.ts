export const maintenance = {
    base: '/maintenance',
    actions: {
        create: '/maintenance/create',
        update: (id: string) => `/maintenance/${id}`,
        delete: (id: string) => `/maintenance/${id}`,
        getById: (id: string) => `/maintenance/${id}`,
        getAll: '/maintenance'
    }
};
export const chatEndpoints = {
  room: {
    create: '/chat/room',
    getById: (id: string) => `/chat/room/${id}`,
    delete: (id: string) => `/chat/room/${id}`,
    getAll: '/chat/rooms',
  },
  message: {
    create: '/chat/message',
    delete: (id: string) => `/chat/message/${id}`,
  },
  chatByUserId: {
    get: (id: string) => `/chat/chatByUserId/${id}`,
  },
};

import { buildQuery } from "@/src/lib/utils";

export const home = {
  header: {
    base: "/home",
    list: (queries:any) => buildQuery("/home/list", queries),
    actions: {
      add: "/home",
      addFile: "/home/bulk",
      get: (id: any) => `/home?id=${id}`,
      delete: (id: any) => `/home?id=${id}`,
      update: (id: any) => `/home?id=${id}`,
    },
  },
};

import axios from "axios";
import { getToken } from "../lib/token";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const api = getAxiosInstance("");

function getAxiosInstance(URL: string) {
  const axiosInstance = axios.create({
    baseURL: BASE_URL + URL,
  });

  axiosInstance.interceptors.request.use(
    async (config) => {
      const token = await getToken();

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      // Debug logging for customer creation
      if (config.url?.includes('Customer/Create Customer')) {
        console.log('AXIOS: Request config:', {
          url: config.url,
          method: config.method,
          headers: config.headers,
          data: config.data,
          dataSize: config.data ? JSON.stringify(config.data).length : 0
        });
      }

      return config;
    },
    (err) => Promise.reject(err)
  );
  return axiosInstance;
}

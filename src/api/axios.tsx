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

      return config;
    },
    (err) => Promise.reject(err)
  );
  return axiosInstance;
}

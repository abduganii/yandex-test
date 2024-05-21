import axios from "axios";
import { QueryClient } from "react-query";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BACKEND_URL,
  headers: {
    "Accept":  "application/json",
    "Content-Type": "application/json",
  },
 
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export default api;

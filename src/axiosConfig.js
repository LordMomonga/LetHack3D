import axios from "axios";
import { getTokenFromState } from "./utils";

const createAxiosInstance = () => {
  const token = getTokenFromState();
  const instance = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_API_URL,
    timeout: 20000,
    headers: {
      "Content-type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  return instance;
};
const axiosURL = createAxiosInstance();

export default axiosURL;

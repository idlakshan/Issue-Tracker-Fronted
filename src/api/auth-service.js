import Axios from "./axios-instance";

const USER_API_BASE = "/auth";

export const register = async (userData) => {
  const response = await Axios.post( `${USER_API_BASE}/register`,
    userData);

  return response.data;
};


export const login = async (data) => {
  const response = await Axios.post(`${USER_API_BASE}/login`, data);
  return response.data;
};
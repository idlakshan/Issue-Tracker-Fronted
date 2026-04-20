import Axios from "./axios-instance";

const USER_API_BASE = "/users";

export const getAllUsers = async ()=> {
  const response = await Axios.get(
    `${USER_API_BASE}`
  );

  return response.data;
};
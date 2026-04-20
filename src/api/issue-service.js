import Axios from "./axios-instance";

const USER_API_BASE = "/issues";

export const createIssue = async (issue) => {
  const response = await Axios.post(
    `${USER_API_BASE}`,
    issue
  );

  return response.data;
};
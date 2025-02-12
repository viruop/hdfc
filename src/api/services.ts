import apiClient from "./base-api";

const getProgramServices = (payload: any) => {
  return apiClient.post(`/programs/get`, payload);
};

export default { getProgramServices };

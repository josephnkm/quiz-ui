import { axiosClient } from ".";

const useAxios = () => {
  const getRequest = (URL: string, ...config) => {
    return axiosClient.get(URL, ...config).then((response) => response);
  };

  const postRequest = (URL: string, ...config) => {
    return axiosClient.post(URL, ...config).then((response) => response);
  };

  const putRequest = (URL: string, ...config) => {
    return axiosClient.put(URL, ...config).then((response) => response);
  };

  const patchRequest = (URL: string, ...config) => {
    return axiosClient.patch(URL, ...config).then((response) => response);
  };

  const deleteRequest = (URL: string, ...config) => {
    return axiosClient.delete(URL, ...config).then((response) => response);
  };

  return {
    getRequest,
    postRequest,
    putRequest,
    patchRequest,
    deleteRequest,
  };
};

export default useAxios;

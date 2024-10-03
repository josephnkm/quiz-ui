import axios from "axios";

import { baseURL } from "../endpoints";
// import { IParsedJwt } from "../../interfaces/IParsedJwt";
// import { logout, updateToken } from "../../Redux/SliceReducer/UserSlice";
// import { store } from "../../Redux/Store/Store";
// import { getParsedJwt, isIError } from "..";

export const axiosClient = axios.create({
  baseURL,
});

// const refreshLoginToken = async (refreshToken: string) => {
//   try {
//     const res = await axios.post(
//       `${baseURL}/cms-components/api/v1/refresh-token`,
//       {
//         refreshToken: refreshToken,
//       }
//     );
//     if (res.data.accessToken) {
//       return res.data;
//     } else {
//       store.dispatch(logout());
//     }
//   } catch (error: unknown) {
//     if (isIError(error) && error.response.status === 400) {
//       store.dispatch(logout());
//     }
//   }
// };

// axiosClient.interceptors.request.use(
//   async (config) => {
//     const { isLoggedin, auth } = store?.getState()?.userSlice;
//     if (isLoggedin) {
//       const decodedToken = getParsedJwt<IParsedJwt>(auth?.accessToken);
//       if (decodedToken && decodedToken.exp * 1000 < new Date().getTime()) {
//         const res = await refreshLoginToken(auth.refreshToken);
//         config.headers = {
//           Authorization: `Bearer ${res?.accessToken}`,
//         };
//         store.dispatch(updateToken(res));
//       } else {
//         config.headers = {
//           Authorization: `Bearer ${auth?.accessToken}`,
//         };
//       }
//     }
//     return config;
//   },
//   (error) => {
//     return error;
//   }
// );

// axiosClient.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       store.dispatch(logout());
//     }
//     throw error;
//   }
// );

import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import useUserStore from "../store/useUserStore";
import { axiosPrivate } from "../api/axios";

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const { user, toggleTokenRefreshed } = useUserStore(); // Use global state

  useEffect(() => {
    let isRefreshing = false;
    let failedQueue = [];

    const processQueue = (error, token = null) => {
      failedQueue.forEach((prom) => {
        if (error) {
          prom.reject(error);
        } else {
          prom.resolve(token);
        }
      });
      failedQueue = [];
    };

    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"] && user?.accessToken) {
          config.headers["Authorization"] = `Bearer ${user.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevReq = error?.config;

        // Check if the error is due to an expired token
        if (error?.response?.status === 401 && !prevReq?.sent) {
          if (!isRefreshing) {
            isRefreshing = true;

            try {
              const newAccessToken = await refresh(); // Refresh the token
              processQueue(null, newAccessToken);
              toggleTokenRefreshed(); // Toggle tokenRefreshed in global state
              isRefreshing = false;
            } catch (err) {
              processQueue(err, null); // Handle refresh failure
              isRefreshing = false;
              throw err; // Propagate the error to the component
            }
          }

          // Queue the current request until the token is refreshed
          return new Promise((resolve, reject) => {
            failedQueue.push({ resolve, reject });
          })
            .then((token) => {
              prevReq.sent = true;
              prevReq.headers["Authorization"] = `Bearer ${token}`;
              return axiosPrivate(prevReq); // Retry the request
            })
            .catch((err) => Promise.reject(err));
        }

        return Promise.reject(error); // Return other errors as-is
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [refresh, user?.accessToken, toggleTokenRefreshed]);

  return axiosPrivate;
};

export default useAxiosPrivate;
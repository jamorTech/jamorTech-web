import { useState } from "react";
import useAxiosPrivate from "./useAxiosPrivate";

export const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const axiosPrivate = useAxiosPrivate()

  const fetchData = async (signal="") => {
      if (!url) return;
      try {
        setIsLoading(true);
        setErr(null);

        const headers = {
          ...options.headers,
        };

        // Perform the Axios request with credentials
        const response = await axiosPrivate({
          method: options.method || "GET",
          url: url,
          headers: headers,
          data: options.body,
          withCredentials: true,  // Include credentials (cookies) with the request
          signal: signal
        });

        // Set the data
          setData(response.data);
      } catch (error) {
        
        setErr(`Request failed: ${error.error || error}`);
      } finally {
        setIsLoading(false);
      }
    };

  return { data, err, isLoading, fetchData };
};

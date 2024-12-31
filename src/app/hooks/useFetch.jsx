import { useState, useEffect } from "react";

export const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        setErr(null);

        const token = localStorage.getItem("token");
        if (!token) {
          setErr("No valid token found. Please log in.");
          setIsLoading(false);
          return;
        }

        const headers = {
          ...options.headers,
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        };

        // Perform the fetch
        const response = await fetch(url, { ...options, headers });
        const contentType = response.headers.get("content-type");

        if (!response.ok) {
          const errorMessage = contentType.includes("application/json")
            ? (await response.json().message)
            : await response.text();
          setErr(errorMessage || "Failed to fetch data");
          return;
        }

        // Parse and set data
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        setErr(`API request failed: ${error.message || error}`);
        console.error("Fetch error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, err, isLoading };
};

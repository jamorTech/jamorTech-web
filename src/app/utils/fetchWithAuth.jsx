
export const fetchWithAuth = async (url, options = {}) => {

    try {
      const token = localStorage.getItem("accessToken");
  
      // Add Authorization header if accessToken exists
      const headers = {
        ...options.headers,
        Authorization: token ? `Bearer ${token}` : undefined,
        "Content-Type": "application/json",
      };
  
      // Make the request
      const response = await fetch(url, { ...options, headers });
  
      // Check for token expiration (403 status)
      if (response.status === 403) {
        // Try to refresh the token
        const refreshed = await refreshAccessToken();
        if (refreshed) {
          // Retry the original request with the new token
          return fetchWithAuth(url, options);
        } else {
          // Redirect to login if token refresh fails
          window.location.href = "/login";
          return;
        }
      }
  
      // Return the response for successful requests
      return  response
    } catch (error) {
      console.error("API request failed:", error);
    //   throw error;
    }
  };
  
  // Helper function to refresh the access token
  const refreshAccessToken = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/refresh`, { method: "POST", credentials: "include" }); // Send HttpOnly cookies
      if (!response.ok) {
        console.error("Failed to refresh token");
        return false;
      }
  
      const data = await response.json();
      const { accessToken } = data;
  
      // Update the access token in localStorage
      localStorage.setItem("accessToken", accessToken);
      return true;
    } catch (error) {
      console.error("Token refresh failed:", error);
      return false;
    }
  };
  
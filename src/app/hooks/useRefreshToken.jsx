import { axiosPrivate } from "../api/axios";
import { useUserStore } from "../store/useUserStore";
import useRedirectToLogin from "./useRedirectToLogin";

const useRefreshToken = () => {
    const { setUser, clearUser, openModal } = useUserStore(); // Access the setUser function
    const redirectToLogin = useRedirectToLogin();

    const refresh = async () => {
        try {
            const response = await axiosPrivate.get("/users/refresh", { withCredentials: true });
            const newAccessToken = response.data.accessToken;
            // Update user in the store with the new access token
            setUser(prevUser => ({
                ...prevUser,
                accessToken: newAccessToken,
            }));
            return newAccessToken;
        } catch (error) {
            // Handle specific cases for refresh token failure
            if (error.response?.status === 401 || error.response?.status === 403) {
                // Unauthorized or Forbidden: Refresh token is invalid or expired
                openModal(error.response.data.message, "warning");
            } else {
                // General error
                openModal(
                    "An unexpected error occurred while refreshing your session. Please log in again.",
                    "error"
                );
            }
            clearUser()
            setTimeout(() => {
                redirectToLogin(); // Redirect to the login page
              }, 3000)
            throw error; // Rethrow the error for further handling if necessary
        }
    };

    return refresh;
};

export default useRefreshToken;
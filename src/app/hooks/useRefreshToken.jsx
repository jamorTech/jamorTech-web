import { axiosPrivate } from "../api/axios";
import { userStore } from "../store/userStore";
import useUserStore from "../store/useUserStore";
import useRedirectToLogin from "./useRedirectToLogin";

const useRefreshToken = () => {
    const { setUser } = useUserStore(); // Access the setUser function
    const redirectToLogin = useRedirectToLogin();
    const { openModal } = userStore(); // Function to display feedback to the user

    const refresh = async () => {
        try {
            const response = await axiosPrivate.get("/users/refresh", { withCredentials: true });
            const newAccessToken = response.data.accessToken;

            // Update user in the store with the new access token
            setUser(prevUser => ({
                ...prevUser,
                accessToken: newAccessToken,
            }));
            sessionStorage.setItem("user", JSON.stringify(newAccessToken));
            return newAccessToken;
        } catch (error) {

            // Handle specific cases for refresh token failure
            if (error.response?.status === 401 || error.response?.status === 403) {
                // Unauthorized or Forbidden: Refresh token is invalid or expired
                openModal(
                    "Your session has expired. Please log in again to continue.",
                    "warning"
                );
            } else {
                // General error
                openModal(
                    "An unexpected error occurred while refreshing your session. Please log in again.",
                    "error"
                );
            }

            setUser(null); // Clear user state
            sessionStorage.removeItem("user");
            setTimeout(() => {
                redirectToLogin(); // Redirect to the login page
              }, 3000)
            throw error; // Rethrow the error for further handling if necessary
        }
    };

    return refresh;
};

export default useRefreshToken;
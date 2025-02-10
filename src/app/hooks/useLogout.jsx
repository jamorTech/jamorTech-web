"use client"
import useAxiosPrivate from "./useAxiosPrivate";
import { clearAllData } from "../utils/localStorage";
import { useRouter } from "next/navigation";
import { useUserStore } from "../store/useUserStore";

const useLogout = () => {
  const { clearUser } = useUserStore();
  const axiosPrivate = useAxiosPrivate();
  const {push} = useRouter()
  
    const logout = async () => {
      try {
        const response = await axiosPrivate.post("/users/logout");

        if (response.status === 200 || response.status === 204) {
          clearUser()
          clearAllData()
           window.location.href = "/login"
        } else {
          clearUser()
          clearAllData()
          window.location.href = "/login"
          throw new Error("Logout failed: " + response.data.message);
        }
      } catch (error) {
        clearUser()
        clearAllData()
        window.location.href = "/login"
        throw error.message;
      }
    };
  return {logout}
};

export default useLogout;

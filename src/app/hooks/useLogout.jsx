"use client"
import useUserStore from "../store/useUserStore";
import useAxiosPrivate from "./useAxiosPrivate";
import { clearAllData } from "../utils/localStorage";
import { useRouter } from "next/navigation";

const useLogout = () => {
  const { setUser } = useUserStore();
  const axiosPrivate = useAxiosPrivate();
  const {push} = useRouter()
  
    const logout = async () => {
      try {
        const response = await axiosPrivate.post("/users/logout");

        if (response.status === 200 || response.status === 204) {
          setUser(null);
          sessionStorage.removeItem("user");
          clearAllData()
          push("/login")
        } else {
          throw new Error("Logout failed: " + response.data.message);
        }
      } catch (error) {
        sessionStorage.removeItem("user");
        throw error.message;
      }
    };
  return {logout}
};

export default useLogout;

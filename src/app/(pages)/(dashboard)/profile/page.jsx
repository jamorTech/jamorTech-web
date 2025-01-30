"use client";
import React, { useEffect, useState } from "react";
import UserProfile from "../components/UserProfile";
import { userStore } from "@/app/store/userStore";
import useUserStore from "@/app/store/useUserStore";
import useAxiosPrivate from "@/app/hooks/useAxiosPrivate";

const ProfilePage = () => {
  const { error, openModal, closeModal } = userStore();
  const [loading, setLoading] = useState(true);  // Start loading as true
  const [err, setErr] = useState(null);
  const [data, setData] = useState(null);
  const {user, tokenRefreshed} = useUserStore()

  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {

    const fetchData = async () => {
      try {
        // Perform the Axios request with credentials
        const response = await axiosPrivate.get(`/users/profile`);
        setData(response.data);
        
      } catch (error) {
          // Update the error state only if the component is mounted
          // setErr(`Failed to fetch data: ${error.message || error}`);
      } finally {
          // Set loading state to false when data fetching is done
          setLoading(false);
      }
    };

    fetchData();

  }, [user, tokenRefreshed]);

  // Handle API errors
  useEffect(() => {
    if (err) {
      openModal(err, "error");  // Show the error modal
    } else if (error) {
      openModal(error, "error");  // Show the user-specific error
    } else {
      closeModal();  // Close the modal if there's no error
    }
  }, [err, error, openModal, closeModal]);

  // Render UI
  if (loading) return <div className="loader"></div>; // Show loading state while data is being fetched
  if (err) return <div>{err}</div>; // Show the error message

  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      <UserProfile userData={data} />
    </main>
  )
};

export default ProfilePage;

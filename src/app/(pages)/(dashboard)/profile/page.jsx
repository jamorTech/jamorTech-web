"use client";
import React, { useEffect, useState } from "react";
import UserProfile from "../components/UserProfile";
import useAxiosPrivate from "@/app/hooks/useAxiosPrivate";
import { useUserStore } from "@/app/store/useUserStore";
import Loading from "@/app/components/Loading";

const ProfilePage = () => {
  const [loading, setLoading] = useState(true);  // Start loading as true
  const [err, setErr] = useState(null);
  const [data, setData] = useState(null);
  const { tokenRefreshed, openModal, closeModal} = useUserStore()

  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Perform the Axios request with credentials
        setLoading(true);
        setErr(null);
        const response = await axiosPrivate.get(`/users/profile`);
        setData(response.data);
        
      } catch (error) {
          // Update the error state only if the component is mounted
          if (error.response?.status === 401 || error.response?.status === 403) {
            setErr(error.response.data.error);
          }else if (error.response?.status === 404) {
            setErr(error.response.data.error)
          }else {
            setErr(error.response.data.error);
          }
      } finally {
          // Set loading state to false when data fetching is done
          setLoading(false);
      }
    };
    fetchData();
  }, [tokenRefreshed]);

  // Handle API errors
  useEffect(() => {
    if (err) {
      openModal(err, "error");  // Show the user-specific error
    } else {
      closeModal();  // Close the modal if there's no error
    }
  }, [err, openModal, closeModal]);

  // Render UI
  if (loading) return <Loading />; // Show loading state while data is being fetched

  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      <UserProfile userData={data} />
    </main>
  )
};

export default ProfilePage;

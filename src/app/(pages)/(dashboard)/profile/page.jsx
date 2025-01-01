"use client";
import React, { useEffect, useState } from "react";
import UserProfile from "../components/UserProfile/UserProfile";
import { userStore } from "@/app/store/userStore";
import { useFetch } from "@/app/hooks/useFetch";
import withAuth from "@/app/utils/withAuth";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const { error, updateError, openModal, closeModal } = userStore();

  // Load user from localStorage
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (!storedUser) updateError("User data missing");
      setUser(JSON.parse(storedUser));
    } catch (err) {
      openModal(err.message, "error");
    }
  }, [openModal]);

  // Fetch user data only if user exists
  const { data, err, isLoading } = useFetch(
    user ? `${process.env.NEXT_PUBLIC_BASE_URL}/users/${user.id}` : null
  );

  // Handle API errors
  useEffect(() => {
    if (err) openModal(err, "error");
    if (error) openModal(error, "error");
    else closeModal();
  }, [err, openModal, closeModal]);

  // Render UI
  return (
    <div>
      <UserProfile user={data} loading={isLoading} />
    </div>
  );
};
const AuthProfilePage = withAuth(ProfilePage)
export default AuthProfilePage;

"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useUserStore from "../store/useUserStore";
import { axiosPrivate } from "../api/axios";
import { userStore } from "../store/userStore";

const useLogin = (url) => {
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const { setUser } = useUserStore();
  const { push, replace } = useRouter();
  const searchParams = useSearchParams();

  // Retrieve query parameters
  const message = searchParams.get("message");
  const redirectTo = searchParams.get("from") || "/profile";

  const { openModal, closeModal } = userStore();

  // Display initial message if present
  useEffect(() => {
    if (message) {
      openModal(message, "warning");
      setTimeout(() => {
        const url = new URL(window.location.href);
        url.searchParams.delete("message");
        replace(url.pathname + url.search);
      }, 3000); // Clear message after 3 seconds
    }
    // Cleanup modal when unmounting
    return closeModal;
  }, [message, replace]);

  const login = async (username, password) => {
    setErr(null);
    setIsLoading(true);

    // Basic input validation
    if (!username?.trim() || !password?.trim()) {
      setErr("All inputs are required!");
      setIsLoading(false);
      return;
    }

    try {
      const response = await axiosPrivate.post(
        url,
        { username, password },
        { withCredentials: true }
      );

      if (response.status === 200) {
        const userData = response.data;

        // Set user in the global store
        setUser(userData);
        sessionStorage.setItem("user", JSON.stringify(userData));

        // Handle redirection and messages
        if (!userData.verified) {
          setMsg("Please verify your email.");
          push("/verify-email");
        } else {
          setMsg("Login successful!");
          window.location.href = redirectTo;
        }
      }
    } catch (error) {
      sessionStorage.removeItem("user");

      // Handle different error cases
      if (error.response) {
        // Server responded with an error status
        const errorMessage =
          error.response?.data?.error || error.response?.data || "An error occurred";
        setErr(errorMessage);
      } else if (error.request) {
        // No response from server
        setErr("No response from server. Please try again later.");
      } else {
        // Something else happened
        setErr("An unexpected error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Handle messages and errors
  useEffect(() => {
    if (err) openModal(err, "error");
    if (msg) openModal(msg, "success");
  }, [err, msg]);

  return { login, isLoading };
};

export default useLogin;

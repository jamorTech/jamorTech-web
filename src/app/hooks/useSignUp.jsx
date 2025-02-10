"use client"
import React, { useEffect, useState } from 'react'
import { axiosPrivate } from '../api/axios'
import { useRouter } from 'next/navigation'
import { useUserStore } from '../store/useUserStore'

const useSignUp = (url) => {

    const [err, setErr] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [msg, setMsg] = useState("");

    const { openModal, closeModal } = useUserStore();
    const { push } = useRouter();

    const signUp = async (formData) => {
        setIsLoading(true)
        setErr(null)

        try {
            // Construct the FormData object
            const data = new FormData()

            // Append all key-value pairs from formData
            Object.keys(formData).forEach((key) => {
                data.append(key, formData[key])
            })

            // Axios POST request with credentials
            const response = await axiosPrivate.post(url, data, {
                headers: {
                    "Content-Type": "multipart/form-data", // Ensure proper content type for FormData
                }
            })

            if (response.status === 200) {
                setMsg("Please verify your email.");
                push("/verify-email");
                
                // Handle redirection and messages
                // if (response.data.paymentUrl) {
                //  window.location.href = response.data.paymentUrl
                //     setIsLoading(false)
                // } else {
                //     setMsg("Please verify your email.");
                //     push("/verify-email");
                // }
              }
        } catch (error) {
            if (error.response) {
                setErr(error.response.data.error|| error.response.data || "Something went wrong")
            } else {
                setErr(error.message || "API request failed")
            }
            setIsLoading(false)
        } finally {
            setIsLoading(false)
        }
    }

      // Handle messages and errors
  useEffect(() => {
    if (err) openModal(err, "error");
    if (msg) openModal(msg, "success");
    setTimeout(()=>{
        setErr(null)
    }, 5000)
  }, [err, msg]);

    return { err, isLoading, signUp }
}

export default useSignUp

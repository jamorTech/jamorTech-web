"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { userStore } from '../store/userStore'

const useSignUp = (url) => {

    const [err, setErr] = useState(null)
    const [msg, setMsg] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const {updateUser} = userStore()
    const {push} = useRouter()
            
    const signUp = async (formData)=>{
        setIsLoading(true)
        setErr(null)

        try {
         // Construct the FormData object
      const data = new FormData();

      // Append all key-value pairs from formData
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key])
      });
        const requestOptions = {
                method: "POST",
                body: data,
            }
           
                const response = await fetch(url, requestOptions)
                const json = await response.json()
                if (!response.ok) {
                    setIsLoading(false)
                    setErr(json.error)
                }

                if (response.ok) {
                  setErr(null)
                  localStorage.setItem("token", JSON.stringify(json.accessToken))
                  localStorage.setItem("user", JSON.stringify(json))
                  updateUser(json)
                  if(!json.verified){
                    setMsg("Verification link have been sent to your email")
                    setTimeout(() => {
                      push('/verify-email')
                    }, 2000)
                  }else{
                    setTimeout(() => {
                      push('/profile')
                    }, 2000)
                  }
                  setIsLoading(false)
                }
            } catch (error) {
                setErr(error.message)
                setIsLoading(false)
            }finally{
                setIsLoading(false)

            }
    }
        

  return {err, isLoading, msg, signUp}
}

export default useSignUp

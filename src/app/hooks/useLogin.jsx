"use client"
import React, { useState } from 'react'
import { userStore } from '../store/userStore'
import { useRouter } from 'next/navigation'

const useLogin = (url) => {
    const [err, setErr] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [msg, setMsg] = useState("")
    const {updateUser} = userStore()

    const {push} = useRouter()

    const login = async(username, password)=>{
            setErr(null)
            setIsLoading(true)

            if (!username || !password) {
                setIsLoading(false)
                setErr("All inputs required!")
                return
            }

            const requestOptions = {
                    method: "POST",
                    body: JSON.stringify({username, password}),
                    headers: {
                        "Content-type": "application/json",
                    }
                }
                try {
                    const response = await fetch(url, requestOptions)
                    const json = await response.json()
                    if (!response.ok) {
                        setErr(json.error)
                        setIsLoading(false)
                    }
                    if (response.ok) {
                      setErr(null)
                      localStorage.setItem("token", JSON.stringify(json.accessToken))
                      localStorage.setItem("user", JSON.stringify(json))
                      updateUser(json)
                      if(!json.verified){
                        setMsg("Verify your email")
                        setTimeout(() => {
                          push('/verify-email')
                        }, 2000)
                      }else{
                        setMsg("Login successful")
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

  return {login, isLoading, err, msg}
}

export default useLogin

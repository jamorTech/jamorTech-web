import React, { useState } from 'react'
import { userStore } from '../store/userStore'

const useDelete = (url) => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
  
    const {user} = userStore()

    const deleteRequest = async ()=>{
        setLoading(true)
        setError(null)

        const requestOptions = {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                "Authorization":`bearer ${user?.token}`
            }
        }
      
        try {
          
    } catch (error) {
        setError(error.message)
    } finally{
        setLoading(false)
      }
    }
    return { loading, error, deleteRequest }
}

export default useDelete

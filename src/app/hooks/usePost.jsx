import React, { useState } from 'react'
import { userStore } from '../store/userStore';

const usePost = (url) => {
//   const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const {user} = userStore()

  const request = async (data)=>{

    setLoading(true)
    setError(null)

  const requestOptions = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-type": "application/json",
        "Authorization":`bearer ${user?.token}`
    }
  }

     
    try {
        
    } catch (error) {
      
    }finally{
        setLoading(false)

    }
  }

  return { loading, error, request }
}

export default usePost

import React, { useState } from 'react'
import { userStore } from '../store/userStore'

const usePatch = (url) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
  
    const {user} = userStore()
  
    const request = async (data)=>{

        setLoading(true)
        setError(null)

    const requestOptions = {
      method: "PATCH",
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

export default usePatch

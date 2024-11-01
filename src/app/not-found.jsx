import React from 'react'
import StatusPage from '@/app/components/StatusPage/StatusPage'

const NotFound = () => {
  return (
    <div className='notFoundContainer'>
      <StatusPage status={"404 | Page not-Found"} />
    </div>
  )
}

export default NotFound

import React from 'react'
import styles from "./community.module.css"
import ComingSoon from '@/app/components/StatusPage/StatusPage'

const page = () => {
  return (
    <div className={styles.container}>
      <ComingSoon />
    </div>
  )
}

export default page
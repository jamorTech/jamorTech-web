import React from 'react'
import styles from "./input.module.css"
import { FiMessageSquare } from 'react-icons/fi'

export const Input = ({title="", icon="", secondaryIcon="", thirdIcon="", name="", type, placeholder="", value, err="", thirdIconContent="", handleInputChange}) => {
  return (
      <div className={styles.input_section}>
        <div className={styles.input_container}>
          <label htmlFor={title}>{title}</label>
          <div className={styles.input}>
            <span className={styles.icon}>{icon}</span>
            <input 
              type={type}
              name={name}
              placeholder={placeholder}
              value={value}
              onChange={handleInputChange}
            />
            <span className={`${styles.icon} ${styles.isGrey}`}>{secondaryIcon}</span>
        </div>
        {thirdIcon && <small className={styles.isGrey}>{thirdIcon} {thirdIconContent}</small>}
        </div>
        {err && <small className={styles.error}>{err}</small>}
      </div>
  )
}

export const TextArea = ({title="", type="", value="", name="", placeholder="", thirdIcon="", thirdIconContent="", err="", handleInputChange}) =>{
  return <div className={`${styles.input_section} ${styles.text}`}>
  <label htmlFor={title} className="block text-sm font-medium text-gray-700 mb-1">{title}</label>
  <div className="relative">
        <FiMessageSquare className="absolute left-3 top-3 text-gray-400" aria-hidden="true" />
        <textarea 
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={handleInputChange}
          className="pl-10 w-full p-2 border rounded-md focus:ring-0 focus:border-none h-32"
          aria-invalid={err ? "true" : "false"}
        />
    <small className={styles.isGrey}>{thirdIcon} {thirdIconContent}</small>
    {err && <small className={styles.error}>{err}</small>}
  </div>
</div>
}

export default {Input, TextArea}

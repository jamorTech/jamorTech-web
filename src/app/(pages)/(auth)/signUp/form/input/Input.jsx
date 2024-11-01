import React from 'react'
import styles from "./input.module.css"

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
  <label htmlFor={title}>{title}</label>
  <div>
    <div className={`${styles.input} ${styles.textInput}`}>
        <textarea 
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={handleInputChange}
        />
    </div>
    <small className={styles.isGrey}>{thirdIcon} {thirdIconContent}</small>
    {err && <small className={styles.error}>{err}</small>}
  </div>
</div>
}

export default {Input, TextArea}

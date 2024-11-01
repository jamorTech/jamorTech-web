import React from 'react'
import styles from "./selectOption.module.css"

const SelectOptions = ({optionTitle, options, selectValue, onChange}) => {
  return (
    <>
    <label htmlFor={optionTitle}>{optionTitle} </label>
      <select className={styles.select} onChange={onChange||""} value={selectValue}>
        <option value="" hidden>{optionTitle}</option>
        {options.map((option, index)=>(
          <option 
            key={index} 
            className={styles.option} 
            value={option}
          >
              {option.charAt(0).toUpperCase() + option.slice(1)}
          </option>
        ))}
    </select>
    </>
  )
}

export default SelectOptions

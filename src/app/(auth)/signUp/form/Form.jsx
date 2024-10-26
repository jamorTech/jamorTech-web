"use client";
import React, { useState } from 'react';
import styles from "./Form.module.css";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import Link from 'next/link';

const Form = ({ FormInput, currentStep = "", nextStep = "", prevStep = "", handleSubmit = "", errors = "" }) => {
  const [checkBox, setCheckBox] = useState(false);
  console.log("next", currentStep);
  

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formInputs}>
        {FormInput?.map((inputElement, index) => {
          const stretch = inputElement.props.name === "onboardMesg" || inputElement.props.name === "certificate" || inputElement.props.name === "username";
          return (
            <div key={index} className={`${currentStep && stretch ? styles.stretch : styles.input}`}>
              {inputElement}
            </div>
          );
        })}
      </div>
      {(!currentStep || currentStep === 3) && (
        <div>
          <div className={styles.terms_policy}>
            <input
              type="checkbox"
              checked={checkBox}
              onChange={e => {setCheckBox(e.target.checked); console.log(checkBox)}}
            />
            <small>
              I Agree To The <Link href="/terms">Terms And Conditions</Link> And <Link href="/policy">Privacy Policy</Link>
            </small>
          </div>
          {errors.checkBox && <small className={styles.error}>{errors.checkBox}</small>}
        </div>
      )}
      <div className={styles.formBtnsContainer}>
        {currentStep && currentStep > 1 && (
          <button type="button" className={styles.prevStep} onClick={prevStep}>
            Back <FaLongArrowAltLeft />
          </button>
        )}
        {currentStep && currentStep < 3 && (
          <button type="button" className={styles.nextStep} onClick={nextStep}>
            Next <FaLongArrowAltRight />
          </button>
        )}
        {(!currentStep || currentStep === 3) && (
          <button type="submit" disabled={!checkBox} className={styles.signUp}>
            Sign Up <FaLongArrowAltRight />
          </button>
        )}
      </div>
    </form>
  );
};

export default Form;

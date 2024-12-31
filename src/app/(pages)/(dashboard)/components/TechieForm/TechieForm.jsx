"use client"
import React, { useState } from 'react';
import styles from './TechieForm.module.css';

const TechieForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    technicalSkills: '',
    proficiencyLevel: '',
    availability: [],
    personalWebsite: ''
  });

  const availabilityOptions = [
    'FULL-TIME',
    'PART-TIME',
    'REMOTE',
    'PHYSICAL',
    'NO OPEN TO RECRUITERS',
    'OTHERS'
  ];

  const handleAvailabilityToggle = (option) => {
    setFormData(prev => {
      const newAvailability = prev.availability.includes(option)
        ? prev.availability.filter(item => item !== option)
        : [...prev.availability, option];
      
      return {
        ...prev,
        availability: newAvailability
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className={styles.formContainer}>
      <header className={styles.header}>
        <div className={styles.headerImages}>
          <img 
            src="/placeholder.svg?height=100&width=100" 
            alt="Tech professional 1" 
            className={styles.headerImage} 
          />
          <img 
            src="/placeholder.svg?height=100&width=100" 
            alt="Tech professional 2" 
            className={styles.headerImage} 
          />
        </div>
        <h1 className={styles.title}>Techies</h1>
        <p className={styles.subtitle}>
          Fill the form to be added to our tech graduates path where potential recruiters who prefer your services will be contacting you
        </p>
      </header>

      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input
            type="text"
            id="name"
            className={styles.input}
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="location" className={styles.label}>Location</label>
          <input
            type="text"
            id="location"
            className={styles.input}
            value={formData.location}
            onChange={(e) => setFormData({...formData, location: e.target.value})}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="skills" className={styles.label}>Technical Skill(s)</label>
          <input
            type="text"
            id="skills"
            className={styles.input}
            value={formData.technicalSkills}
            onChange={(e) => setFormData({...formData, technicalSkills: e.target.value})}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="proficiency" className={styles.label}>Level Of Proficiency</label>
          <input
            type="text"
            id="proficiency"
            className={styles.input}
            value={formData.proficiencyLevel}
            onChange={(e) => setFormData({...formData, proficiencyLevel: e.target.value})}
            required
          />
        </div>

        <div className={styles.optionsGroup}>
          <p className={styles.optionsTitle}>Are you open to offers?</p>
          <div className={styles.optionsContainer}>
            {availabilityOptions.map((option) => (
              <button
                key={option}
                type="button"
                className={`${styles.optionButton} ${
                  formData.availability.includes(option) ? styles.optionButtonActive : ''
                }`}
                onClick={() => handleAvailabilityToggle(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="website" className={styles.label}>Link To Personal Website</label>
          <input
            type="url"
            id="website"
            className={styles.input}
            value={formData.personalWebsite}
            onChange={(e) => setFormData({...formData, personalWebsite: e.target.value})}
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default TechieForm;


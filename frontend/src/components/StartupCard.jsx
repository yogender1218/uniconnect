// StartupCard.js
import React, { useState } from 'react';
import styles from './StartupCard.module.css';

const demoStartup = {
  name: 'GreenTech Solutions',
  studentName: 'John Doe',
  problem_statement: 'High energy consumption in residential areas leads to increased carbon footprint.',
  solution_approach: 'We develop smart home devices that optimize energy usage through AI, reducing waste and costs.',
  business_model: 'Subscription-based service with a one-time setup fee.',
  market_audience: 'Homeowners, renters, and property managers interested in sustainability.',
  funding_required: '$500,000',
  category: 'Sustainable Technology'
};

const StartupCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedStartup, setEditedStartup] = useState({ ...demoStartup });
  const [editStatus, setEditStatus] = useState('');

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Simulate saving the edited data
    setEditStatus('saved');
    setIsEditing(false);
    // Here you would typically send a PATCH request to update the startup data
    setTimeout(() => {
      setEditStatus('');
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedStartup(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.cardTitle}>{demoStartup.name}</h3>
        <p className={styles.studentName}><strong>Student:</strong> {demoStartup.studentName}</p>
      </div>
      <div className={styles.body}>
        {isEditing ? (
          <form onSubmit={handleSave}>
            <div className={styles.formGroup}>
              <label htmlFor="problem_statement" className={styles.label}>Problem Statement</label>
              <textarea id="problem_statement" name="problem_statement" value={editedStartup.problem_statement} onChange={handleChange} className={styles.textarea}></textarea>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="solution_approach" className={styles.label}>Solution Approach</label>
              <textarea id="solution_approach" name="solution_approach" value={editedStartup.solution_approach} onChange={handleChange} className={styles.textarea}></textarea>
            </div>
            <button type="submit" className={styles.saveButton}>Save Changes</button>
            {editStatus === 'saved' && <p className={styles.successMessage}>Changes saved successfully!</p>}
          </form>
        ) : (
          <>
            <p className={styles.sectionTitle}>Problem Statement</p>
            <p className={styles.cardText}>{demoStartup.problem_statement}</p>
            <p className={styles.sectionTitle}>Solution Approach</p>
            <p className={styles.cardText}>{demoStartup.solution_approach}</p>
            <p className={styles.sectionTitle}>Business Model</p>
            <p className={styles.cardText}>{demoStartup.business_model}</p>
            <p className={styles.sectionTitle}>Market Audience</p>
            <p className={styles.cardText}>{demoStartup.market_audience}</p>
            <p className={styles.sectionTitle}>Funding Required</p>
            <p className={styles.cardText}>{demoStartup.funding_required}</p>
            <p className={styles.sectionTitle}>Category</p>
            <p className={styles.cardText}>{demoStartup.category}</p>
          </>
        )}
      </div>
      {!isEditing && <button onClick={handleEdit} className={styles.patchButton}>Patch</button>}
    </div>
  );
};

export default StartupCard;
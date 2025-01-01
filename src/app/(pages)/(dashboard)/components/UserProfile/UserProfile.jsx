import React from 'react';
import styles from './UserProfile.module.css';
import Image from 'next/image';
import profilePicture from '../../../../../../public/assets/images/default-profile.png';

const UserProfile = ({ user, loading }) => {
  return (
    <div className={styles.profileContainer}>
      {loading && <div className="loader"></div>}
      <header className={styles.header}>
        <Image 
          className={styles.profilePicture} 
          src={user?.profilePicture || profilePicture} 
          alt={user?.name} 
          height={300}
          width={500}
        />
        <div className={styles.nameContainer}>
          <h1 className={styles.name}>{`${user?.username}`}</h1>
          {/* <p className={styles.username}>@{user?.username}</p> */}
        </div>
        <button className={styles.editButton}>Edit Profile</button>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Personal Information</h2>
        <div className={styles.infoGrid}>
          <div className={styles.infoItem}>
            <p className={styles.infoLabel}>Email</p>
            <p className={styles.infoValue}>{user?.email}</p>
          </div>
          <div className={styles.infoItem}>
            <p className={styles.infoLabel}>Phone</p>
            <p className={styles.infoValue}>{user?.phone}</p>
          </div>
          <div className={styles.infoItem}>
            <p className={styles.infoLabel}>Tech School</p>
            <p className={styles.infoValue}>{user?.techSchool}</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <div className={styles.skillsList}>
          
            <span className={styles.skill}>{user?.skill}</span>
          
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Onoarding message</h2>
        <ul className={styles.activityList}>
            <li className={styles.activityItem}>
              <p>{user?.onboardMesg}</p>
            </li>
        </ul>
      </section>
    </div>
  );
};

export default UserProfile;


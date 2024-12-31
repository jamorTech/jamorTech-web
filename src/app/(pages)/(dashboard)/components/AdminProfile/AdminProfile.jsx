import React from 'react';
import styles from './AdminProfile.module.css';
import Image from 'next/image';
import profilePicture from '../../../../../../public/assets/images/default-profile.png';

const AdminProfile = ({ admin }) => {
  return (
    <div className={styles.profileContainer}>
      <header className={styles.header}>
        <Image src={profilePicture} alt={admin.name} className={styles.profilePicture} />
        <div className={styles.nameContainer}>
          <h1 className={styles.name}>{admin.name}</h1>
          <p className={styles.role}>{admin.role}</p>
        </div>
        <div className={styles.actionButtons}>
          <button className={styles.button}>Edit Profile</button>
          <button className={styles.button}>System Settings</button>
        </div>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Admin Information</h2>
        <div className={styles.infoGrid}>
          <div className={styles.infoItem}>
            <p className={styles.infoLabel}>Email</p>
            <p className={styles.infoValue}>{admin.email}</p>
          </div>
          <div className={styles.infoItem}>
            <p className={styles.infoLabel}>Department</p>
            <p className={styles.infoValue}>{admin.department}</p>
          </div>
          <div className={styles.infoItem}>
            <p className={styles.infoLabel}>Admin ID</p>
            <p className={styles.infoValue}>{admin.adminId}</p>
          </div>
          <div className={styles.infoItem}>
            <p className={styles.infoLabel}>Last Login</p>
            <p className={styles.infoValue}>{admin.lastLogin}</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>System Statistics</h2>
        <div className={styles.statGrid}>
          <div className={styles.statItem}>
            <p className={styles.statValue}>{admin.stats.totalUsers}</p>
            <p className={styles.statLabel}>Total Users</p>
          </div>
          <div className={styles.statItem}>
            <p className={styles.statValue}>{admin.stats.activeInterns}</p>
            <p className={styles.statLabel}>Active Interns</p>
          </div>
          <div className={styles.statItem}>
            <p className={styles.statValue}>{admin.stats.registeredCompanies}</p>
            <p className={styles.statLabel}>Registered Companies</p>
          </div>
          <div className={styles.statItem}>
            <p className={styles.statValue}>{admin.stats.openPositions}</p>
            <p className={styles.statLabel}>Open Positions</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Recent Activity</h2>
        <ul className={styles.activityList}>
          {admin.recentActivity.map((activity, index) => (
            <li key={index} className={styles.activityItem}>
              <div className={styles.activityInfo}>
                <p className={styles.activityDescription}>{activity.description}</p>
                <span className={styles.activityMeta}>
                  {activity.date} | {activity.time}
                </span>
              </div>
              <button className={styles.activityAction}>View Details</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AdminProfile;


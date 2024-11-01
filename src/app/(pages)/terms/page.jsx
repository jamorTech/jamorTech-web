import React from 'react'
import styles from "./terms.module.css"
import MouContent from './../../components/content/MouContent';
import Image from 'next/image';
import Banner from '../../../../public/assets/images/Banner2.png';

const PolicyPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <Image
          src={Banner}
          width={600}
          height={400}
          alt='Banner'
        />
      </div>
      <div className={styles.content}>
        <p className={styles.intro}>At Jamor Technology, we value professionalism, respect, and a collaborative spirit. This addendum outlines the specific code of conduct expected from all interns during their time with us</p>
        <ol>
          {MouContent.map((section, index) => (
            <div key={index} className={styles.policy}>
              <li className={styles.title}>{section?.title}</li>
              {Array.isArray(section.details) ? (
                <ul>
                  {section.details.map((point, idx) => (
                    <li key={idx} className={styles.details}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p className={styles.details}>{section?.details}</p>
              )}
            </div>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default PolicyPage;

import React from 'react'
import styles from "./Benefits.module.css"
import BenefitCard from './BenefitCard'
import pic1 from "../../../../../public/assets/images/office-bag.png"
import pic2 from "../../../../../public/assets/images/power-of-pen.png"
import pic3 from "../../../../../public/assets/images/macbook-pro.png"

const Benefits = () => {
  return (
    <div className={styles.container}>
       <h1>What Makes us Different?</h1>
      <div className={styles.benefits}>
        <BenefitCard 
            img={pic1}
            cardTitle={"Interns"}
            cardOptions={[
                "Soft Skills Training",
                "Career Development",
                "Team Collaboration",
                "Networking",
                "Mentorship and Guidance",
                "Portfolios, Certifications and Reference",
            ]}
        />
        <BenefitCard 
            img={pic2}
            cardTitle={"Investors"}
            cardOptions={[
                "Access to Innovative Projects",
                "Educational Resources",
                "Diverse Investment Opportunities",
                "Transparency and Accountability",
                "Potentials for High Returns",
                "Contributions to Technology Advancement",
            ]}
        />
        <BenefitCard 
            img={pic3}
            cardTitle={"Businesses and Employers"}
            cardOptions={[
                "Free Contsultation",
                "Website Development",
                "Mobile App Development",
                "Digital Marketing",
                "Fast Response",
                "Outsourcing",
            ]}
        />
      </div>
    </div>
  )
}

export default Benefits

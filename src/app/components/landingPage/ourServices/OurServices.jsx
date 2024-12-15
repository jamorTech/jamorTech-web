import styles from "./OurServices.module.css"
import ServicesCard from './ServicesCard'
import carbon from "../../../../../public/assets/svgs/carbon_development.svg"
import tools from "../../../../../public/assets/svgs/ri_tools-fill.svg"
import crowd from "../../../../../public/assets/svgs/simple-icons_crowdsource.svg"

const OurServices = () => {

    const servicesDetails = [
        {img: carbon,
            header: "Internship Development",
            content: "At Jamor Technology, we believe in fostering the next generation of tech innovators through our comprehensive Internship Development Program. This program is designed to provide aspiring professionals with hands-on experience, mentorship from industry experts, and the opportunity to work on real-world projects.",
        },
        {img: tools,
            header: "Technology Solution",
            content: "Jamor Technology provides innovative and tailored technology solutions to meet the unique needs of businesses and individuals. Our expertise spans a range of services, including advanced software development, robust cybersecurity measures, seamless cloud computing integration, outsourcing, and cutting-edge artificial intelligence applications.",
        },
        {img: crowd,
            header: "Investors’ Corner",
            content: "Investors' Corner is a program that allows individuals, groups, or companies to invest in technological projects through the Jamor Technology platform. These projects are presented by certified professionals and entrepreneurs.",
        },
    ]

  return (
    <div className={styles.container}>
        <h1>Our  Services</h1>
        <p className={styles.content}>At Jamor Technology, we offer a comprehensive suite of services designed to equip individuals with the skills and knowledge needed to excel in the ever-evolving tech industry.</p>
        <div className={styles.card_container}>
            {servicesDetails.map((service, index)=>(
                <ServicesCard 
                    key={index}
                    img={service.img}
                    header={service.header}
                    content={service.content}
                />
            ))}
        </div>
    </div>
  )
}

export default OurServices

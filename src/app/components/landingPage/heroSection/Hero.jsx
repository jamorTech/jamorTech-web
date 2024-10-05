import styles from "./Hero.module.css"
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
import pic1 from "../../../../../public/assets/images/user4.png"
import pic2 from "../../../../../public/assets/images/user4.png"
import pic3 from "../../../../../public/assets/images/user4.png"
import pic4 from "../../../../../public/assets/images/user4.png"

const Hero = () => {
    const Testimonial_images = [
        {float: 1, img: pic1},
        {float: "15%", img: pic2},
        {float: "30%", img: pic3},
        {float: "45%", img: pic4},
    ]
  return (
    <div className={styles.hero_container}>
        <div className={styles.hero_body}>
            <h1>Empower Your Potential with Jamor Technology</h1>
            <p>Join us on a journey of discovery, growth, and 
            <br />transformation. Whether you're looking to be more <br /> skillful in your tech career, stay ahead of industry trends, <br /> or collaborating on a real-time project, Jamor Technology <br /> is your gateway to success.</p>
            <div className={styles.hero_btns}>
                <Link href={"/signUp"} className={styles.btn_joinUS}>Join Us <FaLongArrowAltRight className={styles.btn_icon}/></Link>
                <Link href={"/"} className={styles.btn_hire_techie}>Hire a Techie <FaLongArrowAltRight className={styles.btn_icon}/></Link>
            </div>
            <div className={styles.testimony}>
                <div className={styles.testimony_img_container}>
                    {Testimonial_images.map((images, index)=>(
                        <div className={styles.img_frame} key={index} style={{left: images.float}}>
                            <Image
                                src={images.img}
                                alt={"img"}
                                width={500}
                                height={200}
                            />
                        </div>
                    ))}
                </div>
                <p className={styles.testimony_content}>Over 110k+ professionals trained.</p>
                <Link href={"/"} className={styles.community}>Community</Link>
            </div>
        </div>
        <div className={styles.hero_banner}>

        </div>
    </div>
  )
}

export default Hero

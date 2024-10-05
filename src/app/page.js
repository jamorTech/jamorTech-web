import Hero from './components/landingPage/heroSection/Hero'
import OurServices from './components/landingPage/ourServices/OurServices'
import Benefits from './components/landingPage/benefits/Benefits'
import AboutUS from './components/landingPage/aboutUsSection/AboutUS'
import OurPartners from './components/landingPage/OurPartnersSection/OurPartners'
import Updates from './components/landingPage/updates/Updates'
import FrequentAskedQuestions from './components/landingPage/frequentlyAskedQuestions/FrequentAskedQuestions'
import ContactUs from './components/landingPage/contactUS/ContactUs'

export const metadata = {
  title: "JamorTech - Empowering New Tech Talent Through Internships",
  description: "Empower Your Potential with JamorTech - Join us on a transformative journey where aspiring tech professionals gain the skills and knowledge needed to thrive in today’s competitive landscape."
};

const page = () => {
  return (
    <main >
      <Hero />
      <OurServices />
      <Benefits />
      <AboutUS />
      <OurPartners />
      <Updates />
      <FrequentAskedQuestions />
      <ContactUs />
    </main>
  )
}

export default page

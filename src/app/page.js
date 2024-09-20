import React from 'react'
import Hero from './components/landingPage/heroSection/Hero'
import OurServices from './components/landingPage/ourServices/OurServices'
import Benefits from './components/landingPage/benefits/Benefits'
import AboutUS from './components/landingPage/aboutUsSection/AboutUS'
import OurPartners from './components/landingPage/OurPartnersSection/OurPartners'
import Updates from './components/landingPage/updates/Updates'
import FrequentAskedQuestions from './components/landingPage/frequentlyAskedQuestions/FrequentAskedQuestions'
import ContactUs from './components/landingPage/contactUS/ContactUs'

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

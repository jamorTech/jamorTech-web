
import AboutHeader from "@/app/components/about-page-components/AboutHeader";
import MissionVisionContent from "@/app/components/about-page-components/MissionVisionContent";
import AboutDetails from "@/app/components/AboutDetails";
import CoreValueComponent from "@/app/components/CoreValueComponent";
import OurPartners from "@/app/components/landingPage/OurPartnersSection/OurPartners";
import TeamMembers from "@/app/components/TeamMembers";
export default function page() {
  return (
    <div className="max-w-[1440px] mx-auto my-0">
        <AboutHeader />
        <AboutDetails />
        <MissionVisionContent />
        <CoreValueComponent />
        <TeamMembers />
        <OurPartners />
    </div>
  )
}

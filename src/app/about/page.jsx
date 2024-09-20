import AboutHeader from "../components/about-page-components/AboutHeader";
import MissionVisionContent from "../components/about-page-components/MissionVisionContent";
import AboutDetails from "../components/AboutDetails";
import CoreValueComponent from "../components/CoreValueComponent";
import Patners from "../components/Patners";
import TeamMembers from "../components/TeamMembers";
export default function page() {
  return (
    <div className="max-w-[1440px] mx-auto my-0">
        <AboutHeader />
        <AboutDetails />
        <MissionVisionContent />
        <CoreValueComponent />
        <TeamMembers />
        <Patners />
    </div>
  )
}

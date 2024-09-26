import Patners from "../components/Patners";
import Conclusion from "../components/service-comps/Conclusion";
import Investors from "../components/service-comps/Investors";
import ServiceBody from "../components/service-comps/ServiceBody";
import ServiceDetails from "../components/service-comps/ServiceDetails";
import ServiceHeader from "../components/service-comps/ServiceHeader";
import Solution from "../components/service-comps/Solution";

export const metadata = {
  title: "About JamorTech - Bridging the Gap Between Education and Employment",
  description: "Discover unparalleled opportunities at JamorTech, where we empower aspiring tech professionals through hands-on internships."
};

export default function page() {
  return (
    <div className="max-w-[1440px] mx-auto my-0">
      <ServiceHeader />
      <ServiceDetails />
      <ServiceBody />
      <Solution />
      <Investors />
      <Patners />
      <Conclusion />
    </div>
  );
}

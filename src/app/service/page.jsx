import Patners from "../components/Patners";
import Conclusion from "../components/service-comps/Conclusion";
import Investors from "../components/service-comps/Investors";
import ServiceBody from "../components/service-comps/ServiceBody";
import ServiceDetails from "../components/service-comps/ServiceDetails";
import ServiceHeader from "../components/service-comps/ServiceHeader";
import Solution from "../components/service-comps/Solution";
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

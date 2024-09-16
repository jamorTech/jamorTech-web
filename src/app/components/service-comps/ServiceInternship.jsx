import Image from "next/image";
import macPro from "./service-img/macbook.svg";
import people from "./service-img/people.svg";
import youth from "./service-img/youth.svg";
import network from "./service-img/network.svg";
import worker from "./service-img/worker.svg";
import officeImg from "./service-img/office.svg";
import GridImages from "./GridImages";
export default function ServiceInternship() {
  return (
    <div className="grid grid-cols-2 mt-10 items-center">
      <div>
        <Image src={officeImg} alt="office image" />
      </div>
      <div>
        <GridImages
          firstImg={macPro}
          headerP={"Practical Experience "}
          detailsP={"Interns work on real-world projects (live)"}
          secondImg={people}
          secondHeaderP={"Mentorship and Guidance"}
          sectionDetailsP={
            "Seasoned mentors guide interns on their career paths through personalized support."
          }
        />
        <GridImages
          firstImg={youth}
          headerP={"Skill development"}
          detailsP={
            "Empowering interns with cutting-edge technical skills through workshops, projects, and training."
          }
          secondImg={network}
          secondHeaderP={"Networking opportunity"}
          sectionDetailsP={
            "Interns build valuable connections with industry leaders, alumni, and peers through networking, fostering career growth."
          }
        />
        <div className=" w-1/2 mt-4 mx-auto my-0">
          <Image src={worker} className="max-w-full mx-auto my-0" />
          <p className="text-customGray font-bold ">career advancement</p>
          <p className="text-justify text-sm">Our internship program prepares students for successful tech careers, often leading to full-time roles at Jamor Technology or other top tech firms.</p>
        </div>
      </div>
    </div>
  );
}

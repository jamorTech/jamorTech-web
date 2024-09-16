import Image from "next/image";
import information from "./service-img/Information.svg";
import potentials from "./service-img/potential.svg";
import transparency from "./service-img/education.svg";
import coins from "./service-img/coins.svg";
export default function Investors() {
  return (
    <div className="bg-customPurple p-10">
      <h1 className="font-abrilFont text-white text-4xl text-center font-normal">
        Investor's Corner
      </h1>
      <div className="max-w-[1109px] mx-auto mt-10">
        <div className="grid grid-cols-2 items-center gap-[50px]">
          <div className="w-full">
            <Image src={information} alt="contribution image" />
            <h3 className="text-white font-abrilFont mt-4 font-normal ">
              Contribution Technological Advancement
            </h3>
            <p className="text-white mt-4 text-justify font-arimoFont font-normal text-base">
              Investors have the opportunity to support and contribute to the
              development and commercialization of groundbreaking technologies
              that can have a positive impact on society and the economy.
            </p>
          </div>
          <div className="w-full">
            <Image src={potentials} alt="potential image" />
            <h3 className="text-white font-abrilFont mt-4 font-normal ">
              Potentials for High Returns
            </h3>
            <p className="text-white mt-4 text-justify font-arimoFont font-normal text-base">
              Technological projects often have significant growth potential.
              Early investment in innovative solutions can lead to substantial
              returns as the projects scale and succeed.
            </p>
          </div>
          <div className="w-full">
            <Image src={transparency} alt="potential image" />
            <h3 className="text-white font-abrilFont mt-4 font-normal ">
              Transparency and Accountability
            </h3>
            <p className="text-white mt-4 text-justify font-arimoFont font-normal text-base">
              Our platform ensures transparency in project presentations,
              progress updates, and financial reporting, enabling investors to
              track their investments and hold project managers accountable.
            </p>
          </div>
          <div className="w-full">
            <Image src={coins} alt="potential image" />
            <h3 className="text-white font-abrilFont mt-4 font-normal ">
              Diverse Investment Opportunities
            </h3>
            <p className="text-white mt-4 text-justify font-arimoFont font-normal text-base">
              Our platform offers diverse investment opportunities across
              various sectors within the tech industry, allowing investors to
              diversify their portfolios and mitigate risks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

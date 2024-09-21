import waylc from "../components/about-page-components/images/socials/waylc.svg";
import italk from "../components/about-page-components/images/socials/italk.svg";
import emadatt from "../components/about-page-components/images/socials/emedatt.svg";
import malva from "../components/about-page-components/images/socials/malva.svg";
import connectPro from "../components/about-page-components/images/socials/connectpro.svg";
import Image from "next/image";

export default function Patners() {
  return (
    <div className="mt-10 sm:mt-20 px-4">
      <h1 className="text-center text-customGreen font-abrilFont font-normal text-3xl sm:text-4xl">
        Our Patners
      </h1>
      <div className="max-w-[1000px] gap-8 mx-auto my-0 mt-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-center justify-center">
          <Image src={waylc} alt="West Africa Young Leadership Conference" className="w-full h-auto"/>
          <Image src={italk} alt="italkAdventure" className="w-full h-auto"/>
          <Image src={emadatt} alt="e-medatt" className="w-full h-auto"/>
          <Image src={malva} alt="Malva" className="w-full h-auto"/>
          <Image src={connectPro} alt="connectPro" className="w-full h-auto"/>
        </div>
      </div>
    </div>
  );
}

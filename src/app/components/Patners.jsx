import waylc from "../components/about-page-components/images/socials/waylc.svg";
import italk from "../components/about-page-components/images/socials/italk.svg";
import emadatt from "../components/about-page-components/images/socials/emedatt.svg";
import malva from "../components/about-page-components/images/socials/malva.svg";
import connectPro from "../components/about-page-components/images/socials/connectpro.svg";
import Image from "next/image";
export default function Patners() {
  return (
    <div className="mt-20">
      <h1 className="text-center text-customGreen font-abrilFont font-normal text-4xl">
        Our Patners
      </h1>
      <div className="max-w-[1000px] gap-[60px]  mx-auto my-0">
        <div className="grid grid-cols-5 mt-10 items-center">
          <Image src={waylc} alt="West Africa young leadership conference" />
          <Image src={italk} alt="italkAdventure" />
          <Image src={emadatt} alt="e-medatt" />
          <Image src={malva} alt="malva" />
          <Image src={connectPro} alt="connectPro" />
        </div>
      </div>
    </div>
  );
}

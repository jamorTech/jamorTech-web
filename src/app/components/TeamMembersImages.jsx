import Image from "next/image";
import x from "../components/about-page-components/images/socials/twitter.svg";
import facebook from "../components/about-page-components/images/socials/facebook.svg";
import youTube from "../components/about-page-components/images/socials/youtube.svg";
import instagram from "../components/about-page-components/images/socials/instagram.svg";

export default function TeamMembersImages({team, teamMemberName, teamMemberPosition}) {
  return (
    <div className=" border-[1.5px]  rounded-xl border-customPurple p-5">
      <Image src={team} className="max-w-full mx-auto " alt="co-founder" />
      <p className="font-bold text-base font-arimoFont text-customGreen text-center">
        {teamMemberName}
      </p>
      <p className="font-bold text-base font-arimoFont text-customGreen text-center">
        {teamMemberPosition}
      </p>
      <div className=" max-w-[294px] mx-auto">
        <div className="flex gap-2  ml-20">
          <Image src={x} alt="x" />
          <Image src={facebook} alt="facebook" />
          <Image src={youTube} alt="youtube" />
          <Image src={instagram} alt="instagram" />
        </div>
      </div>
    </div>
  );
}

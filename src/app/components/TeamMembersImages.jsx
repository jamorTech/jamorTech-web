import Image from "next/image";
import x from "../components/about-page-components/images/socials/twitter.svg";
import facebook from "../components/about-page-components/images/socials/facebook.svg";
import youTube from "../components/about-page-components/images/socials/youtube.svg";
import instagram from "../components/about-page-components/images/socials/instagram.svg";

export default function TeamMembersImages({ team, teamMemberName, teamMemberPosition }) {
  return (
    <div className="border-[1.5px] rounded-xl border-customPurple p-5">
      <Image src={team} className="max-w-full h-auto mx-auto" alt={teamMemberName} />
      <p className="font-bold text-base sm:text-lg font-arimoFont text-customGreen text-center mt-2">
        {teamMemberName}
      </p>
      <p className="font-bold text-base sm:text-lg font-arimoFont text-customGreen text-center">
        {teamMemberPosition}
      </p>
      <div className="max-w-[294px] mx-auto">
        <div className="flex justify-center gap-2 mt-3">
          <Image src={x} alt="Twitter" />
          <Image src={facebook} alt="Facebook" />
          <Image src={youTube} alt="YouTube" />
          <Image src={instagram} alt="Instagram" />
        </div>
      </div>
    </div>
  );
}

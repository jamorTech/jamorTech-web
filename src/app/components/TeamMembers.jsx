'use client'
import TeamMembersImages from "./TeamMembersImages";
import usuman from "./about-page-components/images/usuman.svg";
import chioma from "./about-page-components/images/chioma.svg";
import blessing from "./about-page-components/images/blessing.svg";
import damilare from "./about-page-components/images/damilare.svg";
import peace from "./about-page-components/images/peace.svg";
import shittu from "./about-page-components/images/shittu.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

export default function TeamMembers() {
  return (
    <div className="mt-16">
      <div className="bg-customPurple mb-5 p-[1px] max-w-[1000px] mx-auto my-0"></div>
      <h1 className="text-center text-customGreen font-abrilFont font-normal text-3xl sm:text-4xl">
        Meet Our Teams
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5 gap-10 p-4 md:p-10">
        <TeamMembersImages
          team={peace}
          teamMemberName={"Peace Ololade"}
          teamMemberPosition={"CEO"}
        />
        <TeamMembersImages
          team={usuman}
          teamMemberName={"Usman Lawal"}
          teamMemberPosition={"COO/Co-founder"}
        />
        <TeamMembersImages
          team={chioma}
          teamMemberName={"Chinwe Chioma Uzor"}
          teamMemberPosition={"Associate Marketing Officer"}
        />
        <TeamMembersImages
          team={shittu}
          teamMemberName={"Divine Shittu"}
          teamMemberPosition={"Product Designer/Developer Lead"}
        />
        <TeamMembersImages
          team={blessing}
          teamMemberName={"Blessing Onyelekwe"}
          teamMemberPosition={"Product Manager Lead"}
        />
        <TeamMembersImages
          team={damilare}
          teamMemberName={"Aribifo Damilare David"}
          teamMemberPosition={"Product Designer/Developer Lead"}
        />
      </div>
    </div>
  );
}

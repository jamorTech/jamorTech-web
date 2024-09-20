import story from "../service-comps/service-img/story.svg";
import Image from "next/image";

export default function ServiceHeader() {
  return (
    <div className="relative">
      <Image
        src={story}
        className="w-full h-auto"
        alt="This is the collaborative picture"
      />
      <h1 className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-abrilFont text-white text-3xl sm:text-4xl md:text-5xl text-center font-normal">
        Our Story
      </h1>
    </div>
  );
}

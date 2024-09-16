import story from "../service-comps/service-img/story.svg";
import Image from "next/image";
export default function ServiceHeader() {
  return (
    <>
      <div className="relative">
        <Image
          src={story}
          className="w-full relative"
          alt="this is the collaborative picture"
        />
        <h1 className=" absolute top-28 left-[35.5rem] font-abrilFont text-white text-4xl text-center font-normal">
          Our Story
        </h1>
      </div>
    </>
  );
}

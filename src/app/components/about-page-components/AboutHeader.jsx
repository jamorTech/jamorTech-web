import headerImage from "./images/header.svg";
import Image from "next/image";

export default function AboutHeader() {
  return (
    <div className="relative w-full">
      <Image
        src={headerImage}
        className="w-full h-auto object-cover"
        alt="this is the collaborative picture"
        priority
      />
      <h1 className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-abrilFont text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-center">
        About Us
      </h1>
    </div>
  );
}

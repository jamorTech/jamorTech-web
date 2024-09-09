import headerImage from "./images/header.svg";
import Image from "next/image";
export default function AboutHeader() {
  return (
    <>
      <div className="relative">
        <Image
          src={headerImage}
          className="w-full relative"
          alt="this is the collaborative picture"
        />
        <h1 className=" absolute top-28 left-[35.5rem] font-abrilFont text-white text-4xl text-center font-normal">
          About Us
        </h1>
      </div>
    </>
  );
}

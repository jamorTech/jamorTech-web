import Image from "next/image";
import friends from "./service-img/friends.svg";
import arrow from "./service-img/arrow.svg";
import "./Responsive.css";

export default function Conclusion() {
  return (
    <div className="p-4 mt-32 max-w-[1000px] mx-auto">
      <div className="relative overall ">
        <Image
          src={friends}
          alt="background of friends smiling at each other"
          className="w-full h-auto" // Ensure the image is full width
        />
        <div className="absolute innerDiv top-16 w-full px-4 sm:px-20">
          {" "}
          {/* Adjusted top position */}
          <div className="flex item-center gap-10 textDiv">
            <div>
              <h3 className="text-white text-2xl sm:text-[32px] font-abrilFont font-normal">
                Unlock Your Potential <br /> Today
              </h3>
              <p className="text-white mt-4 text-justify font-arimoFont font-normal text-sm sm:text-base">
                Discover the endless possibilities and opportunities waiting for
                you. At Jamor Tech, we empower you to reach new heights in your
                tech career.
              </p>
            </div>
            <div className="mt-0 buttonContainer w-[40%]">
                <button className=" mt-10 bg-customPurple w-full font-abrilFont flex items-center gap-2 px-4 py-4 rounded-lg text-white">
                  Get Started
                  <Image src={arrow} alt="white arrow image" />
                </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

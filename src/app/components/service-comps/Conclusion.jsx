import Image from "next/image";
import friends from "./service-img/friends.svg";
import arrow from "./service-img/arrow.svg";
export default function Conclusion() {
  return (
    <div className="p-4 mt-32 max-w-[1000px] mx-auto">
      <div className="relative">
        <Image
          src={friends}
          alt="background of friends smiling at each other"
        />
        <div className="absolute top-10">
          <div className="flex items-center px-20 justify-between">
            <div className="w-1/2">
              <h3 className="text-white text-[32px] font-abrilFont font-normal ">
                Unlock Your Potential Today
              </h3>
              <p className="text-white mt-4 text-justify font-arimoFont font-normal text-sm">
                Discover the endless possibilities and opportunities waiting for
                you. At Jamor Tech, we empower you to reach new heights in your
                tech career. .{" "}
              </p>
            </div>
            <div>
              <button className="bg-customPurple w-full font-abrilFont flex items-center gap-2 px-[30px] py-[20px] rounded-lg text-white">
                {" "}
                Get Started
                <Image src={arrow} alt=" white directional arrow image" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

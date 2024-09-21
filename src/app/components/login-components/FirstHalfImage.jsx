import Image from "next/image";
import men from "./login-img/men.svg";

export default function FirstHalfImage() {
  return (
    <div className="relative w-full h-auto">
      <Image
        src={men}
        alt="men gathered together"
        className="w-full h-auto object-cover"
        priority
      />
      <h3 className="text-gladGreen font-bold shadow-white text-center mt-4 mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-abrilFont absolute inset-x-0 top-1/3 transform -translate-y-1/3">
        We Are Glad To <br /> Have You Back
      </h3>
    </div>
  );
}

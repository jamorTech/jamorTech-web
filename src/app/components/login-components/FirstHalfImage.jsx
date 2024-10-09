import Image from "next/image";
import login from "./login-img/login.svg";

export default function FirstHalfImage() {
  return (
    <div className=" w-full h-auto">
      <Image
        src={login}
        alt="men gathered together"
        className="w-full h-auto mt-20 smallerImage object-cover"
        priority
      />
    </div>
  );
}

import FirstHalfImage from "./FirstHalfImage";
import SecondHalf from "./SecondHalf";

export default function FirstHalf() {
  return (
    <div className="max-w-[1440px] mx-auto my-0">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <FirstHalfImage />
        <SecondHalf />
      </div>
    </div>
  );
}

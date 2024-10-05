import FirstHalfImage from "./FirstHalfImage";
import SecondHalf from "./SecondHalf";
import './Responsive.css';

export default function FirstHalf() {
  return (
    <div className="max-w-[1440px] mx-auto my-10 reducer p-20">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <FirstHalfImage />
        <SecondHalf />
      </div>
    </div>
  );
}

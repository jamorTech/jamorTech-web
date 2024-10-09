import Image from "next/image";
export default function GridImages({firstImg,headerP, detailsP, secondImg, secondHeaderP, sectionDetailsP, }) {
  return (
    <div className="grid grid-cols-2 items-center mt-4 gap-10">
      <div>
        <Image src={firstImg} className="max-w-full mx-auto my-0" alt="macbook laptop" />
        <p className="text-customGray font-bold ">
          {headerP}
        </p>
        <p className=" text-justify text-sm text-black font-normal">
          {detailsP}
        </p>
      </div>
      <div>
        <Image src={secondImg} className="max-w-full mx-auto my-0" />
        <p className="text-customGray font-bold ">
          {secondHeaderP}
        </p>
        <p className="text-justify text-sm">
          {sectionDetailsP}
        </p>
      </div>
    </div>
  );
}

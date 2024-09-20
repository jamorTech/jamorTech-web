export default function Content({ headingStatement, statement }) {
  return (
    <div className="max-w-full sm:max-w-[300px] mt-10 mx-auto">
      <h1 className="text-customGreen font-extrabold font-abrilFont text-center text-2xl sm:text-3xl md:text-4xl">
        {headingStatement}
      </h1>
      <p className="font-arimoFont text-customGray font-normal text-center text-sm sm:text-base md:text-lg">
        {statement}
      </p>
    </div>
  );
}

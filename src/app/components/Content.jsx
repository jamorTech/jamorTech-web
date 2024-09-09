export default function Content({headingStatement, statement}) {
  return (
    <div className="max-w-[250px] mt-10 mx-auto my-0">
      <h1 className="text-customGreen font-extrabold font-abrilFont text-center text-[36px]">
        {headingStatement}
      </h1>
      <p className="font-arimoFont text-customGray font-normal text-center">
        {statement} 
      </p>
    </div>
  );
}

export default function CoreValueContents({ coreHeaderThree, coreParagraphDetails }) {
  return (
    <div>
      <h3 className="text-white font-abrilFont mb-4 font-normal text-xl sm:text-2xl">
        {coreHeaderThree}
      </h3>
      <p className="text-white font-arimoFont text-sm sm:text-base">
        {coreParagraphDetails}
      </p>
    </div>
  );
}

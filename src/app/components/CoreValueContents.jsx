export default function CoreValueContents({coreHeaderThree, coreParagraphDetails}) {
  return (
    <div>
      <h3 className="text-white font-abrilFont mb-4 font-normal text-[20px]">{coreHeaderThree}</h3>
      <p className="text-white font-arimoFont  font-[16px]">
        {coreParagraphDetails}
      </p>
    </div>
  );
}

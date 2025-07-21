import Image from "next/image";

export default function TeamMembersImages({
  team,
  teamMemberName,
  teamMemberPosition,
}) {
  return (
    <div className="border-[1.5px] rounded-xl border-customPurple p-5">
      <Image
        src={team}
        className="mx-auto"
        alt={teamMemberName}
        width={200} // Set your desired width
        height={200} // Set your desired height
        objectFit="cover" // Ensures the image maintains aspect ratio without distortion
      />
      {/* <p className="font-bold text-base sm:text-lg font-arimoFont text-customGreen text-center mt-2">
        {teamMemberName}
      </p>
      <p className="font-extralight text-base sm:text-lg font-arimoFont text-customGreen text-center">
        {teamMemberPosition}
      </p> */}
    </div>
  );
}

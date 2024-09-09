import CoreValueContents from "./CoreValueContents";
export default function CoreValueComponent() {
  return (
    <div className="mt-24 p-10">
      <h1 className="text-customGreen font-extrabold font-abrilFont text-center text-[36px]">
        {" "}
        Our Core Value
      </h1>
      <div className="bg-customPurple rounded-2xl mt-10 p-4">
        <div className="grid grid-cols-4 p-4 gap-4">
          <CoreValueContents
            coreHeaderThree={"Reliability"}
            coreParagraphDetails={
              "We understand the importance of meeting client expectations and deadlines, and we strive to be a reliable partner that clients can trust. by maintaining open lines of communication, adhering to our promises, and consistently delivering on our commitments."
            }
          />
          <CoreValueContents
            coreHeaderThree={"Professionalism "}
            coreParagraphDetails={
              "We hold ourselves to the highest standards of professionalism, integrity, and ethical conduct. our team members are dedicated professionals who approach their work with a sense of responsibilities, respect, and professionalism."
            }
          />
          <CoreValueContents
            coreHeaderThree={"Collaboration "}
            coreParagraphDetails={
              "We recognise that successful outcomes are often achieved through effective teamwork and collaboration. We believe in the power of diverse perspectives, ideas, and expertise coming together to drive  innovation, problem-solving, and continuous improvement."
            }
          />
          <CoreValueContents
            coreHeaderThree={"Innovation "}
            coreParagraphDetails={
              "We believe that innovation is essential to staying at the forefront of the industry and providing cutting-edge solutions to our clients. we encourage a culture of creativity, curiosity, and continuous learning, empowering our team members and interns to think outside the box, challenge the status quo, and bring fresh ideas and perspectives to the table."
            }
          />
        </div>
      </div>
    </div>
  );
}

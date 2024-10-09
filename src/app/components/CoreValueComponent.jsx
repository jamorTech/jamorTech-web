import CoreValueContents from "./CoreValueContents";

export default function CoreValueComponent() {
  return (
    <div className="mt-24 p-4 sm:p-10">
      <h1 className="text-customGreen font-extrabold font-abrilFont text-center text-3xl sm:text-4xl">
        Our Core Value
      </h1>
      <div className="bg-customPurple rounded-2xl mt-10 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <CoreValueContents
            coreHeaderThree={"Reliability"}
            coreParagraphDetails={
              "We understand the importance of meeting client expectations and deadlines, and we strive to be a reliable partner that clients can trust by maintaining open lines of communication, adhering to our promises, and consistently delivering on our commitments."
            }
          />
          <CoreValueContents
            coreHeaderThree={"Professionalism"}
            coreParagraphDetails={
              "We hold ourselves to the highest standards of professionalism, integrity, and ethical conduct. Our team members are dedicated professionals who approach their work with a sense of responsibility, respect, and professionalism."
            }
          />
          <CoreValueContents
            coreHeaderThree={"Collaboration"}
            coreParagraphDetails={
              "We recognize that successful outcomes are often achieved through effective teamwork and collaboration. We believe in the power of diverse perspectives, ideas, and expertise coming together to drive innovation, problem-solving, and continuous improvement."
            }
          />
          <CoreValueContents
            coreHeaderThree={"Innovation"}
            coreParagraphDetails={
              "We believe that innovation is essential to staying at the forefront of the industry and providing cutting-edge solutions to our clients. We encourage a culture of creativity, curiosity, and continuous learning, empowering our team members and interns to think outside the box, challenge the status quo, and bring fresh ideas and perspectives to the table."
            }
          />
        </div>
      </div>
    </div>
  );
}

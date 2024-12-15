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
              "We understand the importance of meeting client expectations and deadlines. By maintaining open communication, honoring our promises, and consistently delivering on commitments, we strive to be a trusted and reliable partner."
            }
          />
          <CoreValueContents
            coreHeaderThree={"Professionalism"}
            coreParagraphDetails={
              "We uphold the highest standards of integrity, ethical conduct, and responsibility. Our team is committed to approaching every task with respect and dedication."
            }
          />
          <CoreValueContents
            coreHeaderThree={"Collaboration"}
            coreParagraphDetails={
              "We recognize that successful outcomes are achieved through effective teamwork. By leveraging diverse perspectives, ideas, and expertise, we drive innovation, solve problems, and foster continuous improvement."
            }
          />
          <CoreValueContents
            coreHeaderThree={"Innovation"}
            coreParagraphDetails={
              "We believe innovation is vital for remaining at the forefront of the industry and delivering impactful solutions to our clients. We foster a culture of creativity, curiosity, and continuous learning, empowering our team members and interns to challenge the status quo and contribute new ideas."
            }
          />
        </div>
      </div>
    </div>
  );
}

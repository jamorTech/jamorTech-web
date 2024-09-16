import ServiceInternship from "./ServiceInternship";

export default function ServiceBody() {
  return (
    <div className="bg-serviceGray mt-32 p-10">
        <h1 className="font-abrilFont text-customGreen text-4xl text-center font-normal">
          Internship Development
        </h1>
      <div className="mt-4">
        <p className="text-center text-customGray font-arimoFont">
          At Jamor Technology, we believe in fostering the next generation of
          tech <br />
          innovators through our comprehensive Internship Development Program.{" "}
        </p>
      </div>
      <ServiceInternship />
    </div>
  );
}

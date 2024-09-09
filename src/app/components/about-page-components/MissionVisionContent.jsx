import Content from "../Content";

export default function MissionVisionContent() {
  return (
    <div className="grid grid-cols-2 p-4 bg-customPitch mt-28 justify-center ">
      <Content
        headingStatement={"Our Mission"}
        statement={
          "Guided by our core values, we develop interns through soft skills training, mentorship, and hands-on projects, ensuring satisfaction for businesses, employers and investors with innovative tech solutions. "
        }
      />
      <Content
        headingStatement={"Our Vision"}
        statement={
          "Equipping aspiring professionals to become skilled tech innovators, in driving global business growth through hands-on projects and internships. "
        }
      />
    </div>
  );
}

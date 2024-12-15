import Content from "../Content";

export default function MissionVisionContent() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 p-4 bg-customPitch mt-28 justify-center gap-4">
      <Content
        headingStatement={"Our Mission"}
        statement={
          "Guided by our core values, we empower interns through soft skills training, mentorship, and hands-on projects. By delivering innovative tech solutions, we ensure value for businesses and investors."
        }
      />
      <Content
        headingStatement={"Our Vision"}
        statement={
          "To equip aspiring professionals to become skilled tech innovators who drive global business growth through hands-on projects and internships."
        }
      />
    </div>
  );
}

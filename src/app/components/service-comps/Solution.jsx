import Card from "./Card";
import HeaderOne from "./HeaderOne";

export default function Solution() {
  return (
    <div className="bg-customPitch p-6 sm:p-10 lg:p-20">
      <HeaderOne customHeaderOne={"Technology Solution"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        <Card
          headline={"Consultation & Support"}
          text={
            "JamorTech offers comprehensive consultation services to help businesses of all sizes achieve their technology goals. Our experienced team provides tailored solutions to address your unique challenges. From strategic planning to implementation, we're your trusted partner in navigating the complex tech landscape. Our support services ensure your business stays up and running smoothly. Benefit from our responsive help desk, proactive system maintenance, and expert technical assistance."
          }
        />
        <Card
          headline={"Website Design & Development"}
          text={
            <>
              <span>
                At JamorTech, we don't just build websites; we create digital
                platforms that captivate audiences, drive engagement, and
                deliver exceptional results. Our expert team of designers and
                developers combine creativity with cutting-edge technology to
                produce stunning websites that perfectly align with your brand's
                identity and business objectives.
                <br /> <span className="font-bold">Our Services Include:</span>
                <ul>
                  <li>Strategic Website Design</li>
                  <li>Custom Website Development</li>
                  <li>Responsive Design</li>
                  <li>E-commerce Development</li>
                </ul>
              </span>
            </>
          }
        />
        <Card
          headline={"Revamping Website"}
          text={
            <>
              <span className="font-bold">
                Is your website outdated, <br />
                underperforming, or simply not cutting it?
              </span>
              <span>
                It's time for a revamp! At JamorTech, we believe that your
                website is your digital storefront. It's the first impression
                potential customers have of your business. A well-designed,
                user-friendly website can significantly impact your brand image,
                customer engagement, and bottom line.
              </span>
              <br />
              <span className="font-bold">What we offer:</span>
              <ul>
                <li>Comprehensive website development</li>
                <li>User-centric design</li>
              </ul>
            </>
          }
        />
        <Card
          headline={"Social Media Management"}
          text={
            <>
              <span>
                Let us handle your social media so you can focus on your
                business. Our expert team will create engaging content, build a
                loyal following, and drive real results.
              </span>
              <br />
              <span className="font-bold">Benefits to Highlight:</span>
              <ul>
                <li>Increased brand awareness</li>
                <li>Enhanced customer engagement</li>
                <li>Boosted lead generation</li>
                <li>Improved website traffic</li>
                <li>Stronger brand reputation</li>
                <li>Time savings</li>
              </ul>
            </>
          }
        />
        <Card
          headline={"Digital Marketing"}
          text={
            "JamorTech offers comprehensive consultation services to help businesses of all sizes achieve their technology goals. Our experienced team provides tailored solutions to address your unique challenges. From strategic planning to implementation, we're your trusted partner in navigating the complex tech landscape. Our support services ensure your business stays up and running smoothly. Benefit from our responsive help desk, proactive system maintenance, and expert technical assistance."
          }
        />
        <Card
          headline={"Outsourcing Solution"}
          text={
            "Outsourcing is a strategic approach that allows organizations to delegate specific functions or services to external experts, thereby enabling them to focus on their core competencies. At Jamor Technology Training Organization, we have embraced outsourcing to optimize our operations, enhance our service offerings, and maintain a competitive edge in the dynamic field of tech education."
          }
        />
      </div>
    </div>
  );
}

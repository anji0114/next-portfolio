import { Mv as AboutMv } from "@/components/About/Mv";
import { Skill } from "@/components/About/Skill";

const About = () => {
  return (
    <div className="p-about">
      {/* about-mv */}
      <AboutMv />
      {/* p-about-skill */}
      <Skill />

      {/* p-profile */}
    </div>
  );
};

export default About;

import { AboutMv } from "@/components/About/Mv";
import { AboutSkill } from "@/components/About/Skill";
import { AboutProfile } from "@/components/About/Profile";

const About = () => {
  return (
    <div className="p-about">
      {/* about-mv */}
      <AboutMv />
      {/* p-about-skill */}
      <AboutSkill />

      {/* p-profile */}
      <AboutProfile />
    </div>
  );
};

export default About;

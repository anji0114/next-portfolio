import { Mv as AboutMv } from "@/components/About/Mv";
import { Profile } from "@/components/About/Profile";
import { Skill } from "@/components/About/Skill";

const About = () => {
  return (
    <div className="p-about">
      {/* about-mv */}
      <AboutMv />
      {/* p-about-skill */}
      <Skill />

      {/* p-profile */}
      <Profile />
    </div>
  );
};

export default About;

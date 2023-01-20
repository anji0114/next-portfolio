import { AboutMv } from "@/components/About/Mv";
import { AboutSkill } from "@/components/About/Skill";
import { AboutProfile } from "@/components/About/Profile";
import { Meta } from "@/components/Meta";

const About = () => {
  return (
    <>
      <Meta pageTitle="About" />
      <div className="p-about">
        <AboutMv />
        <AboutSkill />
        <AboutProfile />
      </div>
    </>
  );
};

export default About;

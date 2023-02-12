import { AboutMv } from "src/components/About/AboutMv";
import { AboutSkill } from "src/components/About/AboutSkill";
import { AboutProfile } from "src/components/About/AboutProfile";
import { Meta } from "src/components/Parts/Meta";

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

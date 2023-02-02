import { AboutMv } from "@/components/About/AboutMv";
import { AboutSkill } from "@/components/About/AboutSkill";
import { AboutProfile } from "@/components/About/AboutProfile";
import { Meta } from "@/components/Parts/Meta";

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

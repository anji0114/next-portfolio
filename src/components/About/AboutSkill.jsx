import { AboutSkillList } from "@/components/About/AboutSkillList";
import { AboutSKillPrerequisite } from "@/components/About/AboutSkillPrerequisite";

export const AboutSkill = () => {
  return (
    <div className="p-about-skill">
      <div className="p-about-skill__wrap">
        <div className="l-container">
          <div className="p-about-skill__heading">
            <h2 className="c-heading02">
              <span className="c-gradient__text-wrap" data-text="Skill">
                <span className="c-gradient__text">Skill</span>
              </span>
              &nbsp;
              <span className="c-heading02__text">Set</span>
            </h2>
            <AboutSKillPrerequisite />
          </div>
          <div className="p-about-skill__contents">
            <AboutSkillList />
          </div>
        </div>
      </div>
      <span className="p-about-skill__bg p-about-skill__bg01 c-grade__bg02--first"></span>
      <span className="p-about-skill__bg p-about-skill__bg02 c-grade__bg02--second"></span>
      <span className="p-about-skill__bg p-about-skill__bg03 c-grade__bg02--third"></span>
    </div>
  );
};

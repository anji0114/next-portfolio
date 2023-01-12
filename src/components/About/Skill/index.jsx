import { SkillList } from "@/components/About/Skill/SkillList";
import { SKillPrerequisite } from "@/components/About/Skill/SkillPrerequisite";

export const Skill = () => {
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
            <SKillPrerequisite />
          </div>
          <div className="p-about-skill__contents">
            <SkillList />
          </div>
        </div>
      </div>
      <span className="p-about-skill__bg p-about-skill__bg01 c-grade__bg02--first"></span>
      <span className="p-about-skill__bg p-about-skill__bg02 c-grade__bg02--second"></span>
      <span className="p-about-skill__bg p-about-skill__bg03 c-grade__bg02--third"></span>
    </div>
  );
};

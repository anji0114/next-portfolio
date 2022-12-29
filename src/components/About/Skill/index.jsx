import { SkillList } from "@/components/About/Skill/SkillList";

const Prerequisites = [
  {
    rate: "~ 20%",
    description: "一通りの基礎的な勉強が終了したレベル",
  },
  {
    rate: "21% ~ 40%",
    description: "一通りの基礎的な勉強が終了したレベル",
  },
  {
    rate: "41% ~ 60%",
    description: "一通りの基礎的な勉強が終了したレベル",
  },
  {
    rate: "61% ~ 80%",
    description: "一通りの基礎的な勉強が終了したレベル",
  },
  {
    rate: "81% ~ 100%",
    description: "一通りの基礎的な勉強が終了したレベル",
  },
];

export const Skill = () => {
  return (
    <div className="p-about-skill">
      <div className="l-container">
        <div className="p-about-skill__heading">
          <h2 className="c-heading02">
            <span className="c-gradient__text-wrap" data-text="Skill">
              <span className="c-gradient__text">Skill</span>
            </span>
            &nbsp;
            <span className="c-heading02__text"></span>
          </h2>
          <div className="p-about-skill__prerequisite">
            <p className="p-about-skill__prerequisite-title">
              <span>スキルレベル前提条件</span>
            </p>
            <div className="p-about-skill__prerequisite-contents">
              {Prerequisites.map(({ rate, description }) => (
                <dl key={rate} className="p-about-skill__prerequisite-list">
                  <dt className="p-about-skill__prerequisite-rate">{rate}</dt>
                  <dd className="p-about-skill__prerequisite-description">{description}</dd>
                </dl>
              ))}
            </div>
          </div>
        </div>
        <div className="p-about-skill__contents">
          <SkillList />
        </div>
      </div>
    </div>
  );
};

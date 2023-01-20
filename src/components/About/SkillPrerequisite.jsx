import { useEffect, useState } from "react";

const Prerequisites = [
  {
    rate: "~ 20%",
    description: "勉強中",
  },
  {
    rate: "21% ~ 40%",
    description: "成果物はあるが実務案件はない",
  },
  {
    rate: "41% ~ 60%",
    description: "実務使用経験あり",
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

export const SKillPrerequisite = () => {
  const [listOpen, setListOpen] = useState(false);
  const [prerequisiteHeight, setPrerequisiteHeight] = useState(0);

  const listToggle = () => {
    setListOpen(!listOpen);
  };

  useEffect(() => {
    const prerequisite = document.getElementById("skill-prerequisite");
    setPrerequisiteHeight(prerequisite.clientHeight);
  });

  return (
    <div className="p-about-skill__prerequisite">
      <p
        className={`p-about-skill__prerequisite-title ${listOpen ? "is--open" : ""}`}
        onClick={listToggle}
      >
        <span>スキルレベル前提条件</span>
      </p>
      <div
        className="p-about-skill__prerequisite-contents-wrap"
        style={{ height: listOpen ? prerequisiteHeight : 0 }}
      >
        <div className="p-about-skill__prerequisite-contents" id="skill-prerequisite">
          {Prerequisites.map(({ rate, description }) => (
            <dl key={rate} className="p-about-skill__prerequisite-list">
              <dt className="p-about-skill__prerequisite-rate">{rate}</dt>
              <dd className="p-about-skill__prerequisite-description">{description}</dd>
            </dl>
          ))}
        </div>
      </div>
    </div>
  );
};

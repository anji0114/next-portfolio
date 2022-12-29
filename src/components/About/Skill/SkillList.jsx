import Link from "next/link";

const Skills = [
  {
    label: "",
    icon: "",
    rate: 60,
  },
];

export const SkillList = () => {
  return (
    <ul className="p-about-skill__list">
      {Skills.map(({ label }) => (
        <li key={label} className="p-about-skill__item">
          <div className="p-about-skill__item-contents">
            <div className="p-about-skill__item-wrap">
              <p className="p-about-skill__item-name">
                <span className="p-about-skill__item-icon"></span>
                <span className="p-about-skill__item-text"></span>
              </p>
              <p className="p-about-skill__item-rate"></p>
            </div>
          </div>
          <p className="p-about-skill__item-url">
            使用例：<Link href=""></Link>
          </p>
        </li>
      ))}
    </ul>
  );
};

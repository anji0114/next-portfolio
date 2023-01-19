import Link from "next/link";
import "devicon";

const Skills = [
  {
    label: "Javascript",
    icon: "devicon-javascript-plain",
    rate: 80,
  },
  {
    label: "Typescript",
    icon: "devicon-typescript-plain",
    rate: 10,
  },
  {
    label: "React.js",
    icon: "devicon-react-plain",
    rate: 50,
  },
  {
    label: "Next.js",
    icon: "devicon-nextjs-plain",
    rate: 50,
  },
  {
    label: "Sass",
    icon: "devicon-sass-original",
    rate: 80,
  },
  {
    label: "Webpack",
    icon: "devicon-webpack-plain",
    rate: 40,
    example: "https://github.com/anji0114/wp-theme",
  },
  {
    label: "php",
    icon: "devicon-php-plain",
    rate: 40,
  },
  {
    label: "WordPress",
    icon: "devicon-wordpress-plain",
    rate: 50,
  },
  {
    label: "firebase",
    icon: "devicon-firebase-plain",
    rate: 50,
  },
  {
    label: "git",
    icon: "devicon-git-plain",
    rate: 70,
    example: "https://github.com/anji0114",
  },
];

export const SkillList = () => {
  return (
    <ul className="p-about-skill__list">
      {Skills.map(({ label, icon, rate, example }) => (
        <li key={label} className="p-about-skill__item">
          <div className="p-about-skill__item-contents">
            <p className="p-about-skill__item-name">
              <span className="p-about-skill__item-icon">
                <i className={icon}></i>
              </span>
              <span className="p-about-skill__item-text">{label}</span>
            </p>
            <p className="p-about-skill__item-rate">{rate}%</p>
            <span className="p-about-skill__item-bg" style={{ width: `${rate}%` }}></span>
          </div>
          <p className="p-about-skill__item-url">
            {example ? (
              <>
                使用例：
                <Link href={example} target="_blank">
                  {example}
                </Link>
              </>
            ) : undefined}
          </p>
        </li>
      ))}
    </ul>
  );
};

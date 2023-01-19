import GithubIcon from "images/icons/icon_github.svg";
import Image from "next/image";

export const HomeRepositoryItem = () => {
  return (
    <li className="p-home-repository__item">
      <h3 className="p-home-repository__name">next-portfolio</h3>
      <p className="p-home-repository__description">
        Next.js・micro
        CMSで作成したポートフォリオになります。Next.js・microCMSで作成したポートフォリオになります。
      </p>
      <div className="p-home-repository__info">
        <p className="p-home-repository__lang">JavaScript</p>
        <span className="p-home-repository__icon">
          <Image src={GithubIcon} alt="git hub" />
        </span>
      </div>
      <a href="" className="c-link__overlay"></a>
    </li>
  );
};

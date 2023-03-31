import GithubIcon from "images/icons/icon_github.svg";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type Repository = {
  name: string;
  html_url: string;
  language: string;
  description: string;
};

type Props = {
  repo: Repository;
};

export const HomeRepositoryItem: FC<Props> = ({ repo }) => {
  const { name, html_url, language, description } = repo;
  return (
    <li className="p-home-repository__item">
      <h3 className="p-home-repository__name">{name}</h3>
      <p className="p-home-repository__description">{description}</p>
      <div className="p-home-repository__info">
        <p className="p-home-repository__lang">{language}</p>
        <span className="p-home-repository__icon">
          <Image src={GithubIcon} alt="git hub" />
        </span>
      </div>
      <Link href={html_url} target="_blank" className="c-link__overlay"></Link>
    </li>
  );
};

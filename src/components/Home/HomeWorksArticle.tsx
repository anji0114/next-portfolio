import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Work } from "src/types";

export const HomeWorksArticle: FC<{ work: Work }> = ({ work }) => {
  const { thumbnail, title, description, type, id } = work;

  return (
    <article className="p-home-works__article">
      <div className="p-home-works__thumbnail">
        <Image
          src={thumbnail.url}
          width={thumbnail.width}
          height={thumbnail.height}
          alt="サムネイル"
        />
        <span className="p-home-works__arrow"></span>
      </div>
      <div className="p-home-works__content">
        <h3 className="p-home-works__title">{title}</h3>
        <p className="p-home-works__description">{description}</p>
        <p className="p-home-works__type">{type}</p>
      </div>
      <Link href={`/works/${id}`} className="c-link__overlay"></Link>
    </article>
  );
};

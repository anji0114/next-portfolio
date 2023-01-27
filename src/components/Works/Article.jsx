import { ConvertDate } from "@/components/ConvertDate";
import Image from "next/image";
import Link from "next/link";

export const WorksArticle = (props) => {
  const { thumbnail, publishDate, title, description, categories, id } = props.work;

  return (
    <article className="p-works-article">
      <div className="p-works-article__thumbnail">
        <div className="p-works-article__thumbnail-wrap">
          <Image
            src={thumbnail.url}
            width={thumbnail.width}
            height={thumbnail.height}
            alt="サムネイル"
          />
        </div>
      </div>
      <div className="p-works-article__contents">
        <div className="p-works-article__content">
          <p className="p-works-article__time">{/* <ConvertDate time={publishDate} /> */}</p>
          <h3 className="p-works-article__title">{title}</h3>
          <p className="p-works-article__description">{description}</p>
        </div>
        <ul className="p-works-article__categories">
          {categories.map((category) => (
            <li className="p-works-article__category" key={category.id}>
              <Link href={`/works/category/${category.id}`}>{category.name}</Link>
            </li>
          ))}
        </ul>
        <span className="p-works-article__arrow"></span>
      </div>
      <Link href={`/works/${id}`} className="c-link__overlay"></Link>
    </article>
  );
};

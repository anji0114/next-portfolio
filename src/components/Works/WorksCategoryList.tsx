import Link from "next/link";
import { FC } from "react";
import { Category } from "src/types";

type Props = {
  categories: Category[];
};

export const WorksCategoryList: FC<Props> = ({ categories }) => {
  return (
    <div className="p-works-category">
      <ul className="p-works-category__list">
        <li className="p-works-category__item">
          <Link href="/works">ALL</Link>
        </li>
        {categories.map(({ id, name }) => (
          <li className="p-works-category__item" key={id}>
            <Link href={`/works/category/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

import Link from "next/link";
import { FC } from "react";

type Category = {
  id: string;
  name: string;
};

type Props = {
  categories: Category[];
};

export const WorkCategoryList: FC<Props> = ({ categories }) => {
  return (
    <ul className="p-work-top__categories">
      {categories.map(({ id, name }) => (
        <li className="p-work-top__category" key={id}>
          <Link href={`/works/category/${id}`}>{name}</Link>
        </li>
      ))}
    </ul>
  );
};

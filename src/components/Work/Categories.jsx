import Link from "next/link";

export const WorkCategories = ({ categories }) => {
  return (
    <ul className="p-work-top__categories">
      {categories.map(({ id, name }) => (
        <li className="p-work-top__category">
          <Link href={`/works/category/${id}`}>{name}</Link>
        </li>
      ))}
    </ul>
  );
};

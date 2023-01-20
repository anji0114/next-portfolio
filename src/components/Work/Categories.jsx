import Link from "next/link";

export const WorkCategories = (props) => {
  const { categories } = props
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
import Link from "next/link";

export const Categories = (props) => {
  const { categories } = props;
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

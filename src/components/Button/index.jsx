import Link from "next/link";

export const Button = (props) => {
  const { url, children } = props;

  return (
    <Link href={url} className="c-button01">
      <span className="c-button01__wrap">
        <span className="c-button01__text">{children}</span>
      </span>
    </Link>
  );
};

import Link from "next/link";

export const SnsLink = (props) => {
  const { url, children } = props;
  return (
    <Link className="c-sns__icon" href={url} target="_blank">
      {children}
    </Link>
  );
};

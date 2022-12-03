import Link from "next/link";

export const SnsLink = ({ url, children }) => {
  return (
    <Link className="c-sns__icon" href={url} target="_blank">
      {children}
    </Link>
  );
};

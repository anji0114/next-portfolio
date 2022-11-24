import Link from "next/link";

export const SnsLink = (props) => {
  return (
    <Link className="c-sns__icon" href={props.url} target="_blank">
      {props.children}
    </Link>
  );
};

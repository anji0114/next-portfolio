import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  url: string;
  children: ReactNode;
  targetBool?: boolean;
};

export const Button = ({ url, children, targetBool }: Props): JSX.Element => {
  return (
    <Link href={url} className="c-button01" target={targetBool ? "_blank" : ""}>
      <span className="c-button01__wrap">
        <span className="c-button01__text">{children}</span>
        <span className="c-button01__wrap-bg c-button01__wrap-bg01"></span>
        <span className="c-button01__wrap-bg c-button01__wrap-bg02"></span>
        <span className="c-button01__wrap-bg c-button01__wrap-bg03"></span>
      </span>
    </Link>
  );
};

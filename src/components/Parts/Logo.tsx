import Image from "next/image";
import Link from "next/link";
import logoDark from "images/icons/logo-dark.svg";
import logoLight from "images/icons/logo-light.svg";

export const Logo = (): JSX.Element => {
  return (
    <Link href={"/"} className="c-logo">
      <div className="c-logo__image-wrap">
        <Image alt="" src={logoDark} className="c-logo__image is--dark" />
        <Image alt="" src={logoLight} className="c-logo__image is--light" />
      </div>
      <p className="c-logo__text">ANJI TANAKA</p>
    </Link>
  );
};

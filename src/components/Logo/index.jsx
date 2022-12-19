import Image from "next/image";
import Link from "next/link";
import logoBlack from "images/icons/logo-black.svg";

export const Logo = () => {
  return (
    <Link href={"/"} className="c-logo">
      <Image alt="" src={logoBlack} />
      <p className="c-logo__text">ANJI TANAKA</p>
    </Link>
  );
};

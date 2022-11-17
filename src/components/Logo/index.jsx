import Image from "next/image";
import Link from "next/link";
import logoBlack from "images/logo-black.svg";

export const Logo = () => {
  return (
    <Link href={"/"} className="c-logo">
      <Image src={logoBlack} alt="" priority />
      <p className="c-logo__text">ANJI TANAKA</p>
    </Link>
  );
};

import Image from "next/image";
import Link from "next/link";
import LogoBlack from "images/icons/logo-black.svg";

export const Logo = () => {
  return (
    <Link href={"/"} className="c-logo">
      <Image src={LogoBlack} alt="ロゴ" />

      <p className="c-logo__text">ANJI TANAKA</p>
    </Link>
  );
};

import { FooterContact } from "@/components/Footer/Contact";
import { Logo } from "@/components/Logo";
import { SnsLinks } from "@/components/SnsLinks";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="l-footer">
      <FooterContact />
      <div className="l-container">
        <div className="l-footer__inner">
          <div className="l-footer__contents">
            <div className="l-footer__logo">
              <Logo />
            </div>
            <div className="l-footer__links">
              <SnsLinks />
            </div>
          </div>
          <p className="l-footer__bottom">
            <span className="l-footer__privacy">©︎2023 Anji Tanaka</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

import { FooterContact } from "src/components/Footer/FooterContact";
import { Logo } from "src/components/Parts/Logo";
import { SnsLink } from "src/components/Parts/SnsLink";

export const Footer = (): JSX.Element => {
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
              <SnsLink />
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

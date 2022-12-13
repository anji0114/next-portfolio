import { Contact } from "@/components/Footer/Contact";
import { Logo } from "@/components/Logo";
import { SnsLinks } from "@/components/SnsLinks";

export const Footer = () => {
  return (
    <footer className="l-footer">
      <Contact />
      <div className="l-container">
        <div className="l-footer__contents">
          <div className="l-footer__logo">
            <Logo />
          </div>
          <div className="l-footer__links">
            <SnsLinks />
          </div>
        </div>
      </div>
    </footer>
  );
};

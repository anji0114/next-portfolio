import { Contact } from "@/components/Footer/Contact";
import { Logo } from "@/components/Logo";
import { SnsLinks } from "@/components/SnsLinks";

export const Footer = () => {
  return (
    <footer className="l-footer">
      <Contact />
      <div className="l-footer__inner">
        {/* logo */}
        <Logo />

        <SnsLinks />
      </div>
    </footer>
  );
};

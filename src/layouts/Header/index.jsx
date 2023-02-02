import { Logo } from "@/components/Parts/Logo";
import { HeaderThemeChange } from "src/layouts/Header/HeaderThemeChange";
import { HeaderNav } from "src/layouts/Header/HeaderNav";

export const Header = () => {
  return (
    <header className="l-header">
      <div className="l-header__inner">
        <Logo />
        <HeaderThemeChange />
        <HeaderNav />
      </div>
    </header>
  );
};


import { Logo } from "@/components/Logo";
import { HeaderThemeChange } from "@/components/Header/ThemeChange";
import { HeaderNav } from "@/components/Header/Nav";

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

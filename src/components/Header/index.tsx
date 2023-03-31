import { Logo } from "src/components/Parts/Logo";
import { HeaderThemeChange } from "src/components/Header/HeaderThemeChange";
import { HeaderNav } from "src/components/Header/HeaderNav";

export const Header = (): JSX.Element => {
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

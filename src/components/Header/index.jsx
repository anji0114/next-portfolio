import { Nav } from "@/components/Header/Nav";
import { Logo } from "@/components/Logo";

export const Header = () => {
  return (
    <header className="l-header">
      <div className="l-header__inner">
        <Logo />
        <Nav />
      </div>
    </header>
  );
};

import { Navbar } from "@/components/Header/Navbar";
import { Logo } from "@/components/Logo";

export const Header = () => {
  return (
    <header className="l-header">
      <div className="l-header__inner">
        <Logo />

        {/* switch light */}
        {/* navbar */}
        <Navbar />
      </div>
    </header>
  );
};

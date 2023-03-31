import Image from "next/image";
import iconDark from "images/icons/icon_dark.svg";
import iconLight from "images/icons/icon_light.svg";
import { useTheme } from "next-themes";

export const HeaderThemeChange = (): JSX.Element => {
  const { theme, setTheme } = useTheme();

  const handleChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="l-header__theme-change">
      <div className="l-header__theme-change-icon is--light">
        <Image src={iconLight} alt="" />
      </div>
      <div className="l-header__theme-change-wrap">
        <div className="l-header__theme-change-switch">
          <button className="l-header__theme-change-slider" onClick={handleChangeTheme}></button>
        </div>
      </div>
      <div className="l-header__theme-change-icon">
        <Image src={iconDark} alt="" />
      </div>
    </div>
  );
};
import Image from "next/image";
import { useState } from "react";
import { useDarkMode } from "src/hooks/useDarkMode";
import iconDark from "images/icons/icon_dark.svg";
import iconLight from "images/icons/icon_light.svg";

export const HeaderThemeChange = () => {
  const [colorTheme, setColorTheme] = useDarkMode();
  const [sliderChecked, setSliderChecked] = useState(colorTheme === "dark" ? true : false);

  const handleThemeChange = () => {
    setSliderChecked(!sliderChecked);

    if (colorTheme === "dark") {
      setColorTheme("light");
    } else {
      setColorTheme("dark");
    }
  };

  return (
    <div className="l-header__theme-change">
      <div className="l-header__theme-change-icon is--light">
        <Image src={iconLight} alt="" />
      </div>
      <div className="l-header__theme-change-wrap">
        <div className="l-header__theme-change-switch">
          <button className="l-header__theme-change-slider" onClick={handleThemeChange}></button>
        </div>
      </div>
      <div className="l-header__theme-change-icon">
        <Image src={iconDark} alt="" />
      </div>
    </div>
  );
};
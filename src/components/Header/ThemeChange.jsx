import { useState } from "react";
import { useDarkMode } from "src/hooks/useDarkMode";

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
      <div className="l-header__theme-change-wrap">
        <label className="l-header__theme-change-switch">
          <input
            type="checkbox"
            className="l-header__theme-change-check"
            onChange={handleThemeChange}
            checked={sliderChecked}
          />
          <span className="l-header__theme-change-slider"></span>
        </label>
      </div>
    </div>
  );
};

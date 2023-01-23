import { useDarkMode } from "src/hooks/useDarkMode";

import Image from "next/image";
import lightLogo from "images/icons/logo_mv-light.svg";
import darkLogo from "images/icons/logo_mv-dark.svg";
import { useEffect } from "react";

export const HomeMv = () => {
  const [colorTheme, setColorTheme] = useDarkMode();

  useEffect(() => {
    setColorTheme(colorTheme);
  }, [colorTheme]);

  return (
    <div className="p-home-mv">
      <div className="p-home-mv__wrap">
        {/* inner */}
        <div className="p-home-mv__inner">
          <div className="p-home-mv__content">
            <p className="p-home-mv__title">
              <span
                className="p-home-mv__title-text p-home-mv__title-text01"
                data-text="Welcome to"
              >
                Welcome to
              </span>
              <br />
              <span className="p-home-mv__title-text p-home-mv__title-text02" data-text="My">
                My
              </span>
              &nbsp;
              <span className="p-home-mv__title-text p-home-mv__title-text03" data-text="PortFolio">
                PortFolio
              </span>
            </p>
            <p className="p-home-mv__text">
              <span className="c-gradient__text-wrap" data-text="TANAKA ANJI">
                <span className="c-gradient__text">TANAKA ANJI</span>
              </span>
              <br />
              <span className="c-gradient__text-wrap" data-text="Front-end Developer">
                <span className="c-gradient__text">Front-end Developer</span>
              </span>
            </p>
          </div>
        </div>
        {/* image */}
        <div className="p-home-mv__image-wrap">
          <Image
            src={darkLogo}
            alt="site logo"
            width={darkLogo.width}
            height={darkLogo.height}
            priority
            unoptimized
            className="p-home-mv__image is--dark"
          />
          <Image
            src={lightLogo}
            alt="site logo"
            width={lightLogo.width}
            height={lightLogo.height}
            priority
            unoptimized
            className="p-home-mv__image is--light"
          />
        </div>
        <div className="p-home-mv__scroll">
          <span className="p-home-mv__scroll-bar"></span>
          <span className="p-home-mv__scroll-text">Scroll</span>
        </div>
      </div>
    </div>
  );
};

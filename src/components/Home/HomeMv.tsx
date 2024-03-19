import Image from "next/image";
import lightLogo from "src/images/icons/logo_mv-light.svg";
import darkLogo from "src/images/icons/logo_mv-dark.svg";
import githubIcon from "src/images/icons/icon_github.svg";
import zennIcon from "src/images/icons/icon_zenn.svg";
import gatherIcon from "src/images/icons/icon_gather.svg";
import Link from "next/link";

export const HomeMv = (): JSX.Element => {
  return (
    <div className="p-home-mv">
      {/* inner */}
      <div className="p-home-mv__inner">
        <div className="p-home-mv__content">
          <p className="p-home-mv__title">
            <span className="p-home-mv__title-text p-home-mv__title-text01" data-text="Tanaka">
              Tanaka&nbsp;
            </span>
            <span className="p-home-mv__title-text p-home-mv__title-text02" data-text="Anji’s">
              Anji’s
            </span>
            <br />
            <span className="p-home-mv__title-text p-home-mv__title-text03" data-text="PortFolio">
              PortFolio
            </span>
          </p>
        </div>
        <div className="p-home-mv__scroll">
          <span className="p-home-mv__scroll-bar"></span>
          <span className="p-home-mv__scroll-text">Scroll</span>
        </div>
      </div>
    </div>
  );
};

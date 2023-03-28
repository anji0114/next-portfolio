import Image from "next/image";
import lightLogo from "images/icons/logo_mv-light.svg";
import darkLogo from "images/icons/logo_mv-dark.svg";

export const HomeMv = (): JSX.Element => {
  return (
    <div className="p-home-mv">
      <div className="p-home-mv__wrap">
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
            <p className="p-home-mv__text">
              Developed by
              <br />
              <span className="c-gradient__text-wrap" data-text="React.js / Next.js / Typescript / microCMS">
                <span className="c-gradient__text">React.js / Next.js / Typescript / microCMS</span>
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

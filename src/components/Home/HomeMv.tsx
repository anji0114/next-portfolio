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
              <Link
                href="https://github.com/anji0114/next-portfolio"
                className="p-home-mv__link"
                target="_blank"
              >
                <Image src={githubIcon} alt="" width={30} height={30} />
                ポートフォリオ使用技術
              </Link>
              <br />
              <span
                className="c-gradient__text-wrap"
                data-text="React.js / Next.js / Typescript / microCMS"
              >
                <span className="c-gradient__text">React.js / Next.js / Typescript / microCMS</span>
              </span>
            </p>
            <div className="p-home-mv__links">
              <Link
                href="https://zenn.dev/anji_dev/books/c57b80fc8fc403"
                className="p-home-mv__link p-home-mv__links-item"
                target="_blank"
              >
                <Image src={zennIcon} alt="" width={30} height={30} />
                Zenn Books
              </Link>

              <Link
                href="https://gathernote.vercel.app/"
                className="p-home-mv__link p-home-mv__links-item"
                target="_blank"
              >
                <Image src={gatherIcon} alt="" width={30} height={30} />
                個人開発アプリ
              </Link>
            </div>
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

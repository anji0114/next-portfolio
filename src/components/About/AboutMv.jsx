import Image from "next/image";
import profileImage from "images/img_profile01.jpg";

export const AboutMv = () => {
  return (
    <div className="p-about-mv">
      <div className="l-container">
        <div className="p-about-mv__inner">
          <div className="p-about-mv__contents">
            <h1 className="p-about-mv__heading">
              <span className="c-gradient__text-wrap" data-text="ANJI TANAKA">
                <span className="c-gradient__text">ANJI TANAKA</span>
              </span>
            </h1>
            <div className="p-about-mv__image">
              <Image
                src={profileImage}
                alt="プロフィール写真"
                placeholder="blur"
                width={profileImage.width}
                height={profileImage.height}
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-about-mv__scroll">
        <span className="p-about-mv__scroll-bar"></span>
        <span className="p-about-mv__scroll-text">SCROLL</span>
      </div>
    </div>
  );
};

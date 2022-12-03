import LogoMv from "images/logo_mv.svg";

export const Mv = () => {
  return (
    <div className="p-mv">
      <div className="p-mv__wrap">
        {/* inner */}
        <div className="p-mv__inner">
          <div className="p-mv__content">
            <p className="p-mv__title">
              <span>Welcome</span>&nbsp;
              <span>to</span>
              <br />
              <span>My</span>&nbsp;
              <span>PortFolio</span>
            </p>
            <p className="p-mv__text">
              <span>TANAKA ANJI</span>
              <br />
              <span>Front-end Developer</span>
            </p>
          </div>
        </div>
        {/* image */}
        <div className="p-mv__image">
          <LogoMv />
        </div>
      </div>
    </div>
  );
};

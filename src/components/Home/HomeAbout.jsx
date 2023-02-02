import { Button } from "@/components/Parts/Button";

export const HomeAbout = () => {
  return (
    <section className="p-home-about">
      <div className="l-container">
        <div className="p-home-about__row">
          {/* heading */}
          <h2 className="p-home-about__heading c-heading01">
            <span className="c-gradient__text-wrap" data-text="About">
              <span className="c-gradient__text">About</span>
            </span>
            &nbsp;
            <span className="c-heading01__text">Me</span>
          </h2>
          {/* content */}
          <div className="p-home-about__contents">
            <p className="p-home-about__text">
              2002年、埼玉生まれ。高校を卒業後、電子部品メーカーに就職し、約１年半技能職として工場に勤めました。その期間、独学でプログラミングを学び、2021年11月よりWeb制作フリーランスとして活動しております。
            </p>
            <div className="p-home-about__button-wrap">
              <Button url={"/about"}>View About</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

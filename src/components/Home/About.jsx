import { Button } from "@/components/Button";

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
              Lorem ipsum dolor sit amet consectetur adipisicing elit text text Consequuntur dolore
              porro,
              <br />
              consectetur quidem dolores laborum inventore architecto repudiandae neque nisi
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

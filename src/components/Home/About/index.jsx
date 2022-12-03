import Link from "next/link";

export const About = () => {
  return (
    <section className="p-index-about">
      <div className="l-container">
        <div className="p-index-about__row">
          {/* heading */}
          <h2 className="p-index-about__heading c-heading01">
            <span className="c-gradient__text">About</span>&nbsp;
            <span className="c-heading01__text">Me</span>
          </h2>
          {/* content */}
          <div className="p-index-about__contents">
            <p className="p-index-about__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolore porro,
              <br />
              consectetur quidem dolores laborum inventore architecto repudiandae neque nisi
            </p>
            <div className="p-index-about__button c-button01__wrap">
              <Link href={"/about"} className="c-button01">
                <span>View About</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

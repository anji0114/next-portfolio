import Link from "next/link";

export const Works = () => {
  return (
    <section className="p-index-works">
      <div className="l-container">
        {/* heading */}
        <h2 className="p-index-about__heading c-heading01">
          <span className="c-heading01__text">My</span>
          <span className="c-gradient__text">Works</span>&nbsp;
        </h2>
        <div className="p-index-works__contents">
          <div className="p-index-works__articles"></div>
          <div className="p-index-works__button-wrap c-button01__wrap">
            <Link href={"/works"} className="c-button01">
              <span>View Works</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

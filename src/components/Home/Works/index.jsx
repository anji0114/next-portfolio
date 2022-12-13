import { Button } from "@/components/Button";
import { WorksArticle } from "@/components/Home/Works/WorksArticle";

export const Works = () => {
  return (
    <section className="p-home-works">
      <div className="l-container">
        {/* heading */}
        <h2 className="p-home-about__heading c-heading01 c-heading01--center">
          <span className="c-heading01__text">My</span>&nbsp;
          <span className="c-gradient__text">Works</span>
        </h2>
        <div className="p-home-works__contents">
          <div className="p-home-works__articles">
            <WorksArticle />
            <WorksArticle />
            <WorksArticle />
            <WorksArticle />
            <WorksArticle />
            <WorksArticle />
          </div>
          <div className="p-home-works__button-wrap">
            <Button url={"/works"}>View Works</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

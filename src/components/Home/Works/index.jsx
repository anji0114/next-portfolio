import { Button } from "@/components/Button";
import { WorksArticle } from "@/components/Home/Works/WorksArticle";

export const Works = () => {
  return (
    <section className="p-index-works">
      <div className="l-container">
        {/* heading */}
        <h2 className="p-index-about__heading c-heading01 c-heading01--center">
          <span className="c-heading01__text">My</span>
          <span className="c-gradient__text">Works</span>&nbsp;
        </h2>
        <div className="p-index-works__contents">
          <div className="p-index-works__articles">
            <WorksArticle />
            <WorksArticle />
            <WorksArticle />
            <WorksArticle />
            <WorksArticle />
            <WorksArticle />
          </div>
          <div className="p-index-works__button-wrap">
            <Button url={"/works"}>View Works</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

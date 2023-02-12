import { Button } from "src/components/Parts/Button";
import { HomeWorksArticle } from "src/components/Home/HomeWorksArticle";

export const HomeWorks = (props) => {
  const { works } = props;

  return (
    <section className="p-home-works">
      <div className="l-container">
        {/* heading */}
        <h2 className="p-home-works__heading c-heading01">
          <span className="c-heading01__text">My</span>&nbsp;
          <span className="c-gradient__text-wrap" data-text="Works">
            <span className="c-gradient__text">Works</span>
          </span>
        </h2>
        <div className="p-home-works__contents">
          <div className="p-home-works__articles">
            {works.map((work) => (
              <HomeWorksArticle work={work} key={work.id} />
            ))}
          </div>
          <div className="p-home-works__button-wrap">
            <Button url={"/works"}>View Works</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

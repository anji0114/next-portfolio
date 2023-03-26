import { Button } from "src/components/Parts/Button";
import { HomeWorksArticle } from "src/components/Home/HomeWorksArticle";
import { FC } from "react";
import { Work } from "src/types";

export const HomeWorks: FC<{ works: Work[] }> = ({ works }) => {
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
        <p className="c-heading01__description">制作実績</p>
        <div className="p-home-works__contents">
          <div className="p-home-works__articles">
            {works.map((work) => (
              <HomeWorksArticle work={work} key={work.id} />
            ))}
          </div>
          <div className="p-home-works__button-wrap">
            <Button url={"/works"}>詳しく見る</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

import { FC } from "react";
import { WorksArticle } from "src/components/Works/WorksArticle";
import { WorksCategoryList } from "src/components/Works/WorksCategoryList";
import { Category, Work } from "src/types";

type Props = {
  works: Work[];
  categories: Category[];
};

export const WorksArchive: FC<Props> = ({ works, categories }) => {
  return (
    <div className="p-works">
      <div className="p-works__wrap">
        <div className="l-container">
          <h2 className="c-heading01">
            <span className="c-heading01__text">My</span>
            &nbsp;
            <span className="c-gradient__text-wrap" data-text="Works">
              <span className="c-gradient__text">Works</span>
            </span>
          </h2>
          <div className="p-works__contents">
            <aside className="p-works__aside">
              <WorksCategoryList categories={categories} />
            </aside>
            <main className="p-works__main">
              <div className="p-works-articles">
                {works.map((work) => (
                  <WorksArticle work={work} key={work.id} />
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

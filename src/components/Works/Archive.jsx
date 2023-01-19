import { WorksArticle } from "@/components/Works/Article";
import { Categories } from "@/components/Works/Categories";

export const WorksArchive = (props) => {
  const { works, categories } = props;

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
              <Categories categories={categories} />
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

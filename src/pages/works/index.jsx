import { Articles } from "@/components/Works/Articles";
import { Categories } from "@/components/Works/Categories";

const Works = () => {
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
              <Categories />
            </aside>
            <main className="p-works__main">
              <Articles />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;

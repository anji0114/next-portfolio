import { RepositoryList } from "src/components/Home/HomeRepositoryList";
import { Button } from "src/components/Parts/Button";

export const HomeRepository = () => {
  return (
    <section className="p-home-repository">
      <div className="l-container">
        <h2 className="c-heading01 p-home-repository__heading">
          <span className="c-heading01__text">My</span>&nbsp;
          <span className="c-gradient__text-wrap" data-text="Repository">
            <span className="c-gradient__text">Repository</span>
          </span>
        </h2>
        <div className="p-home-repository__contents">
          <RepositoryList />
          <div className="p-home-repository__button-wrap">
            <Button url={"https://github.com/anji0114?tab=repositories"} targetBool={true}>
              View Repository
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

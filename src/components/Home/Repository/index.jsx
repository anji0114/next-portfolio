import { RepositoryItem } from "@/components/Home/Repository/RepositoryItem";
import { Button } from "@/components/Button";

export const Repository = () => {
  return (
    <section className="p-home-repository">
      <div className="l-container">
        <h2 className="c-heading01 p-home-repository__heading">
          <span className="c-heading01__text">My</span>&nbsp;
          <span className="c-gradient__text">Repository</span>
        </h2>

        <div className="p-home-repository__contents">
          <ul className="p-home-repository__list">
            <RepositoryItem />
            <RepositoryItem />
            <RepositoryItem />
            <RepositoryItem />
            <RepositoryItem />
            <RepositoryItem />
          </ul>
          <div className="p-home-repository__button-wrap">
            <Button url={"/works"}>View Repository</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

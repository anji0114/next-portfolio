import { getAllWorks } from "src/libs/client";

import { HomeMv } from "src/components/Home/HomeMv";
import { HomeAbout } from "src/components/Home/HomeAbout";
import { HomeWorks } from "src/components/Home/HomeWorks";
import { HomeRepository } from "src/components/Home/HomeRepository";
import { Meta } from "src/components/Parts/Meta";

const Home = (props) => {
  const { works } = props;

  return (
    <>
      <Meta />
      <div className="p-index">
        <HomeMv />
        <HomeAbout />
        <HomeWorks works={works} />
        <HomeRepository />
      </div>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const works = await getAllWorks(6);

  return {
    props: { works: works },
  };
};

import { getAllWorks } from "src/libs/client";

import { HomeMv } from "@/components/Home/HomeMv";
import { HomeAbout } from "@/components/Home/HomeAbout";
import { HomeWorks } from "@/components/Home/HomeWorks";
import { HomeRepository } from "@/components/Home/HomeRepository";
import { Meta } from "@/components/Parts/Meta";

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

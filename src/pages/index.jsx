import { getAllWorks } from "src/libs/client";

import { HomeMv } from "@/components/Home/Mv";
import { HomeAbout } from "@/components/Home/About";
import { HomeWorks } from "@/components/Home/Works";
import { HomeRepository } from "@/components/Home/Repository";

const Home = (props) => {
  const { works } = props;

  return (
    <div className="p-index">
      <HomeMv />
      <HomeAbout />
      <HomeWorks works={works} />
      <HomeRepository />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const works = await getAllWorks(6);

  return {
    props: { works: works },
  };
};

import { GetStaticProps, NextPage } from "next";
import { getAllWorks } from "src/libs/client";
import { HomeMv } from "src/components/Home/HomeMv";
import { HomeWorks } from "src/components/Home/HomeWorks";
import { HomeRepository } from "src/components/Home/HomeRepository";
import { Meta } from "src/components/Parts/Meta";
import { Work } from "src/types";

const Home: NextPage<{ works: Work[] }> = ({ works }) => {
  return (
    <>
      <Meta />
      <div className="p-index">
        <HomeMv />
        <HomeWorks works={works} />
        <HomeRepository />
      </div>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const works = await getAllWorks(6);

  return {
    props: { works },
  };
};

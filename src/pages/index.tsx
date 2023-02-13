import { GetStaticProps, NextPage } from "next";
import { getAllWorks } from "src/libs/client";

import { HomeMv } from "src/components/Home/HomeMv";
import { HomeAbout } from "src/components/Home/HomeAbout";
import { HomeWorks } from "src/components/Home/HomeWorks";
import { HomeRepository } from "src/components/Home/HomeRepository";
import { Meta } from "src/components/Parts/Meta";

export type Works = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  type: string[];
  publishDate: string;
  thumbnail: any;
  description: string;
  details?: any[];
  content: string;
  categories: any[];
};

const Home: NextPage<{ works: Works[] }> = ({ works }) => {
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

export const getStaticProps: GetStaticProps = async () => {
  const works = await getAllWorks(6);

  return {
    props: { works: works },
  };
};

import { Mv } from "@/components/Home/Mv";
import { About } from "@/components/Home/About";
import { Works } from "@/components/Home/Works";
import { Repository } from "@/components/Home/Repository";
import { client } from "src/libs/client";

const Home = ({ works }) => {
  return (
    <div className="p-index">
      <Mv />
      <About />
      <Works works={works} />
      <Repository />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const works = await client.getList({ endpoint: "works" });

  return {
    props: { works: works },
  };
};

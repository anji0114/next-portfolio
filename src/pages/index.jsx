import { Mv } from "@/components/Home/Mv";
import { About } from "@/components/Home/About";
import { Works } from "@/components/Home/Works";
import { Repository } from "@/components/Home/Repository";
import { client } from "src/libs/client";

const Home = (props) => {
  return (
    <div className="p-index">
      <Mv />
      <About />
      <Works works={props} />
      <Repository />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const data = await client.getList({ endpoint: "works" });

  return {
    props: data,
  };
};

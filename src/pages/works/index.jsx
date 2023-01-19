import { WorksArchive } from "@/components/Works/Archive";
import { getAllCategory, getAllWorks } from "src/libs/client";

const Works = (props) => {
  const { works, categories } = props;

  return <WorksArchive works={works} categories={categories} />;
};

export default Works;

export const getStaticProps = async () => {
  const works = await getAllWorks();
  const categories = await getAllCategory();

  return {
    props: { works: works, categories: categories },
  };
};

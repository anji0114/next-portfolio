import { Meta } from "src/components/Parts/Meta";
import { WorksArchive } from "src/components/Works/WorksArchive";
import { getAllCategory, getAllWorks } from "src/libs/client";

type Props = {
  works: [];
  categories: [];
};

const Works = ({ works, categories }: Props) => {
  return (
    <>
      <Meta pageTitle="Works" noindex={true} />
      <WorksArchive works={works} categories={categories} />
    </>
  );
};

export default Works;

export const getStaticProps = async () => {
  const works = await getAllWorks();
  const categories = await getAllCategory();

  return {
    props: { works: works, categories: categories },
  };
};

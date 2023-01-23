import { Meta } from "@/components/Meta";
import { WorksArchive } from "@/components/Works/Archive";
import { client, getAllCategory } from "src/libs/client";

const WorksCategory = (props) => {
  const { works, categories } = props;

  return (
    <>
      <Meta pageTitle="Works" noindex={true} />
      <WorksArchive works={works} categories={categories} />
    </>
  );
};

export default WorksCategory;

// paths
export const getStaticPaths = async () => {
  const data = await getAllCategory();
  const ids = data.map((content) => `/works/category/${content.id}`);

  return {
    paths: ids,
    fallback: false,
  };
};

// works category 取得
export const getStaticProps = async (contexts) => {
  // categoryに紐ずくworks取得
  const id = contexts.params.id;
  const works = await client.get({
    endpoint: "works",
    queries: { filters: `categories[contains]${id}` },
  });

  // category取得
  const categories = await getAllCategory();

  return {
    props: { works: works.contents, categories: categories },
  };
};

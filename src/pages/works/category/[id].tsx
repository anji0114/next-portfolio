import { GetStaticProps, NextPage } from "next";
import { Meta } from "src/components/Parts/Meta";
import { WorksArchive } from "src/components/Works/WorksArchive";
import { client, getAllCategory } from "src/libs/client";


type Props = {
  works: []
  categories: []
}

const WorksCategory: NextPage<Props> = (props) => {
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
  const ids: string[] = data.map((content: { id: string }) => `/works/category/${content.id}`);

  return {
    paths: ids,
    fallback: false,
  };
};

// works category 取得
export const getStaticProps = async (contexts: any) => {
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

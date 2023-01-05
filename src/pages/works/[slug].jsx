import { client } from "src/libs/client";

const worksSlug = () => {
  return (
    <div className="p-work">
      <div>test</div>
      <div>test</div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const works = await client.getList({ endpoint: "works" });

  return {
    props: { props },
  };
};

export default worksSlug;

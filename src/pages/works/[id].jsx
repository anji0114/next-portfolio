import { client } from "src/libs/client";

import { Button } from "@/components/Button";
import { ConvertDate } from "@/components/ConvertDate";
import { WorkCategories } from "@/components/Work/Categories";
import { WorkInfo } from "@/components/Work/Info";

const worksSlug = ({ title, type, publishDate, description, details, content, categories }) => {
  return (
    <div className="p-work">
      <div className="l-container">
        <div className="p-work__inner">
          <div className="p-work-top">
            <div className="p-work-top__heading">
              <div className="p-work-top__title">{title}</div>
              <time className="p-work-top__date">
                <ConvertDate time={publishDate} />
              </time>
            </div>
            <WorkCategories categories={categories} />
            <p className="p-work-top__description">{description}</p>
          </div>

          <WorkInfo type={type} details={details} />

          <main className="p-work-main">
            <div className="p-work-main__contents" dangerouslySetInnerHTML={{ __html: content }} />
            <div className="p-works-main__button-wrap">
              <Button url={"/works"}>View Works</Button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const data = await client.getList({ endpoint: "works" });
  const ids = data.contents.map((content) => `/works/${content.id}`);

  return {
    paths: ids,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  if (!context.params) {
    return {
      notFound: true,
    };
  }

  const data = await client.get({ endpoint: "works", contentId: context.params.id });

  return {
    props: data,
  };
};

export default worksSlug;

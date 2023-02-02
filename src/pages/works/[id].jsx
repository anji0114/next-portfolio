import { client, getAllWorks } from "src/libs/client";
import { Button } from "@/components/Parts/Button";
import { ConvertDate } from "@/components/Parts/ConvertDate";
import { WorkCategoryList } from "@/components/Work/WorkCategoryList";
import { WorkInfo } from "@/components/Work/WorkInfo";
import { Meta } from "@/components/Parts/Meta";

const WorksId = (props) => {
  const { title, thumbnail, type, publishDate, description, details, content, categories } = props;
  return (
    <>
      <Meta
        pageTitle={title}
        pageDescription={description}
        pageImg={thumbnail.url}
        pageImgWidth={thumbnail.width}
        pageImgHeight={thumbnail.height}
        noindex={true}
      />

      <div className="p-work">
        <div className="l-container">
          <div className="p-work__inner">
            {/* top */}
            <div className="p-work-top">
              <div className="p-work-top__heading">
                <div className="p-work-top__title">{title}</div>
                <p className="p-work-top__date">
                  <ConvertDate time={publishDate} />
                </p>
              </div>
              <WorkCategoryList categories={categories} />
              <p className="p-work-top__description">{description}</p>
            </div>

            {/* detail */}
            <WorkInfo type={type} details={details} />

            {/* main */}
            <main className="p-work-main">
              <div
                className="p-work-main__contents"
                dangerouslySetInnerHTML={{ __html: content }}
              />
              <div className="p-works-main__button-wrap">
                <Button url={"/works"}>View Works</Button>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const data = await getAllWorks();
  const ids = data.map((content) => `/works/${content.id}`);

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

export default WorksId;

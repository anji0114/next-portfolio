import Link from "next/link";

import { client } from "src/libs/client";
import { Button } from "@/components/Button";
import { ConvertDate } from "@/components/ConvertDate";

const worksSlug = ({ title, type, publishDate, description, details, content }) => {
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
            <ul className="p-work-top__categories">
              <li className="p-work-top__category">
                <a href="">Next.js</a>
              </li>
              <li className="p-work-top__category">
                <a href="">個人開発</a>
              </li>
              <li className="p-work-top__category">
                <a href="">Web Application</a>
              </li>
            </ul>
            <p className="p-work-top__description">{description}</p>
          </div>
          <div className="p-work-info">
            <div className="p-work-info__content">
              <dl className="p-work-info__list">
                <dt className="p-work-info__title">種類</dt>
                <dd className="p-work-info__description">{type}</dd>
              </dl>
              {details.map((detail) => (
                <dl className="p-work-info__list" key={detail.title}>
                  <dt className="p-work-info__title">{detail.title}</dt>
                  <dd className="p-work-info__description">
                    {detail.link ? (
                      <Link href={detail.text} target="_blank">
                        {detail.text}
                      </Link>
                    ) : (
                      detail.text
                    )}
                  </dd>
                </dl>
              ))}
            </div>
          </div>

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

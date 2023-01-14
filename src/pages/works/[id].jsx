import { Button } from "@/components/Button";
import Image from "next/image";
import thumbnail from "images/home/works.jpg";
import { client } from "src/libs/client";
import Link from "next/link";

const worksSlug = ({ title, type, description, details }) => {
  return (
    <div className="p-work">
      <div className="l-container">
        <div className="p-work__inner">
          <div className="p-work-top">
            <div className="p-work-top__heading">
              <div className="p-work-top__title">{title}</div>
              <time className="p-work-top__date">2022.01.11</time>
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
                      <a href={detail.text} target="_blank">
                        {detail.text}
                      </a>
                    ) : (
                      detail.text
                    )}
                  </dd>
                </dl>
              ))}
            </div>
          </div>
          <main className="p-work-main">
            <div className="p-work-main__contents">
              <figure>
                <Image src={thumbnail} alt="サムネイル" />
              </figure>
              <h2>はじめに</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate id sequi,
                delectus earum ducimus placeat ullam, nulla tempora assumenda provident cum
                voluptates ab blanditiis officiis! Neque quam voluptatum corrupti blanditiis. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Voluptate id sequi, delectus
                earum ducimus placeat ullam, nulla tempora assumenda provident cum voluptates ab
                blanditiis officiis! Neque quam voluptatum corrupti blanditiis.
              </p>
              <h2>開発について</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate id sequi,
                delectus earum ducimus placeat ullam, nulla tempora assumenda provident cum
                voluptates ab <a href="">blanditiis</a> officiis! Neque quam voluptatum corrupti
              </p>
              <p>
                blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate id
                sequi, delectus earum ducimus placeat ullam, nulla tempora assumenda provident cum
                voluptates ab blanditiis officiis! Neque quam voluptatum corrupti blanditiis.
              </p>
              <ul>
                <li>これはリストが入ります</li>
                <li>これはリストが入りますこれはリストが入ります</li>
                <li>
                  文章これはリストが入りますこれはリストが入りますこれはリストが入りますこれはリストが入ります
                </li>
              </ul>
              <p>
                tempora assumenda provident cum voluptates ab blanditiis officiis! Neque quam
                voluptatum corrupti blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Voluptate id sequi, delectus earum ducimus placeat ullam, nulla tempora
                assumenda provident cum voluptates ab blanditiis officiis! Neque quam voluptatum
                corrupti blanditiis.
              </p>
              <figure>
                <Image src={thumbnail} alt="サムネイル" />
                <figcaption>PC画像</figcaption>
              </figure>
            </div>
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

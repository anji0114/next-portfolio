import Image from "next/image";
import thumbnail from "images/home/works.jpg";

const Works = [
  {
    title: "実績1",
  },
  {
    title: "実績3",
  },
  {
    title: "実績2",
  },
];

export const Articles = () => {
  return (
    <div className="p-works-articles">
      {Works.map((work) => (
        <article className="p-works-article" key={work.title}>
          <div className="p-works-article__thumbnail">
            <div className="p-works-article__thumbnail-wrap">
              <Image src={thumbnail} alt="サムネイル" />
            </div>
          </div>
          <div className="p-works-article__contents">
            <div className="p-works-article__content">
              <time className="p-works-article__time">2021/01/06</time>
              <h3 className="p-works-article__title">Lorem ipsum dolor sit amet consectetur.</h3>
              <p className="p-works-article__description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quam ducimus
                eligendi quae veniam tempore perspiciatis dignissimos iure id rem iste, explicabo
                nemo, et consequuntur illo repellat quis voluptatum consectetur.
              </p>
            </div>
            <ul className="p-works-article__categories">
              <li className="p-works-article__category">
                <a href="">Web Application</a>
              </li>
              <li className="p-works-article__category">
                <a href="">Next.js</a>
              </li>
            </ul>
            <span className="p-works-article__arrow"></span>
          </div>
          <a href="" className="c-link__overlay"></a>
        </article>
      ))}
    </div>
  );
};

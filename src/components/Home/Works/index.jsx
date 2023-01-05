import { Button } from "@/components/Button";
import Image from "next/image";
import thumbnail from "images/home/works.jpg";
import Link from "next/link";

export const Works = ({ works }) => {
  return (
    <section className="p-home-works">
      <div className="l-container">
        {/* heading */}
        <h2 className="p-home-works__heading c-heading01">
          <span className="c-heading01__text">My</span>&nbsp;
          <span className="c-gradient__text-wrap" data-text="Works">
            <span className="c-gradient__text">Works</span>
          </span>
        </h2>
        <div className="p-home-works__contents">
          <div className="p-home-works__articles">
            {works.contents.map((work) => (
              <article key={work.id} className="p-home-works__article">
                <div className="p-home-works__thumbnail">
                  <Image src={thumbnail} alt="サムネイル" />
                  <span className="p-home-works__arrow"></span>
                </div>
                <div className="p-home-works__content">
                  <h3 className="p-home-works__title">{work.title}</h3>
                  <p className="p-home-works__description">{work.description}</p>
                  <p className="p-home-works__type">{work.type}</p>
                </div>
                <Link href={`/works/${work.slug}`} className="c-link__overlay"></Link>
              </article>
            ))}
          </div>
          <div className="p-home-works__button-wrap">
            <Button url={"/works"}>View Works</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

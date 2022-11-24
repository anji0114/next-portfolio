import Link from "next/link";

export default function Home() {
  return (
    <div className="p-index">
      <div className="p-mv"></div>

      <div className="p-index-about"></div>

      <div className="p-index-works"></div>

      {/* repository */}
      <div className="p-repository">
        <h2 className="c-heading01">
          My<span>Repository</span>
        </h2>
        <ul className="p-repository__list">
          <li className="p-repository__item">
            <Link href={"/"}>
              <p className="p-repository__title"></p>
              <p className="p-repository__description"></p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

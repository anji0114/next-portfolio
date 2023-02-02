import Link from "next/link";
import { useState } from "react";
import { SnsLink } from "@/components/Parts/SnsLink";

const NavItems = [
  {
    text: "HOME",
    url: "/",
  },
  {
    text: "ABOUT",
    url: "/about",
  },
  {
    text: "WORKS",
    url: "/works",
    drawers: [
      {
        text: " Web Application",
        url: "/works/category/web_app",
      },
      {
        text: " Web Site",
        url: "/works/category/web_site",
      },
    ],
  },
  {
    text: "CONTACT",
    url: "mailto:tanaka.anji14@gmail.com",
    arrow: true,
  },
];

export const HeaderNav = () => {
  const [navOpen, setNavOpen] = useState(false);

  const navToggle = () => {
    setNavOpen(!navOpen);
  };

  const navClose = () => {
    setNavOpen(false);
  };

  return (
    <nav className="l-header__nav">
      <button className={`l-header__button ${navOpen ? "is--open" : ""}`} onClick={navToggle}>
        <div className="l-header__button-wrap">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <div className={`l-header__nav-wrap ${navOpen ? "is--open" : ""}`}>
        <div className="l-header__nav-inner">
          <ul className="l-header__nav-list">
            {NavItems.map((item) => (
              <li
                className={`l-header__nav-item ${item.arrow ? "is--arrow" : undefined}`}
                key={item.text}
              >
                <Link href={item.url} onClick={navClose}>
                  {item.text}
                </Link>
                {item.drawers ? (
                  <ul className="l-header__nav-drawer">
                    {item.drawers.map((drawer) => (
                      <li className="l-header__nav-drawer-item" key={drawer.text}>
                        <Link href={drawer.url} onClick={navToggle}>
                          {drawer.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : undefined}
              </li>
            ))}
          </ul>
          <div className="l-header__nav-bottom">
            <div className="l-header__sns">
              <SnsLink />
            </div>
            <p className="l-header__privacy">©︎2022 Anji Tanaka</p>
          </div>
        </div>
        <span className="l-header__nav-wrap-bg l-header__nav-wrap-bg01 c-grade__bg01--first"></span>
        <span className="l-header__nav-wrap-bg l-header__nav-wrap-bg02 c-grade__bg01--second"></span>
        <span className="l-header__nav-wrap-bg l-header__nav-wrap-bg03 c-grade__bg01--third"></span>
      </div>
    </nav>
  );
};

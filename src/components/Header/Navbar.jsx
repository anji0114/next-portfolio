import { SnsLinks } from "@/components/SnsLinks";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const navToggle = () => {
    setNavOpen(!navOpen);
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
            <li className="l-header__nav-item">
              <Link href={""}>HOME</Link>
            </li>
            <li className="l-header__nav-item">
              <Link href={""}>ABOUT</Link>
            </li>
            <li className="l-header__nav-item">
              <Link href={""}>WORKS</Link>
              <ul className="l-header__nav-drawer">
                <li className="l-header__nav-drawer-item">
                  <Link href={""}>Web Application</Link>
                </li>
                <li className="l-header__nav-drawer-item">
                  <Link href={""}>Web Site</Link>
                </li>
              </ul>
            </li>
            <li className="l-header__nav-item l-header__nav-item--contact">
              <Link href={""}>CONTACT</Link>
            </li>
          </ul>
          <div className="l-header__nav-bottom">
            <div className="l-header__sns">
              <SnsLinks />
            </div>
            <p className="l-header__privacy">©︎2022 Anji Tanaka</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

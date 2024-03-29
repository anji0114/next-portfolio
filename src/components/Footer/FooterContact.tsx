import Link from "next/link";

export const FooterContact = (): JSX.Element => {
  return (
    <div className="p-contact">
      <Link href={"mailto:tanaka.anji14@gmail.com"} className="p-contact__link">
        <p className="p-contact__text">
          <span className="c-gradient__text-wrap" data-text="Contact">
            <span className="c-gradient__text">Contact</span>
          </span>
          <span className="p-contact__arrow c-gradient__arrow"></span>
        </p>
      </Link>
    </div>
  );
};

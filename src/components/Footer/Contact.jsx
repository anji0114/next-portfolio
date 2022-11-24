import Link from "next/link";

export const Contact = () => {
  return (
    <div className="p-contact">
      <Link href={"mailto:tanaka.anji14@gmail.com"} className="p-contact__link">
        <span className="p-contact__text">Contact Us</span>
        <span className="p-contact__arrow"></span>
      </Link>
    </div>
  );
};

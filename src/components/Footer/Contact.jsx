import Link from "next/link";

export const Contact = () => {
  return (
    <div className="p-contact">
      <Link href={"mailto:tanaka.anji14@gmail.com"} className="p-contact__link">
        <p className="p-contact__text">
          Contact Us<span className="p-contact__arrow"></span>
        </p>
      </Link>
    </div>
  );
};

import Image from "next/image";
import zennIcon from "images/icons/icon_zenn.svg";
import githubIcon from "images/icons/icon_github.svg";
import Link from "next/link";

export const SnsLink = (): JSX.Element => {
  return (
    <div className="c-sns__links">
      <Link className="c-sns__icon" href="https://zenn.dev/anji_dev" target="_blank">
        <Image src={zennIcon} alt="zenn" width={zennIcon.width} height={zennIcon.height} />
      </Link>
      <Link className="c-sns__icon" href="https://github.com/anji0114" target="_blank">
        <Image src={githubIcon} alt="github" width={githubIcon.width} height={githubIcon.height} />
      </Link>
    </div>
  );
};

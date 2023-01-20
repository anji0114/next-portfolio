import { SnsLink } from "@/components/SnsLinks/SnsLink";
import zennIcon from "images/icons/icon_zenn.svg";
import githubIcon from "images/icons/icon_github.svg";
import Image from "next/image";

export const SnsLinks = () => {
  return (
    <div className="c-sns__links">
      <SnsLink url="https://zenn.dev/anji_dev">
        <Image src={zennIcon} alt="zenn" width={zennIcon.width} height={zennIcon.height} />
      </SnsLink>
      <SnsLink url="https://github.com/anji0114">
        <Image src={githubIcon} alt="github" width={githubIcon.width} height={githubIcon.height} />
      </SnsLink>
    </div>
  );
};

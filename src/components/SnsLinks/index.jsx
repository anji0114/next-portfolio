import { SnsLink } from "@/components/SnsLinks/SnsLink";
import twitterIcon from "images/icons/icon_twitter.svg";
import zennIcon from "images/icons/icon_zenn.svg";
import githubIcon from "images/icons/icon_github.svg";
import Image from "next/image";

export const SnsLinks = () => {
  return (
    <div className="c-sns__links">
      <SnsLink url="google.com">
        <Image src={twitterIcon} alt="" />
      </SnsLink>
      <SnsLink url="google.com">
        <Image src={zennIcon} alt="" />
      </SnsLink>
      <SnsLink url="google.com">
        <Image src={githubIcon} alt="" />
      </SnsLink>
    </div>
  );
};

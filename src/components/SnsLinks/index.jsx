import { SnsLink } from "@/components/SnsLinks/SnsLink";
import TwitterIcon from "images/twitter.svg";
import ZennIcon from "images/zenn.svg";
import GithubIcon from "images/github.svg";

export const SnsLinks = () => {
  return (
    <div className="c-sns__links">
      <SnsLink url="google.com">
        <TwitterIcon />
      </SnsLink>
      <SnsLink url="google.com">
        <ZennIcon />
      </SnsLink>
      <SnsLink url="google.com">
        <GithubIcon />
      </SnsLink>
    </div>
  );
};

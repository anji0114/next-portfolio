import { SnsLink } from "@/components/SnsLinks/SnsLink";
import TwitterIcon from "images/icons/twitter.svg";
import ZennIcon from "images/icons/zenn.svg";
import GithubIcon from "images/icons/github.svg";

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

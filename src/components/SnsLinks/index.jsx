import { SnsLink } from "@/components/SnsLinks/SnsLink";
import TwitterIcon from "images/icons/icon_twitter.svg";
import ZennIcon from "images/icons/icon_zenn.svg";
import GithubIcon from "images/icons/icon_github.svg";

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

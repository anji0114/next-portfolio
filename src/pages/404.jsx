import { Button } from "src/components/Parts/Button";

const Custom404 = () => {
  return (
    <div className="p-404">
      <div className="p-404__wrap">
        <div className="l-container">
          <p className="p-404__text">
            ページが見つかりませんでした。
            <br />
            お探しのページは、削除されたか、<span>URLに間違いがあります。</span>
          </p>
          <div className="p-404__button-wrap">
            <Button url="/">Top Page</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom404;

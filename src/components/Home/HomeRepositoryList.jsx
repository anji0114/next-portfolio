import { HomeRepositoryItem } from "src/components/Home/HomeRepositoryItem";
import useSWRImmutable from "swr/immutable";

export const RepositoryList = () => {
  const fetcher = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("エラーが発生したため、データ取得失敗");
    }

    const json = await response.json();
    const dateRepos = await json.sort((a, b) => -(new Date(a.pushed_at) - new Date(b.pushed_at)));
    const sliceRepos = await dateRepos.slice(0, 6);
    return sliceRepos;
  };

  const { data, error } = useSWRImmutable(
    `https://api.github.com/users/anji0114/repos?&client_id="${process.env.GITHUB_CLIENT_ID}"&client_secret="${process.env.GITHUB_CLIENT_SECRETS}"`,
    fetcher
  );

  if (!data && !error) {
    return <p className="p-home-repository__text">ローディング中</p>;
  }

  if (error) {
    return (
      <p className="p-home-repository__text">
        エラーが発生しました。
        <br />
        しばらく時間を置いてからアクセスください。
      </p>
    );
  }

  if (data.length === 0) {
    return <p className="p-home-repository__text">リポジトリは0件です</p>;
  }

  return (
    <ul className="p-home-repository__list">
      {data.map((repo) => (
        <HomeRepositoryItem repo={repo} key={repo.id} />
      ))}
    </ul>
  );
};

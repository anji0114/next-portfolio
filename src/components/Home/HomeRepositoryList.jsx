import { useCallback, useEffect, useState } from "react";
import { HomeRepositoryItem } from "@/components/Home/HomeRepositoryItem";

export const RepositoryList = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getRepos = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/anji0114/repos?&client_id="${process.env.GITHUB_CLIENT_ID}"&client_secret="${process.env.GITHUB_CLIENT_SECRETS}"`
      );

      if (!response.ok) {
        throw new Error("エラーが発生しました");
      }
      const json = await response.json();
      const dateRepos = await json.sort((a, b) => -(new Date(a.pushed_at) - new Date(b.pushed_at)));
      const sliceRepos = await dateRepos.slice(0, 6);
      setRepos(sliceRepos);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    getRepos();
  }, []);

  if (loading) {
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

  if (repos.length === 0) {
    return <p className="p-home-repository__text">リポジトリは0件です</p>;
  }

  return (
    <ul className="p-home-repository__list">
      {repos.map((repo) => (
        <HomeRepositoryItem repo={repo} key={repo.id} />
      ))}
    </ul>
  );
};

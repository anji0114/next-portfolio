const ProfileContents = [
  {
    title: "田中 杏直　ANJ TANAKA",
    description:
      "2002年、埼玉生まれ。<br />高校を卒業後、電子部品メーカーに就職し、約１年半技能職として工場に勤めました。その期間、独学でプログラミングを学び、2021年11月よりWeb制作フリーランスとして活動しております。<br />現在Javascriptフレームワークに興味を持ち、フロントエンド周りを勉強中しています。",
  },
  {
    title: "「考える」ことが好きです",
    description:
      "「こんなアプリがあればいいのに・こんな動きがあれば面白い」などを考える・想像する、「もっとここを改善すれば上手く」など戦略・分析することが好きです。そんな自分の考えを実現したいという思いがきっかけで、エンジニアを目指しました。",
  },
  {
    title: "人の人生にはいくつもの”夢のドア”がある",
    description:
      "私の好きな漫画「宇宙兄弟」に出てくる言葉で、私の好きな言葉です。<br />大きな目標を達成するには、日々小さな目標を達成していく。<br />そんな日々の積み重ねを大切にしていきたいです。",
  },
];

export const AboutProfile = (): JSX.Element => {
  return (
    <div className="p-about-profile">
      <div className="l-container">
        <div className="p-about-profile__grid">
          <div className="p-about-profile__heading">
            <h2 className="c-heading02">
              <span className="c-heading02__text">My</span>
              &nbsp;
              <span className="c-gradient__text-wrap" data-text="Profile">
                <span className="c-gradient__text">Profile</span>
              </span>
            </h2>
          </div>
          <div className="p-about-profile__contents">
            {ProfileContents.map(({ title, description }) => (
              <dl key={title} className="p-about-profile__content">
                <dt className="p-about-profile__title">{title}</dt>
                <dd
                  className="p-about-profile__description"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
                {}
              </dl>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

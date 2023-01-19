const ProfileContents = [
  {
    title: "田中 杏直　ANJ TANAKA",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit dolorem blanditiis quidem ullam dolore rerum a. Quae enim, officia ullam, iste amet rem hic dicta molestias odio ex, provident ipsum!",
  },
  {
    title: "田中 杏直　ANJI ANAKA",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit dolorem blanditiis quidem ullam dolore rerum a. Quae enim, officia ullam, iste amet rem hic dicta molestias odio ex, provident ipsum!",
  },
  {
    title: "田中 杏直　ANJI TANAKA",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit dolorem blanditiis quidem ullam dolore rerum a. Quae enim, officia ullam, iste amet rem hic dicta molestias odio ex, provident ipsum!",
  },
];

export const AboutProfile = () => {
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
                <dd className="p-about-profile__description">{description}</dd>
              </dl>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const WorkDetail = (props) => {
  const { children } = props;

  return (
    <div className="p-work">
      <div className="l-container">
        <div className="p-work__inner">{children}</div>
      </div>
    </div>
  );
};

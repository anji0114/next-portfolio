import Link from "next/link";
import { FC } from "react";

type Details = {
  title: string;
  text: string;
  link: string | undefined;
};

type Props = {
  type: string;
  details: Details[];
};

export const WorkInfo: FC<Props> = ({ type, details }) => {
  return (
    <div className="p-work-info">
      <div className="p-work-info__content">
        <dl className="p-work-info__list">
          <dt className="p-work-info__title">種類</dt>
          <dd className="p-work-info__description">{type}</dd>
        </dl>
        {details.map((detail) => (
          <dl className="p-work-info__list" key={detail.title}>
            <dt className="p-work-info__title">{detail.title}</dt>
            <dd className="p-work-info__description">
              {detail.link ? (
                <Link href={detail.text} target="_blank">
                  {detail.text}
                </Link>
              ) : (
                detail.text
              )}
            </dd>
          </dl>
        ))}
      </div>
    </div>
  );
};

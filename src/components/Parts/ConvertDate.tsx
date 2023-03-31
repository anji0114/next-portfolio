import { parseISO, format } from "date-fns";
import ja from "date-fns/locale/ja";
import { FC } from "react";

export const ConvertDate: FC<{ time: string }> = ({ time }) => {
  return (
    <>
      <time dateTime={time}>
        <span suppressHydrationWarning={true}>
          {format(parseISO(time), "yyyy/MM/dd", { locale: ja })}
        </span>
      </time>
    </>
  );
};

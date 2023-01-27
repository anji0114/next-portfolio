import { parseISO, format } from "date-fns";
import ja from "date-fns/locale/ja";

export const ConvertDate = (props) => {
  const { time } = props;
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

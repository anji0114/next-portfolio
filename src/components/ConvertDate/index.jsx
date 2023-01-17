import { parseISO, format } from "date-fns";
import ja from "date-fns/locale/ja";

export const ConvertDate = ({ time }) => {
  return (
    <>
      <time dateTime={time}>{format(parseISO(time), "yyyy/MM/dd", { locale: ja })}</time>
    </>
  );
};

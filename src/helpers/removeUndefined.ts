import dayjs from "dayjs";
export const removeUndefinedKeys = (obj: object) => {
  return Object.entries(obj).reduce((acc: any, [key, value]) => {
    if (value) {
      if (typeof value === "object") {
        if (dayjs(value).isValid()) {
          acc[key] = dayjs(value).format("YYYY-MM-DD");
        } else {
          acc[key] = value;
        }
      } else acc[key] = value;
    }
    return acc;
  }, {});
};

export const FORMAT_DATE = (value: string, format: string) => {
  if (!dayjs(value).isValid()) return;
  return dayjs(value).format(format);
};

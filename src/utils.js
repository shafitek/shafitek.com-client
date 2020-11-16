export function getDateFromDateStr(date_str) {
    const date_options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(Date.parse(date_str)).toLocaleDateString(
      "en-US",
      date_options
    );
    return date;
}

export function createMarkup(html) {
  return { __html: html };
};
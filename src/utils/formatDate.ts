export function formatDate(dateString: string): string {
  // convert from yyyy-mm-dd to long format (e.g 12 September 2021)
  const [year, month, day] = dateString.split("-");
  const date = new Date(Number(year), Number(month) - 1, Number(day)); // extract month by 1 because the month value is zero-based
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Intl.DateTimeFormat("en-US", options).format(date);
}

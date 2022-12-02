export function parseDate(timestamp: string) {
  const dateString = timestamp.slice(3, 15).trim();

  const dateWithYear = dateString;
  const dateWithoutYear = dateString.slice(0, 6);
  
  function checkIsCurrentYear(year) {
    year = parseInt(year);
    return year === new Date().getFullYear();
  }

  const currentYear = checkIsCurrentYear(dateString.slice(7));

  return currentYear ? dateWithoutYear : dateWithYear;
}

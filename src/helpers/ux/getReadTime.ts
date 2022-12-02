function parseHtmlStringToText(htmlString: string) {
  const regex = /(<([^>]+)>)/gi;
  const result = htmlString.replace(regex, "");
  return result;
}

export function getReadTime(text: string) {
  const wordsPerMinute = 200;
  const noOfWords = parseHtmlStringToText(text).split(/\s/g).length;
  const minutes = noOfWords / wordsPerMinute;
  const readTime = Math.ceil(minutes);
  return readTime > 1 ? `${readTime} mins read` : `${readTime} min read`;
}

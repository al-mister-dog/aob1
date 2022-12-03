export function shareOnTwitter() {
  const url = window.location.href;
  const text = "Check out this article from Art of Banking";
  const twitterUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
  window.open(twitterUrl, "_blank");
}

export function shareOnFaceBook() {
  const url = window.location.href;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  window.open(facebookUrl, "_blank");
}

export function shareOnLinkedIn() {
  const url = window.location.href;
  const linkedInUrl = `https://www.linkedin.com/shareArticle?url=${url}`;
  window.open(linkedInUrl, "_blank");
}

function greatestCommonFactor(x: number, y: number) {
  if (typeof x !== "number" || typeof y !== "number") return false;
  x = Math.abs(x);
  y = Math.abs(y);
  while (y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

export function useResizeImage(h: number, w: number, x: number) {
  const divideByGCF: any = greatestCommonFactor(h, w);

  return {
    height: (h / divideByGCF) * x,
    width: (w / divideByGCF) * x,
  };
}

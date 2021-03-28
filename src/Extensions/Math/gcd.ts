/// <reference path="Math.d.ts" />

Math.gcd = (a: number, b: number): number => {
  while (a > 0 && b > 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  if (a == 0) {
    return b;
  } else if (b == 0) {
    return a;
  } else {
    return 1;
  }
};

/// <reference path="Math.d.ts" />

Math.fibonacci = function (n: number): bigint {
  if (n < 0) {
    throw new Error("N can't be smaller than zero");
  }

  let a = 0n;
  let b = 1n;
  for (let i = 31; i >= 0; i--) {
    const d = a * (b * 2n - a);
    const e = a * a + b * b;
    a = d;
    b = e;
    if (((n >> i) & 1) != 0) {
      const c = a + b;
      a = b;
      b = c;
    }
  }

  return a;
};

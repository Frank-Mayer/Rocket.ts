/// <reference path="Math.d.ts" />

Math.sqrtBigInt = function (value: bigint): bigint {
  if (value < 0n) {
    throw "square root of negative numbers is not supported";
  }

  if (value < 2n) {
    return value;
  }

  const newtonIteration = (n: bigint, x0: bigint): bigint => {
    const x1 = (n / x0 + x0) >> 1n;
    if (x0 === x1 || x0 === x1 - 1n) {
      return x0;
    }
    return newtonIteration(n, x1);
  };
  return newtonIteration(value, 1n);
};

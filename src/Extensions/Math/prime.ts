/// <reference path="Math.d.ts" />
/// <reference path="sqrt.ts" />

Math.isPrime = function (n: bigint): boolean {
  if (n <= 1n) {
    return false;
  }

  if (n % 2n == 0n) {
    return n == 2n;
  }

  let boundary = Math.sqrtBigInt(n);

  for (let i = 3n; i <= boundary; i += 2n) {
    if (n % i == 0n) {
      return false;
    }
  }

  return true;
};

Math.nthPrime = function (n: number): bigint {
  if (n < 1) {
    throw new Error("N can't be smaller than one");
  }

  if (n == 1) {
    return 2n;
  }

  let i = 3n;
  let primeCount = 1;
  while (primeCount < n) {
    if (Math.isPrime(i)) {
      primeCount++;
    }
    i += 2n;
  }

  return i - 2n;
};

Math.nextPrime = function (n: bigint): bigint {
  if (n < 2n) {
    return 2n;
  }

  let i = n % 2n == 0n ? n + 1n : n;
  while (true) {
    if (Math.isPrime(i)) {
      return i;
    }
    i += 2n;
  }

  // return i - 2n;
};

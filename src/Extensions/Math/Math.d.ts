interface Math {
  /**
   * @returns >=min & <=max
   * @param value The value to be clamped
   * @param min The lower bound of the result
   * @param max The upper bound of the result
   */
  clamp: <T extends number | bigint>(value: T, min: T, max: T) => T;

  /**
   * Calculates the Nth Fibonacci
   * @param n
   * @returns fib
   */
  fibonacci: (n: number) => bigint;

  /**
   * Euclidean algorithm
   */
  gcd: (a: number, b: number) => number;

  /**
   * Checks if a number is prime
   * @param n Number to check
   * @returns TRUE if prime; otherwise FALSE
   */
  isPrime: (n: bigint) => boolean;

  /**
   * Calculates the Nth prime number
   * @param n How many prime
   * @returns Prime
   */
  nthPrime: (n: number) => bigint;

  /**
   * Calculates the next prime number
   * @param start Number to start from
   * @returns Prime
   */
  nextPrime: (n: bigint) => bigint;

  /**
   * Round to a specified precition
   */
  roundOff: (x: number, precision: number) => number;

  /**
   * Square root of a positive bigint
   */
  sqrtBigInt: (value: bigint) => bigint;
}

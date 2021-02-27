interface Math {
  /**
   * @returns >=min & <=max
   * @param value The value to be clamped
   * @param min The lower bound of the result
   * @param max The upper bound of the result
   */
  clamp: <T extends number | bigint>(value: T, min: T, max: T) => T;

  /**
   * Euclidean algorithm
   */
  gcd: (a: number, b: number) => number;

  /**
   * Round to a specified precition
   */
  roundOff: (x: number, precition: number) => number;
}

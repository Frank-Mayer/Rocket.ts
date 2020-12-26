interface Math {
  /**
   * @returns >=min & <=max
   * @param value The value to be clamped
   * @param min The lower bound of the result
   * @param max The upper bound of the result
   */
  clamp: <T extends number | bigint>(value: T, min: T, max: T) => T;
}

Math.clamp = function <T extends number | bigint>(value: T, min: T, max: T): T {
  return value < min ? min : value > max ? max : value;
};

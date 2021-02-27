/// <reference path="Math.d.ts" />

Math.clamp = function <T extends number | bigint>(value: T, min: T, max: T): T {
  return value < min ? min : value > max ? max : value;
};

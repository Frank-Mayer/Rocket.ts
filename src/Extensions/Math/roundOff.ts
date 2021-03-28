/// <reference path="Math.d.ts" />

/**
 * Round to a specified precition
 */
Math.roundOff = (x: number, precision: number): number => {
  const powered = Math.pow(10, precision);
  return Math.round(x * powered) / powered;
};

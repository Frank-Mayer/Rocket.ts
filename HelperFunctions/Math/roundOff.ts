/// <reference path="Math.d.ts" />

/**
 * Round to a specified precition
 */
Math.roundOff = (x: number, precition: number): number => {
  const powered = Math.pow(10, precition);
  return Math.round(x * powered) / powered;
};

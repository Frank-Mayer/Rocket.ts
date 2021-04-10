/// <reference path="Math.d.ts" />

Math.bitRotateLeft = function (num: number, cnt: number): number {
  return (num << cnt) | (num >>> (32 - cnt));
};

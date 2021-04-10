/// <reference path="Math.d.ts" />

Math.safeAdd = function (a: number, b: number): number {
  var lsw = (a & 0xffff) + (b & 0xffff);
  var msw = (a >> 16) + (b >> 16) + (lsw >> 16);
  return (msw << 16) | (lsw & 0xffff);
};

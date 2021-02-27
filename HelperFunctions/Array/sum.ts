/// <reference path="Array.d.ts" />

Array.prototype.sum = function () {
  return this.reduce((a, b) => a + b, 0);
};

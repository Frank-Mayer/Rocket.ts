/// <reference path="Array.d.ts" />

Array.prototype.average = function (): number {
  return this.sum() / this.length;
};

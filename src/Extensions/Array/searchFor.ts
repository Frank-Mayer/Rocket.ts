/// <reference path="Array.d.ts" />

Array.prototype.searchFor = function <T>(
  comparator: (x: T) => boolean
): T | null {
  for (const el of this) {
    if (comparator(el)) {
      return el;
    }
  }
  return null;
};

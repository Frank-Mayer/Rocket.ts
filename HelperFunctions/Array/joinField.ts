/// <reference path="Array.d.ts" />

Array.prototype.joinField = function (
  fieldName: string | number | symbol,
  separator: string = ", "
): string {
  const arr = new Array();
  for (const el of this) {
    arr.push(el[fieldName]);
  }
  return arr.join(separator);
};

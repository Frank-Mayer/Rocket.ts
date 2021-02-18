Array.prototype.clear = function <T>(): Array<T> {
  this.length = 0;
  while (this.length > 0) {
    this.pop();
  }
  return this;
};

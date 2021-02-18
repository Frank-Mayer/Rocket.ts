declare interface Map<K, V> {
  findKeyByValue(value: V): K;
}

Map.prototype.findKeyByValue = function <K, V>(
  this: Map<K, V>,
  value: V
): K | null {
  for (let [k, v] of this.entries()) {
    if (v === value) {
      return k;
    }
  }
  return null;
};

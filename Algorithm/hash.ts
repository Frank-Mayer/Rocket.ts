String.prototype.hash = function (): number {
  let hash = BigInt(0);
  let index = 0;
  let char: bigint;
  if (this.length === 0) {
    return 0;
  }
  for (index = 0; index < this.length; index++) {
    char = BigInt(this.charCodeAt(index));
    hash += char;
  }
  return Number(hash % BigInt(Number.MAX_SAFE_INTEGER));
};

interface String {
  hash: () => number;
}

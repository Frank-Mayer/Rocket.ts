function when<T, C>(
  condition: C,
  ...cases: Array<{ if: C; then: (() => T | null) | T }>
): T | null {
  if (typeof condition == "undefined" || condition == null) {
    for (const c of cases) {
      if (c.if) {
        return typeof c.then == "function" ? (<() => T>c.then)() : c.then;
      }
    }
  } else {
    for (const c of cases) {
      if (condition === c.if) {
        return typeof c.then == "function" ? (<() => T>c.then)() : c.then;
      }
    }
  }
  return null;
}

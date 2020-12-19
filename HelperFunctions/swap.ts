function swap<T extends object>(a: T, b: T, prop: keyof T) {
  Function(
    "a",
    "b",
    `const temp = a.${prop}; a.${prop} = b.${prop}; b.${prop} = temp;`
  )(a, b);
}

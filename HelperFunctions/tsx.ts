function tsx<T extends keyof HTMLElementTagNameMap>(
  tagName: T,
  properties?: { [key: string]: string | boolean | number }
): HTMLElementTagNameMap[T] {
  const x = document.createElement(tagName);
  if (properties) {
    const attr = (key: string, value: string | boolean | number): void => {
      switch (typeof value) {
        case "string":
          x.setAttribute(key, value);
          break;
        case "number":
          x.setAttribute(key, value.toString());
          break;
        case "boolean":
          if (value) {
            x.setAttribute(key, key);
          } else {
            x.removeAttribute(key);
          }
          break;
      }
    };
    for (const key of Object.keys(properties)) {
      const value = properties[key];
      try {
        if (key.startsWith("on")) {
          attr(key, value);
        } else {
          new Function("x", "v", `x.${key} = v`)(x, value);
        }
      } catch {
        attr(key, value);
      }
    }
  }
  return x;
}

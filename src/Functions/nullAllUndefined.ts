function nullAllUndefined<T extends Object>(obj: T): T {
  for (const key of Object.keys(obj)) {
    if (typeof obj[<keyof T>key] == "undefined") {
      (<any>obj[<keyof T>key]) = null;
    }
  }
  return obj;
}

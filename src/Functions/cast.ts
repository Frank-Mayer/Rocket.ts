function dynamicCast<T>(Class: T, e: any): T | null {
  if (e instanceof <any>Class) {
    return e;
  }
  return null;
}

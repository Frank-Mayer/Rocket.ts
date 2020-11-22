const __onceDoneList = new Set<string>();

function doOnce(callback: Function): any {
  const s = callback.toString();
  if (!__onceDoneList.has(s)) {
    __onceDoneList.add(s);
    return callback();
  }
}

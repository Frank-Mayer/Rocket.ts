const __onceDoneList = new Set<string>();

/**
 * The doOnce function executes a callback only one time
 * @param callback Function
 */
function doOnce(callback: Function, id?: string): any {
  const s = id ? id : callback.toString();
  if (!__onceDoneList.has(s)) {
    __onceDoneList.add(s);
    return callback();
  }
}

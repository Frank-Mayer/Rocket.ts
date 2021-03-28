function bindInput<T extends HTMLInputElement | HTMLSelectElement>(
  el: T,
  callback: (value: string, el: T) => void,
  onCommit: boolean = false
) {
  el.addEventListener(onCommit ? "change" : "input", (ev) => {
    const t = ev.target;
    if (t) {
      callback((<T>t).value, <T>t);
    }
  });
}

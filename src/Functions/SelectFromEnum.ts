/**
 * @param enumerator Enum to display as HTMLSelectElement
 * @param handler Function to be called on user input
 */
function SelectFromEnum<E extends { [index: number]: string }>(
  enumerator: E,
  selected?: number,
  handler?: (ev: Event) => void
): HTMLSelectElement {
  const sel = document.createElement("select");
  let i = 0;
  for (const t of Object.keys(enumerator)) {
    if (typeof t == "string" && isNaN(Number(t))) {
      const option = tsx("option", {
        value: i,
        innerText: t,
      });
      if (selected && t == enumerator[selected]) {
        option.setAttribute("selected", "selected");
      }
      sel.appendChild(option);
      i++;
    }
  }
  if (handler) {
    sel.onchange = (ev) => {
      handler(ev);
    };
  }
  return sel;
}

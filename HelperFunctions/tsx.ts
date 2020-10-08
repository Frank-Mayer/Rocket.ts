function tsx(html: string): HTMLElement | null {
  try {
    html = html.trim();
    let tagName = html.split("<")[1].split(" ")[0];
    let x = document.createElement(tagName);
    x.outerHTML = html;
    return x;
  } catch {
    return null;
  }
}

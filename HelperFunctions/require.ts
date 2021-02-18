declare var require: (src: string) => Promise<Event | undefined>;
const __required = new Set<string>();
if (typeof require == "undefined") {
  globalThis.require = (src: string): Promise<Event | undefined> => {
    return new Promise<Event | undefined>((resolve) => {
      if (__required.has(src)) {
        resolve(undefined);
      } else {
        __required.add(src);
        const script = document.createElement("script");
        script.async = true;
        script.src = src;
        script.onload = resolve;
        document.head.appendChild(script);
      }
    });
  };
}

/// <reference path="../Functions/httpGet.ts" />

class HTMLFrame {
  private readonly element: HTMLElement;
  private readonly basePath: string;
  private current?: string = undefined;

  constructor(
    selector: string,
    basePath: string = location.href
      .split("#")[0]
      .split("?")[0]
      .replace("/index.html", "/")
  ) {
    const el = <HTMLElement | null>document.querySelector(selector);
    if (!el) {
      throw new Error(`Element ${selector} not found`);
    }
    this.element = el;
    this.basePath = basePath;
  }

  async inject(path: string): Promise<boolean> {
    if (path == this.current) {
      return true;
    }

    try {
      const code = await httpGet(this.basePath + path, true);
      this.element.innerHTML = code;
      this.current = path;
      return true;
    } catch {
      return false;
    }
  }

  scrollIntoView(arg?: boolean | ScrollIntoViewOptions): void {
    this.element.scrollIntoView(arg);
    this.element.style;
  }

  getBoundingClientRect() {
    return this.element.getBoundingClientRect();
  }

  getClientRects() {
    return this.element.getClientRects();
  }

  animate(
    keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
    options?: number | KeyframeAnimationOptions
  ) {
    return this.element.animate(keyframes, options);
  }

  getAnimations() {
    return this.element.getAnimations();
  }

  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void {
    return this.element.addEventListener(type, listener, options);
  }

  getStyle() {
    return this.element.style;
  }

  getClassList() {
    return this.element.classList;
  }
}

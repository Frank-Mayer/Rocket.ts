/// <reference path="../Functions/httpGet.ts" />

class HTMLFrame {
  private readonly element: HTMLElement;
  private current?: string = undefined;

  constructor(selector: string) {
    const el = <HTMLElement | null>document.querySelector(selector);
    if (!el) {
      throw new Error(`Element ${selector} not found`);
    }
    this.element = el;
  }

  async inject(url: string): Promise<boolean> {
    if (url == this.current) {
      return true;
    }

    try {
      const code = await httpGet(url, true);
      this.element.innerHTML = code;
      this.current = url;
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

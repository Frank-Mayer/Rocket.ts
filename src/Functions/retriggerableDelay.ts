const __retriggerableDelayCache = new Map<string, number>();
function retriggerableDelay(
  delayId: string,
  ms: number,
  callback: Function
): void {
  if (__retriggerableDelayCache.has(delayId)) {
    clearTimeout(__retriggerableDelayCache.get(delayId));
  }
  __retriggerableDelayCache.set(delayId, window.setTimeout(callback, ms));
}

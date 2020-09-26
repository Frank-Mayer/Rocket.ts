const retriggerableDelayCache = new Map<string, number>();
function retriggerableDelay(delayId: string, ms: number, callback: Function) {
  if (retriggerableDelayCache.has(delayId)) {
    clearTimeout(retriggerableDelayCache.get(delayId));
  }
  retriggerableDelayCache.set(delayId, window.setTimeout(callback, ms));
}

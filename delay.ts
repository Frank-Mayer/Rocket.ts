function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const retriggerableDelaySave = new Map<string, number>();
function retriggerableDelay(delayId: string, ms: number, callback: Function) {
  if (retriggerableDelaySave.has(delayId)) {
    clearTimeout(retriggerableDelaySave.get(delayId));
  }
  retriggerableDelaySave.set(delayId, window.setTimeout(callback, ms));
}

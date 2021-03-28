async function parallel(...promises: Array<Promise<any>>): Promise<Array<any>> {
  let fulfilled = new Array<any>();
  for (const p of promises) {
    fulfilled.push(await p);
  }
  if (fulfilled.length == promises.length) {
    return fulfilled;
  } else {
    throw new Error("Any Promise is rejected");
  }
}

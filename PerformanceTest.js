"use strict";

import { SortedList, LinkedList } from "./out/rocket.js";
import fs from "fs";

const consumer = {
  store: 0,
  consume(v) {
    this.store = v;
  },
};

const nf = Intl.NumberFormat();
let heavy = 0;
let maxRandom = 1000;

function clock(start) {
  if (start) {
    let end = process.hrtime(start);
    return (end[0] * 1000 + end[1] / 1000000).toFixed(2);
  }
  return process.hrtime();
}

function randomLoop(callback) {
  for (let i = 0; i < heavy; i++) {
    callback(Math.round(Math.random() * maxRandom));
  }
}

const hr = (str) => {
  str += "\n";
  for (let i = 0; i <= heavySet.length + 1; i++) {
    str += "| ";
  }
  return str;
};

function testList() {
  let md = "| Class | Function";

  for (heavy of heavySet) {
    let it = nf.format(heavy);
    md += " | " + it + " items";
  }
  md += "\n";
  for (let i = 0; i <= heavySet.length + 1; i++) {
    md += "|---";
  }
  md += "\n";

  md += "SortedList | add";
  for (heavy of heavySet) {
    let x = new SortedList();
    randomLoop((r) => {
      consumer.consume(x.add(r));
    });
    let start = clock();
    randomLoop((r) => {
      consumer.consume(x.add(r));
    });
    md += " | " + clock(start).toString() + "ms";
  }

  md += "\nLinkedList | append";
  for (heavy of heavySet) {
    let x = new LinkedList();
    randomLoop((r) => {
      consumer.consume(x.append(r));
    });
    let start = clock();
    randomLoop((r) => {
      consumer.consume(x.append(r));
    });
    md += " | " + clock(start).toString() + "ms";
  }

  // md += "\nHashSet | add";
  // for (heavy of heavySet) {
  //   let x = new HashSet();
  //   randomLoop((r) => {
  //     x.add(r);
  //   });
  //   let start = clock();
  //   randomLoop((r) => {
  //     x.add(r);
  //   });
  //   md += " | " + clock(start).toString() + "ms";
  // }

  md += "\nArray | push";
  for (heavy of heavySet) {
    let x = new Array();
    randomLoop((r) => {
      consumer.consume(x.push(r));
    });
    let start = clock();
    randomLoop((r) => {
      consumer.consume(x.push(r));
    });
    md += " | " + clock(start).toString() + "ms";
  }

  md = hr(md);

  md += "\nSortedList | includes";
  for (heavy of heavySet) {
    let x = new SortedList();
    randomLoop((r) => {
      x.add(r);
    });
    randomLoop((r) => {
      consumer.consume(x.includes(r));
    });
    let start = clock();
    randomLoop((r) => {
      consumer.consume(x.includes(r));
    });
    md += " | " + clock(start).toString() + "ms";
  }

  md += "\nLinkedList | includes";
  for (heavy of heavySet) {
    let x = new LinkedList();
    randomLoop((r) => {
      x.append(r);
    });
    randomLoop((r) => {
      consumer.consume(x.includes(r));
    });
    let start = clock();
    randomLoop((r) => {
      consumer.consume(x.includes(r));
    });
    md += " | " + clock(start).toString() + "ms";
  }

  // md += "\nHashMap | includes";
  // for (heavy of heavySet) {
  //   let x = new HashMap();
  //   randomLoop((r) => {
  //     x.add(r);
  //   });
  //   randomLoop((r) => {
  //     consumer.consume(x.includes(r));
  //   });
  //   let start = clock();
  //   randomLoop((r) => {
  //     consumer.consume(x.includes(r));
  //   });
  //   md += " | " + clock(start).toString() + "ms";
  // }

  // md += "\nHashSet | contains";
  // for (heavy of heavySet) {
  //   let x = new HashSet();
  //   randomLoop((r) => {
  //     x.add(r);
  //   });
  //   randomLoop((r) => {
  //     consumer.consume(x.contains(r));
  //   });
  //   let start = clock();
  //   randomLoop((r) => {
  //     consumer.consume(x.contains(r));
  //   });
  //   md += " | " + clock(start).toString() + "ms";
  // }

  md += "\nArray | includes";
  for (heavy of heavySet) {
    let x = new Array();
    randomLoop((r) => {
      x.push(r);
    });
    randomLoop((r) => {
      consumer.consume(x.includes(r));
    });
    let start = clock();
    randomLoop((r) => {
      consumer.consume(x.includes(r));
    });
    md += " | " + clock(start).toString() + "ms";
  }

  md = hr(md);

  md += "\nSortedList | indexOf";
  for (heavy of heavySet) {
    let x = new SortedList();
    randomLoop((r) => {
      x.add(r);
    });
    randomLoop((r) => {
      consumer.consume(x.indexOf(r));
    });
    let start = clock();
    randomLoop((r) => {
      consumer.consume(x.indexOf(r));
    });
    md += " | " + clock(start).toString() + "ms";
  }

  md += "\nLinkedList | indexOf";
  for (heavy of heavySet) {
    let x = new LinkedList();
    randomLoop((r) => {
      x.append(r);
    });
    randomLoop((r) => {
      consumer.consume(x.indexOf(r));
    });
    let start = clock();
    randomLoop((r) => {
      consumer.consume(x.indexOf(r));
    });
    md += " | " + clock(start).toString() + "ms";
  }

  // md += "\nHashSet | -";
  // for (heavy of heavySet) {
  //   md += " | " + "-";
  // }

  md += "\nArray | indexOf";
  for (heavy of heavySet) {
    let x = new Array();
    randomLoop((r) => {
      x.push(r);
    });
    randomLoop((r) => {
      consumer.consume(x.indexOf(r));
    });
    let start = clock();
    randomLoop((r) => {
      consumer.consume(x.indexOf(r));
    });
    md += " | " + clock(start).toString() + "ms";
  }

  return md;
}

function testGcd() {
  const rand = new Array();
  for (let i = 0; i < 1000; i++) {
    rand.push(Math.round(Math.random() * 1000));
  }

  // Warmup
  for (let i = 0; i < rand.length; i++) {
    consumer.consume(Math.gcd(rand[i], rand[rand.length - i]));
  }

  let md = "Function Name | Execution Time\n|---|---";
  const times = new Array();
  for (let i = 0; i < rand.length; i++) {
    let start = clock();
    consumer.consume(Math.gcd(rand[i], rand[rand.length - i]));
    times.push(clock(start));
  }
  md += "\n" + times.average().toString() + "ms";
  return md;
}

let heavySet = [100, 1000, 10000, 100000, 1000000];

console.log("Warmup...");
for (let i = 0; i < 2; i++) {
  testList();
}

import os from "os";

console.log("Testing...");

let md =
  "# Rocket.ts\n\nTypeScript functions and classes for better performance\n\n## Performance Test";
md += "\n\n Compiled for: ESNEXT";
md += "\n\n Platform: " + process.platform.toString();
md += "\n\n Hardware: " + os.cpus()[0].model;
let v = process.versions;
md += "\n\n Node.js: " + v.node;
md += "\n\n V8: " + v.v8;
md += "\n\n";

md += testList();
md += "\n";
md += testGcd();
md += "\n";

fs.writeFile("README.md", md, (err) => {
  if (err) {
    console.error(err);
    return;
  }
});

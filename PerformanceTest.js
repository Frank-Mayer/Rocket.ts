"use strict";
import fs from "fs";

const consumer = {
  store: 0,
  consume(v) {
    this.store += v;
  },
};

const nf = Intl.NumberFormat();
let heavy = 0;
let maxRandom = 1000;
const test = new Map();

import {
  rocket_SortedList as SortedList,
  // rocket_HashSet as HashSet,
} from "./out/rocket.js";

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
  md = "| Class | Function";

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
    let start = clock();
    randomLoop((r) => {
      x.add(r);
    });
    md += " | " + clock(start).toString() + "ms";
  }

  // md += "\nHashSet | add";
  // for (heavy of heavySet) {
  //   let x = new HashSet();
  //   let start = clock();
  //   randomLoop((r) => {
  //     x.add(r);
  //   });
  //   md += " | " + clock(start).toString() + "ms";
  // }

  md += "\nArray | push";
  for (heavy of heavySet) {
    let x = new Array();
    let start = clock();
    randomLoop((r) => {
      x.push(r);
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
    let start = clock();
    randomLoop((r) => {
      consumer.consume(x.includes(r));
    });
    md += " | " + clock(start).toString() + "ms";
  }

  // md += "\nHashSet | contains";
  // for (heavy of heavySet) {
  //   let x = new HashSet();
  //   randomLoop((r) => {
  //     x.add(r);
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
    let start = clock();
    randomLoop((r) => {
      consumer.consume(x.indexOf(r));
    });
    md += " | " + clock(start).toString() + "ms";
  }

  return md;
}

let md =
  "# Rocket.ts\n\nTypeScript functions and classes for better performance\n\n## Performance Test";
md += "\n\n Compiled for: ES2018";
md += "\n\n platform: " + process.platform.toString();
let v = process.versions;
md += "\n\n Node.js: " + v.node;
md += "\n\n V8: " + v.v8;
md += "\n\n";

let heavySet = [100, 1000, 10000, 100000, 200000];
md += testList();

fs.writeFile("README.md", md, (err) => {
  if (err) {
    console.error(err);
    return;
  }
});

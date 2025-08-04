
//Write a javasscript that takes an integer input (n) and a multiple value (m). Print numbers from 1 to n, but for each number that is a multiple of m, print "This number {number} is a multiple of {m}" instead.

const n = 6;
const m = 2;

for (let i = 1; i <= n; i++) {
  if (i % m === 0) {
    console.log("This " + i + " is a multiple of " + m);
  } else {
    console.log(i);
  }
}

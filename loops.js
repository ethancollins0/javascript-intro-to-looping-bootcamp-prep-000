/*for ([initialization]; [condition];
[iteration]) {
  [loopBody];
}*/

for (var i = 1; i < 100; i++) {
  console.log("Hello World the " + i + "time")
}

//the above prints Hello World the n time
function forLoop(a) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      a.push("I am 1 strange loop.");
    } else {
        a.push(`I am ${i} strange loops.`);
    }
  }
  return a
}

let countdown = 100;

while (countdown > 0) {
  console.log(--countdown);
}

function whileLoop(number) {
  while (number > 0) {
    console.log(`${number}`)
    number--;
  }
  return "done"
}

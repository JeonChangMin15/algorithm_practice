const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const start = input[0];
  const target = input[1].split("");

  const queue = [[...target]];

  while (queue.length) {
    const arr = queue.shift();
    if (arr.length < start.length) break;

    if (arr.length === start.length) {
      if (start === arr.join("")) {
        console.log(1);
        return;
      }
    }

    if (arr[arr.length - 1] === "A") {
      const val = [...arr].slice(0, arr.length - 1);
      queue.push(val);
    }
    if (arr[0] === "B") {
      const val1 = [...arr].slice(1).reverse();
      queue.push(val1);
    }
  }

  console.log(0);
};

solution(input);

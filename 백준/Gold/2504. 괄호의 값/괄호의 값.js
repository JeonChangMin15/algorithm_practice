const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const sample = input[0];

  let value = 1;
  let answer = 0;
  let stack = [];
  let testStack = [];

  for (let s of sample) {
    if (s === "(" || s === "[") testStack.push(s);

    if (s === ")") {
      if (testStack[testStack.length - 1] === "(") {
        testStack.pop();
      } else {
        console.log(0);
        return;
      }
    }

    if (s === "]") {
      if (testStack[testStack.length - 1] === "[") {
        testStack.pop();
      } else {
        console.log(0);
        return;
      }
    }
  }

  if (testStack.length !== 0) {
    console.log(0);
    return;
  }

  for (let i = 0; i < sample.length; i++) {
    const str = sample[i];

    if (str === "(") {
      stack.push([str, i]);
      value *= 2;
    }

    if (str === "[") {
      stack.push([str, i]);
      value *= 3;
    }

    if (str === ")") {
      const [val, index] = stack[stack.length - 1];

      if (val === "(") {
        if (
          sample[index + 1] !== "(" &&
          sample[index + 1] !== "["
        ) {
          answer += value;
        }

        stack.pop();
        value = value / 2;
      }
    }

    if (str === "]") {
      const [val, index] = stack[stack.length - 1];

      if (val === "[") {
        if (
          sample[index + 1] !== "(" &&
          sample[index + 1] !== "["
        ) {
          answer += value;
        }

        stack.pop();
        value = value / 3;
      }
    }
  }

  console.log(answer);
};

solution(input);

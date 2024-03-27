const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const [stepN, jumpN] = input[0].split(" ").map((v) => Number(v));
  const leftStep = input[1].split("").map((v) => Number(v));
  const rightStep = input[2].split("").map((v) => Number(v));
  const leftVisited = Array(stepN).fill(false);
  const rightVisited = Array(stepN).fill(false);

  const queue = [[0, "left", 0]];
  leftVisited[0] = true;

  let isClear = false;

  while (queue.length) {
    const [currentStep, position, time] = queue.shift();

    if (currentStep >= stepN) {
      isClear = true;
      break;
    }

    if (position === "left") {
      const prevStep = currentStep - 1;
      const nextStep = currentStep + 1;
      const changePostionStep = currentStep + jumpN;
      if ((nextStep < stepN && leftStep[nextStep]) || nextStep >= stepN) {
        if (!leftVisited[nextStep]) {
          queue.push([nextStep, "left", time + 1]);
          leftVisited[nextStep] = true;
        }
      }

      if (prevStep > time && leftStep[prevStep] && !leftVisited[prevStep]) {
        queue.push([prevStep, "left", time + 1]);
        leftVisited[prevStep] = true;
      }

      if (
        (changePostionStep < stepN && rightStep[changePostionStep]) ||
        changePostionStep >= stepN
      ) {
        if (!rightVisited[changePostionStep]) {
          queue.push([changePostionStep, "right", time + 1]);
          rightVisited[changePostionStep] = true;
        }
      }
    }

    if (position === "right") {
      const prevStep = currentStep - 1;
      const nextStep = currentStep + 1;
      const changePostionStep = currentStep + jumpN;
      if ((nextStep < stepN && rightStep[nextStep]) || nextStep >= stepN) {
        if (!rightVisited[nextStep]) {
          queue.push([nextStep, "right", time + 1]);
          rightVisited[nextStep] = true;
        }
      }

      if (prevStep > time && rightStep[prevStep] && !rightVisited[prevStep]) {
        queue.push([prevStep, "right", time + 1]);
        rightVisited[prevStep] = true;
      }

      if (
        (changePostionStep < stepN && leftStep[changePostionStep]) ||
        changePostionStep >= stepN
      ) {
        if (!leftVisited[changePostionStep]) {
          queue.push([changePostionStep, "left", time + 1]);
          leftVisited[changePostionStep] = true;
        }
      }
    }
  }

  console.log(isClear ? 1 : 0);
};

solution(input);

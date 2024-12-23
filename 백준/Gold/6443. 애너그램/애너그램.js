const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const n = Number(input[0]);
  const sample = [];

  for (let i = 1; i <= n; i++) {
    sample.push(input[i]);
  }

  const answer = [];
  let curSample;
  let used;

  const dfs = (arr) => {
    if (arr.length === curSample.length) {
      answer.push(arr.join(""));
      return;
    }

    for (let i = 0; i < curSample.length; i++) {
      if (used[i]) continue;
      if (i > 0 && curSample[i] === curSample[i - 1] && !used[i - 1]) continue;
      arr.push(curSample[i]);
      used[i] = true;
      dfs(arr);
      arr.pop();
      used[i] = false;
    }
  };

  for (let i = 0; i < sample.length; i++) {
    curSample = sample[i].split("").sort();
    used = Array(sample[i].length).fill(false);
    dfs([]);
  }

  console.log(answer.join("\n"));
};

solution(input);

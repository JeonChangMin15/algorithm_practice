const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const answer = input[0].split(" ").map((v) => Number(v));
  let value = 0;

  const dfs = (arr) => {
    if (arr.length === 10) {
      let same = 0;
      for (let i = 0; i < 10; i++) {
        if (arr[i] === answer[i]) same += 1;
      }
      if (same >= 5) value += 1;
      return;
    }

    for (let i = 1; i <= 5; i++) {
      if (arr.length < 2) {
        arr.push(i);
      } else {
        const prev = arr[arr.length - 1];
        const secondPrev = arr[arr.length - 2];
        if (i === prev && i === secondPrev) continue;
        arr.push(i);
      }

      dfs(arr);
      arr.pop();
    }
  };

  dfs([]);

  console.log(value);
};

solution(input);

const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 숫자가 n이 주어지고 1부터 N까지의 수로 주어진 순열을 사전순으로 출력
// backtracking으로 한다.
const solution = (input) => {
  const n = Number(input[0]);

  const dfs = (arr) => {
    if (arr.length === n) {
      const nums = arr.join(" ");
      console.log(nums);
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (arr.includes(i)) continue;
      arr.push(i);
      dfs(arr);
      arr.pop();
    }
  };

  dfs([]);
};

solution(input);

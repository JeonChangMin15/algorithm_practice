const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// arr, start가 들어가는 dfs 조합
// 중복되는지 확인해야된다
const solution = (input) => {
  const [n, m] = input[0].split(" ").map((v) => Number(v));
  const nums = input[1]
    .split(" ")
    .map((v) => Number(v))
    .sort((a, b) => a - b);

  const combination = [];

  const dfs = (arr, start) => {
    if (arr.length === m) {
      const val = arr.map((v) => nums[v]).join(" ");

      if (!combination.includes(val)) combination.push(val);

      return;
    }

    for (let i = start; i < n; i++) {
      arr.push(i);
      dfs(arr, i + 1);
      arr.pop();
    }
  };

  dfs([], 0);

  let answer = combination[0];

  for (let i = 1; i < combination.length; i++) {
    answer += "\n" + combination[i];
  }
  console.log(answer);
};

solution(input);

const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫째줄에 자연수N, 원소의 개수가 주어진다
// 원소로만 자연수를 만들어서 N보다 작거나 같은 수중에서 가장 큰수를 구한다
// 중복 조합

const solution = (input) => {
  const [target, n] = input[0].split(" ").map((v) => Number(v));
  const nums = input[1].split(" ").map((v) => Number(v));
  const len = String(target).split("");

  let max = 0;

  const dfs = (arr) => {
    if (arr.length > len) return;

    const num = Number(arr.join(""));
    if (num > target) return;
    if (num <= target && num > max) {
      max = num;
    }

    for (let i = 0; i < nums.length; i++) {
      arr.push(String(nums[i]));
      dfs(arr);
      arr.pop();
    }
  };

  dfs([]);

  console.log(max);
};

solution(input);

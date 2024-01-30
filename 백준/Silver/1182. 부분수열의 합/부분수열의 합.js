// const input = require("fs")
//   .readFileSync("example.txt", "utf8")
//   .trim()
//   .split("\n")
//   .map((line) => line.replace(/\r/, ""));

const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// N개의 정수로 이루어진 수열에서 다 더한값이 S가되는 경우의 수를 구한다
// 일단 부분수열을 인덱스로 담아서 판단한다. arr, start가 있는 dfs로 탐색을한다
// 첫째줄에 숫자들의 개수와 target값이 주어진다
const solution = (input) => {
  const [n, target] = input[0].split(" ").map((v) => Number(v));
  const nums = input[1].split(" ").map((v) => Number(v));
  let answer = 0;

  const dfs = (arr, start) => {
    if (arr.length) {
      const val = arr.map((v) => nums[v]).reduce((prev, cur) => prev + cur, 0);
      if (val === target) answer += 1;
    }

    for (let i = start; i < n; i++) {
      arr.push(i);
      dfs(arr, i + 1);
      arr.pop();
    }
  };

  dfs([], 0);

  console.log(answer);
};

solution(input);

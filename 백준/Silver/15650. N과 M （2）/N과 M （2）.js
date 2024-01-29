const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 자연수 N,M이 주어지고 1부터 N까지 숫자에서 M개의 중복수열
// 종복되는 수열을 출력하면 안된다. 오름차순으로 출력
// dfs로 풀이하면된다
const solution = (input) => {
  const [n, m] = input[0].split(" ").map((v) => Number(v));

  const dfs = (arr, start) => {
    if (arr.length === m) {
      console.log(arr.join(" "));
      return;
    }

    for (let i = start; i <= n; i++) {
      arr.push(i);
      dfs(arr, i + 1);
      arr.pop();
    }
  };

  dfs([], 1);
};

solution(input);

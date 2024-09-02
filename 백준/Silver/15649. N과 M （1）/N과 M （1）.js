const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

// 첫번째줄에 n과 m이 주어진다
// 1부터 N까지 M개로 조합되는 수열을 출력
// 문제는 중복순열은 하지 않는다
// 백트래킹을 풀어야한다
const solution = (input) => {
  const [n, sizeN] = input[0].split(" ").map((v) => Number(v));

  const dfs = (arr) => {
    if (arr.length === sizeN) {
      console.log(arr.join(" "));
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (arr.includes(i)) continue;
      arr.push(i);
      dfs(arr, i + 1);
      arr.pop();
    }
  };

  dfs([]);
};

solution(input);

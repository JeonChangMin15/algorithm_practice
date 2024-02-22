const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 4와 7로 이루어진 숫자를 만들거다
// 숫자 A, B가 주어지고 A보다 크거나 같고 B보다 작거나 같은 수의 갯수를 구해야된다
// 4, 7을 10 n승을 더하는 dfs를 만들어하나?
const solution = (input) => {
  const [min, max] = input[0].split(" ").map((v) => Number(v));
  let cnt = 0;
  const dfs = (total, n) => {
    if (total > max) return;
    if (min <= total && total <= max) {
      cnt += 1;
    }
    dfs(total + 4 * 10 ** n, n + 1);
    dfs(total + 7 * 10 ** n, n + 1);
  };

  dfs(0, 0);
  console.log(cnt);
};

solution(input);

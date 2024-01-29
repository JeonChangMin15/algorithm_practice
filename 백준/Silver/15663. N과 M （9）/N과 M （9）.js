const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 자연수 N, M이 주어지고
// 두번째줄에는 자연수 N개가 주어진다. 해당 숫자들을 M개 조합해서 수열을 출력
// 종복되는 수열을 안된다. 사전순으로 증가
// 먼저 숫자들을 오름차순으로 정렬한다
// 그리고나서 dfs로 하는데 해당 숫자들이 포함되어있는 체크하고 출력을한다
const solution = (input) => {
  const [n, m] = input[0].split(" ").map((v) => Number(v));
  const nums = input[1]
    .split(" ")
    .map((v) => Number(v))
    .sort((a, b) => a - b);

  const combination = [];

  const dfs = (arr) => {
    if (arr.length === m) {
      const val = arr.map((v) => nums[v]).join(" ");
      if (!combination.includes(val)) combination.push(val);

      return;
    }

    for (let i = 0; i < n; i++) {
      if (arr.includes(i)) continue;
      arr.push(i);
      dfs(arr);
      arr.pop();
    }
  };

  dfs([]);

  let answer = combination[0];

  for (let i = 1; i < combination.length; i++) {
    answer += "\n" + combination[i];
  }

  console.log(answer);
};

solution(input);

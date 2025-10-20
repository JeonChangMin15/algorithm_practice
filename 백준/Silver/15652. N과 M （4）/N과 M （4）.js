const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

// 무조건 앞에 숫자보다 같거나 커야한다
// 첫번째줄에 n, combN이 주어진다
// 백트래킹으로 조합을 만든다
// 인자에 arr, prev 값을 넣으면 되나
const solution = (input) => {
  const [n, combN] = input[0].split(" ").map((v) => Number(v));
  const answer = [];

  const backTracking = (arr, prev) => {
    if (arr.length === combN) {
      answer.push(arr.join(" "));
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (i < prev) continue;
      arr.push(i);
      backTracking(arr, i);
      arr.pop();
    }
  };

  backTracking([], -1);

  console.log(answer.join("\n"));
};

solution(input);

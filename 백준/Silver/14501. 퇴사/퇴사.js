const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const n = Number(input[0]);
  const info = [];

  for (let i = 1; i <= n; i++) {
    info.push(input[i].split(" ").map((v) => Number(v)));
  }

  let answer = 0;

  const backTrack = (day, cost) => {
    if (day > n) return;
    answer = Math.max(cost, answer);

    for (let i = day; i < n; i++) {
      const [time, money] = info[i];
      backTrack(i + time, cost + money);
    }
  };

  backTrack(0, 0);
  console.log(answer);
};

solution(input);

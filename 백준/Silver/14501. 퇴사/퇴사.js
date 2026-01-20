const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 백트레킹으로 모든 경우의 수를 찾아야한다
// currentDay, money를 인자로 두고 탐색해야된다
const solution = (input) => {
  const dayN = Number(input[0]);
  const schedule = [[0, 0]];

  for (let i = 1; i <= dayN; i++) {
    schedule.push(input[i].split(" ").map((v) => Number(v)));
  }

  let answer = 0;

  const backTracking = (currentDay, totalCost) => {
    if (currentDay > dayN + 1) return;
    answer = Math.max(answer, totalCost);

    for (let i = currentDay; i <= dayN; i++) {
      const [d, t] = schedule[i];

      backTracking(i + d, totalCost + t);
    }
  };

  backTracking(1, 0);

  console.log(answer);
};

solution(input);

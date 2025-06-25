const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 n이 주어진다
// 두번재줄부터 그리드가 주어지고 각 능력치가 주어진다
// N은 항상 짝수고 반반씩 나눠서 능력치의 차이를 최소로 팀으로 나눈다
// 그렇다면 백트레킹으로 n/2 만큼 조합을 먼저 만들고나서
// 각 케이스마다 팀마다 능력치의 합을 구해야된다
const solution = (input) => {
  const n = Number(input[0]);
  const grid = [];
  const allTeam = Array(n)
    .fill(0)
    .map((v, index) => index);

  for (let i = 1; i <= n; i++) {
    grid.push(input[i].split(" ").map((v) => Number(v)));
  }

  let answer = Infinity;

  const backTrack = (arr, start) => {
    if (arr.length === n / 2) {
      const firstTeam = [...arr];
      const secondTeam = allTeam.filter((v) => !firstTeam.includes(v));
      let firstTeamScore = 0;
      let secondTeamScore = 0;

      for (let i = 0; i < n / 2; i++) {
        for (let j = 0; j < n / 2; j++) {
          const f1 = firstTeam[i];
          const f2 = firstTeam[j];
          const s1 = secondTeam[i];
          const s2 = secondTeam[j];
          firstTeamScore += grid[f1][f2];
          secondTeamScore += grid[s1][s2];
        }
      }

      answer = Math.min(answer, Math.abs(firstTeamScore - secondTeamScore));
      return;
    }

    for (let i = start; i < n; i++) {
      arr.push(i);
      backTrack(arr, i + 1);
      arr.pop();
    }
  };

  backTrack([], 0);

  console.log(answer);
};

solution(input);

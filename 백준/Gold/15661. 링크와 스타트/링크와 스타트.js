const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 1부터 N까지 사람이 있다
// i,j가 같은팀이 됐을때 Sij, Sji 두개가 팀능력치에 더해진다
// 두팀의 인원수는 같지 않아도 되지만 한명 이상이어야한다.
// 두팀의 차이의 최솟값을 구해야된다
// 첫째줄에 인원수 둘째줄부터는 그리드
// 0부터 n-1까지 조합을 구해서 총 값이랑 해당 팀의 차이의 뺀값과 비교하면 될거같다.
const solution = (input) => {
  const n = Number(input[0]);
  const grid = [];
  const person = [];

  for (let i = 0; i < n; i++) {
    person.push(i);
  }

  for (let i = 1; i < input.length; i++) {
    grid.push(input[i].split(" ").map((v) => Number(v)));
  }

  let diff = Infinity;

  const dfs = (arr, start) => {
    if (arr.length >= 1 && arr.length < n) {
      let sum = 0;
      let res = 0;
      let resPeople = person.filter((v) => !arr.includes(v));

      for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          sum += grid[arr[i]][arr[j]] + grid[arr[j]][arr[i]];
        }
      }

      for (let i = 0; i < resPeople.length; i++) {
        for (let j = i + 1; j < resPeople.length; j++) {
          res +=
            grid[resPeople[i]][resPeople[j]] + grid[resPeople[j]][resPeople[i]];
        }
      }

      diff = Math.min(diff, Math.abs(sum - res));
    }

    for (let i = start; i < n; i++) {
      arr.push(i);
      dfs(arr, i + 1);
      arr.pop();
    }
  };

  dfs([], 0);

  console.log(diff);
};

solution(input);

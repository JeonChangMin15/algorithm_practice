const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

// 첫째줄에 지름길 갯수 N과 고속도로 길이 distance주어진다
// 일단 dfs로 지름길을 선택할지 말지 정한다
// 그리고나서 해당 지름길이 유효한 지름길인지 판단한다
// 그래서 최소길이를 비교하면 될거같다.
const solution = (input) => {
  const [n, highwayDist] = input[0].split(" ").map((v) => Number(v));
  const shortWays = [];
  const isUsedWay = Array(n).fill(false);

  for (let i = 1; i < input.length; i++) {
    shortWays.push(input[i].split(" ").map((v) => Number(v)));
  }

  shortWays.sort((a, b) => a[0] - b[0]);

  let minDist = highwayDist;

  const dfs = (start) => {
    let short = [];
    for (let i = 0; i < n; i++) {
      if (isUsedWay[i]) {
        short.push(shortWays[i]);
      }
    }

    if (short.length) {
      let usedDist = 0;
      let shortDist = 0;
      let isValid = true;

      for (let i = 0; i < short.length; i++) {
        if (i === 0) {
          if (short[i][0] > highwayDist || short[i][1] > highwayDist) {
            isValid = false;
            break;
          }
          continue;
        }

        if (
          short[i][0] < short[i - 1][1] ||
          short[i][0] > highwayDist ||
          short[i][1] > highwayDist
        ) {
          isValid = false;
          break;
        }
      }

      if (isValid) {
        for (let i = 0; i < short.length; i++) {
          usedDist += short[i][1] - short[i][0];
          shortDist += short[i][2];
        }

        let resDist = highwayDist - usedDist;
        minDist = Math.min(resDist + shortDist, minDist);
      }
    }

    for (let i = start; i < n; i++) {
      isUsedWay[i] = true;
      dfs(i + 1);
      isUsedWay[i] = false;
    }
  };

  dfs(0);

  console.log(minDist);
};

solution(input);

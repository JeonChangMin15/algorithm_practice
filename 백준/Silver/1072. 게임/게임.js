const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 게임횟수, 이긴 게임, 승률이 주어진다
// 앞으로 하는 판은 무조건 이긴다는 가정하에 최소 몇번을 더해야 z가 변하는지 구해라
// z가 절대 안변하면 -1을 출력
// X,Y가 주어진다. 승률은 소수점은 버린다
// 그렇다면 (y+a)/(x+a)가 기존z보다 커지면 된다
// 최소 판은 1판 최대판을 1000000000하고 계산해서 바뀌면 갱신후 rt = mid-1
// 그대로면 lt = mid +1
const solution = (input) => {
  const [prevTotal, prevWin] = input[0].split(" ").map((v) => Number(v));
  const prevWinRate = Math.floor((prevWin * 100) / prevTotal);
  let lt = 1;
  let rt = 1000000001;
  let answer = -1;

  while (lt <= rt) {
    const addWin = Math.floor((lt + rt) / 2);
    const curWinRate = Math.floor(
      ((prevWin + addWin) * 100) / (prevTotal + addWin)
    );

    if (curWinRate > prevWinRate) {
      answer = addWin;
      rt = addWin - 1;
    } else {
      lt = addWin + 1;
    }
  }

  console.log(answer);
};

solution(input);

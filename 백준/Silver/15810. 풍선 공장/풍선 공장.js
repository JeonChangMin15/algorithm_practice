const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// M개의 풍선이 만들어지는데 걸리는 최소 시간을 구해라
// 첫번째줄에 사람수 풍선수, 두번째줄에 각 사람마다 풍선 하나 만드는데 걸리는 시간
// 최소는 1 최대는 풍선수 * 인원에서 가장 오래걸리는 사람
// 시간/각 스태프 시간의 몫을 합한게 풍선수보다 같거나 많으면 rt = mid -1, 안되면 lt = mid + 1
const solution = (input) => {
  const [personN, balloonN] = input[0].split(" ").map((v) => Number(v));
  const times = input[1].split(" ").map((v) => Number(v));

  let lt = 1;
  let rt = balloonN * Math.max(...times);
  let answer = balloonN * Math.max(...times);

  while (lt <= rt) {
    const mid = Math.floor((lt + rt) / 2);
    let curBalloon = 0;

    times.forEach((time) => {
      curBalloon += Math.floor(mid / time);
    });

    if (curBalloon >= balloonN) {
      answer = Math.min(answer, mid);
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }

  console.log(answer);
};

solution(input);

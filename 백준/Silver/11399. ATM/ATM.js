const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 오름차순으로 정렬해서 prev Time을 누적해서 더해주면된다
const solution = (input) => {
  const n = Number(input[0])
  const time = input[1].split(" ").map(v => Number(v))
  time.sort((a,b) => a-b)
  let prevTime = 0
  let answer = 0

  for(let i = 0; i< n; i++) {
    const curPersonTime = time[i]
    answer += prevTime + curPersonTime
    prevTime += curPersonTime
  }

  console.log(answer)
};

solution(input);

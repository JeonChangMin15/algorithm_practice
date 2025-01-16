const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 서로 다른 값들을 더해서 해당 숫자가 되는 조합의 최대수를 구한다
// 1부터 더하면서 해당 값보다 커지면 더한 조합의-1을 해주면 된다
const solution = (input) => {
  const target = Number(input[0]);
  let sum = 0;
  let cnt = 0;
  let val = 1;

  while (true) {
    sum += val;
    cnt += 1;

    if (sum > target) {
      console.log(cnt - 1);
      break;
    } else if (sum === target) {
      console.log(cnt);
      break;
    }

    val += 1;
  }
};

solution(input);

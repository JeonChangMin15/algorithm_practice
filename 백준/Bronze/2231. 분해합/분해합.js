const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 숫자 하나가 주어지고 해당 숫자를 만들 수 있는 생성자를 출력한다
// 가장 작은 생성자를 구해낸다
// 생성자 -> 본인 숫자와 각 자리수의 합을 합친값을 구하면된다
// 1부터 해당 숫자까지 for문돌려서 하면된다
// 만약 끝까지 돌려서 생성자가 안나오면 0을 출력한다.
const solution = (input) => {
  const n = Number(input[0]);

  for (let i = 1; i < n; i++) {
    const cur = i;
    const positionSum = String(i)
      .split("")
      .map((v) => Number(v))
      .reduce((prev, cur) => prev + cur, 0);

    if (cur + positionSum === n) {
      console.log(cur);
      return;
    }
  }

  console.log(0);
};

solution(input);

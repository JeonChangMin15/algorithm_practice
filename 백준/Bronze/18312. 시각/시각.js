const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에는 N, k가 주어진다
// 00시 00분 00초부터 n시 59분 59초까지 K가 하나라도 있는 시각의 수를 구해야한다
// 삼중 for문으로 통해서 i -> 시간, j -> 분, k ->초를 돌리면서 숫자를 문자열로 변환하고
// k가 있는지 확인하면된다.
const solution = (input) => {
  const [n, targetNum] = input[0].split(" ").map((v) => Number(v));

  let cnt = 0;

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j < 60; j++) {
      for (let k = 0; k < 60; k++) {
        let hour = String(i);
        let minute = String(j);
        let second = String(k);

        if (i < 10) hour = `0${i}`;
        if (j < 10) minute = `0${j}`;
        if (k < 10) second = `0${k}`;

        if (
          hour.includes(targetNum) ||
          minute.includes(targetNum) ||
          second.includes(targetNum)
        )
          cnt += 1;
      }
    }
  }

  console.log(cnt);
};

solution(input);

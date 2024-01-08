const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// n번째 구호: 번 데기 번 데기 번*n+1 데기*n+1
// 첫째줄에 사람의 수, 둘째 줄 T번째 셋째줄 뻔:0, 데기:1
// 일단 [0,1,0,1] Array(n+1).fill(0), Array(n+1).fill(1)로 배열을 만들고
// 0 1 숫자를 카운팅 하면서 해당 구호의 T번째면 멈춰서 총합에서
// 인원수를 나눈값 나머지를 리턴하면된다
const solution = (input) => {
  const peopleN = Number(input[0]);
  const T = Number(input[1]);
  const target = Number(input[2]);

  let firstShout = 0;
  let secondShout = 0;
  let order = 1;

  while (true) {
    const first = Array(order + 1).fill(0);
    const second = Array(order + 1).fill(1);
    const arr = [0, 1, 0, 1, ...first, ...second];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) firstShout += 1;
      else secondShout += 1;

      if (target === 0 && firstShout === T) break;
      if (target === 1 && secondShout === T) break;
    }

    if (target === 0 && firstShout === T) break;
    if (target === 1 && secondShout === T) break;

    order += 1;
  }

  const sum = firstShout + secondShout;
  console.log((sum - 1) % peopleN);
};

solution(input);

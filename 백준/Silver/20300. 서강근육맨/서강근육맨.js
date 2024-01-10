const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");


// 한번에 최대 2개를 고를 수 있다. 마지막에 하나 남으면 하나 사용
// 근손실은 두개골라서 최소값들의 최대를 해야된다.
// 오름차순으로 하고 만약 홀수면 마지막을 빼고 아니면 양끝을 더해서 최대값s
// 양끝을 더하는거보다

const solution = (input) => {
  const n = Number(input[0]);

  const weight = input[1].split(" ").map((v) => BigInt(v));
  weight.sort((a, b) => (a < b ? -1 : 1));

  let max = 0;
  if (n % 2 === 1) max = weight.pop();

  let lt = 0;
  let rt = weight.length - 1;

  while (lt <= rt) {
    const n1 = weight[lt];
    const n2 = weight[rt];

    const sum = n1 + n2;

    if (max < sum) max = sum;

    lt++;
    rt--;
  }

  console.log(String(max));
};

solution(input);

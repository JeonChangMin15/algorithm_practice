const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 숫자 두개를 합해서 값을 만족하는 쌍의 갯수를 구해라
// 일단 브루투스로 하면 백억이라 무조건 시간 초과
// lt =0, rt = n-1로 두고 lt<rt가 같을때까지 arr[lt]+arr[rt] 값이 작으면 lt +=1, 크면 rt -=1
// 그렇게 하면된다. 대신 오름차순으로 미리 정렬
const solution = (input) => {
  const n = Number(input[0]);
  const arr = input[1]
    .split(" ")
    .map((v) => Number(v))
    .sort((a, b) => a - b);

  const target = Number(input[2]);

  let answer = 0;
  let lt = 0;
  let rt = n - 1;

  while (lt < rt) {
    const curSum = arr[lt] + arr[rt];
    if (curSum === target) {
      answer += 1;
      lt += 1;
      rt -= 1;
    }

    if (curSum < target) {
      lt += 1;
    }

    if (curSum > target) {
      rt -= 1;
    }
  }

  console.log(answer);
};

solution(input);

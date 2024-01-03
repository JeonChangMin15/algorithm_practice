const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에는 사람의 수
// 두번째 줄에는 사람이 주려는 팁의 액수
// 팁의 액수를 배열에넣어서 내림차순으로 정렬하고
// 각 금액의 순서 - 1 만큼의 액수를 차감한 후 팁을 지급
// 팁이 양수일때만 주고 음수면 0원
const solution = (input) => {
  const n = Number(input[0]);
  const tips = [];
  let answer = 0;
  for (let i = 1; i < input.length; i++) {
    tips.push(Number(input[i]));
  }
  tips.sort((a, b) => b - a);
  for (let i = 0; i < tips.length; i++) {
    const money = tips[i] - i;
    if (money > 0) answer += money;
  }

  console.log(answer);
};

solution(input);

const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫 중량은 500 하루에 k만큼 근손실이 일어난다
// 첫째줄에 N, k가 주어지고 두번째줄에 각 날짜마다 근육 증가량이 주어진다
// 모든 기간동안 500 이상 유지되는 루틴의 갯수를 구해라
// 백트레킹으로 visited로 마킹하고 인자로 day, total로 계산하면서 500보다 작으면 return
// 해당 날짜에 500 이상이면 +1 return
const solution = (input) => {
  const [lastDay, loseWeight] = input[0].split(" ").map((v) => Number(v));
  const weights = input[1].split(" ").map((v) => Number(v));

  let answer = 0;
  const used = Array(lastDay).fill(false);

  const backTrack = (day, total) => {
    if (total < 500) return;
    if (lastDay === day) {
      if (total >= 500) answer += 1;

      return;
    }

    for (let i = 0; i < lastDay; i++) {
      if (used[i]) continue;
      used[i] = true;
      backTrack(day + 1, total - loseWeight + weights[i]);
      used[i] = false;
    }
  };

  backTrack(0, 500);

  console.log(answer);
};

solution(input);

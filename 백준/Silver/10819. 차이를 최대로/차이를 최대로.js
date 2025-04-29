const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 N이 주어진다
// 두번째줄에 숫자들이 주어진다
// 각 위치에서 뒤에 있는 숫자와 차이의 합 총합 최대값을 구해라
// 백트래킹으로 숫자들의 조합을 구한뒤 하나씩 계산하면된다
const solution = (input) => {
  const n = Number(input[0]);
  const nums = input[1].split(" ").map((v) => Number(v));
  let answer = 0;

  const backTrack = (arr) => {
    if (arr.length === n) {
      const realValues = arr.map((v) => nums[v]);
      let sum = 0;

      for (let i = 0; i < n - 1; i++) {
        sum += Math.abs(realValues[i] - realValues[i + 1]);
      }

      answer = Math.max(answer, sum);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (arr.includes(i)) continue;
      arr.push(i);
      backTrack(arr);
      arr.pop();
    }
  };

  backTrack([]);

  console.log(answer);
};

solution(input);

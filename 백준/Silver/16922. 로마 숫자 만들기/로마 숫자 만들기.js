const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 각 숫자에 몇개씩 할당이 가능한지를 봐야한다
const solution = (input) => {
  const n = Number(input[0]);
  const set = new Set();

  const values = [1, 5, 10, 50];

  const backTrack = (startIdx, depth, sum) => {
    if (depth === n) {
      set.add(sum);
      return;
    }

    for (let i = startIdx; i < 4; i++) {
      backTrack(i, depth + 1, sum + values[i]);
    }
  };

  backTrack(0, 0, 0);

  console.log(set.size);
};

solution(input);

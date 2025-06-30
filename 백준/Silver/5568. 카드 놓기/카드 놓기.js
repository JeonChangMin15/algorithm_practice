const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 숫자의 개수 두번째줄에 숫자 고르는 개수
// 3번째줄부터 주어진다
// 숫자를 조합해서 만들 수 있는 정수의 개수를 구해라
// 중복없는 모든 조합을 구해서 set에 넣어서 구하면된다
const solution = (input) => {
  const n = Number(input[0]);
  const combN = Number(input[1]);
  const nums = [];

  for (let i = 2; i < n + 2; i++) {
    nums.push(input[i]);
  }

  const set = new Set();

  const backTrack = (arr) => {
    if (arr.length === combN) {
      const combNum = arr.reduce((prev, cur) => prev + nums[cur], "");
      set.add(combNum);
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

  console.log(set.size);
};

solution(input);

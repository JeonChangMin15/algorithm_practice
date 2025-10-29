const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 숫자의 개수가 주어진다
// 두번째줄에 뽑을 숫자의 개수가 주어진다
// 그다음부터 숫자들이 한줄씩 주어진다
// 조합으로 몇개를 구할 수 있는지 구해라
// 백트래킹으로 모든 조합을 만들어서 set에 넣으면 된다
const solution = (input) => {
  const n = Number(input[0]);
  const combN = Number(input[1]);
  const nums = [];

  for (let i = 2; i < 2 + n; i++) {
    nums.push(Number(input[i]));
  }

  const combSet = new Set();

  const backTracking = (arr) => {
    if (arr.length === combN) {
      const realValue = arr.map((v) => nums[v]);
      combSet.add(realValue.join(""));
      return;
    }

    for (let i = 0; i < n; i++) {
      if (arr.includes(i)) continue;
      arr.push(i);
      backTracking(arr);
      arr.pop();
    }
  };

  backTracking([]);

  console.log(combSet.size);
};

solution(input);

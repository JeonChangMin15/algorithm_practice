const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 숫자갯수 조합수가 주어진다
// 두번째줄에 숫자들이 주어진다
// 하나의 숫자를 여러번 선택이 가능하고 중복되는 수열은 안된다
// 그렇다면 먼저 숫자들을 오름차순으로 정렬한 후 백트레킹으로 조합하는데
// 대신 조합을 set에 넣고 중복을 확인해야된다
const solution = (input) => {
  const [n, combN] = input[0].split(" ").map((v) => Number(v));
  const nums = input[1]
    .split(" ")
    .map((v) => Number(v))
    .sort((a, b) => a - b);

  const set = new Set();
  const answer = [];

  const backTrack = (arr) => {
    if (arr.length === combN) {
      const val = arr.join(" ");

      if (!set.has(val)) {
        answer.push(val);
        set.add(val);
      }

      return;
    }

    for (let i = 0; i < n; i++) {
      arr.push(nums[i]);
      backTrack(arr);
      arr.pop();
    }
  };

  backTrack([]);
  console.log(answer.join("\n"));
};

solution(input);

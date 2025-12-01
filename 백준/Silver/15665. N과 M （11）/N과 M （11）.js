const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 백트레킹으로 숫자를 탐색을 한다
// 배열에다가 넣고 해당 숫자 조합이 없으면 추가
// 숫자는 오름차순으로 먼저 정렬을 해준다
const solution = (input) => {
  const [n, combN] = input[0].split(" ").map((v) => Number(v));
  const nums = input[1].split(" ").map((v) => Number(v));
  nums.sort((a, b) => a - b);
  const answer = [];
  const set = new Set();

  const backTracking = (arr) => {
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
      backTracking(arr);
      arr.pop();
    }
  };

  backTracking([]);

  console.log(answer.join("\n"));
};

solution(input);

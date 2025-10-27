const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 숫자의 개수와 콤보의 길이가 주어진다
// 두번째줄에 숫자들이 한줄로 주어진다
// 오름차순으로 정렬한 후 순열은 사전순으로 늘어나는 방식이다
// 함수 파라미터에 arr과 prev가 주어져야한다
const solution = (input) => {
  const [n, combN] = input[0].split(" ").map((v) => Number(v));
  const nums = input[1].split(" ").map((v) => Number(v));
  nums.sort((a, b) => a - b);
  const answer = [];

  const backTracking = (arr, prev) => {
    if (arr.length === combN) {
      answer.push(arr.join(" "));
      return;
    }

    for (let i = 0; i < n; i++) {
      if (nums[i] < prev) continue;
      arr.push(nums[i]);
      backTracking(arr, nums[i]);
      arr.pop();
    }
  };

  backTracking([], 0);

  console.log(answer.join("\n"));
};

solution(input);

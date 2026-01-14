const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 숫자수와 조합 길이가 주어진다
// 두번째줄에 숫자 리스트가 주어지고 오름차순으로 정렬해줘야한다
// 중복되는 조합은 안되기때문에 set으로 판단해줘야한다

const solution = (input) => {
  const [n, comnLen] = input[0].split(" ").map((v) => Number(v));
  const nums = input[1].split(" ").map((v) => Number(v));
  nums.sort((a, b) => a - b);
  const set = new Set();
  const answer = [];

  const backTracking = (arr, start) => {
    if (arr.length === comnLen) {
      const val = arr.join(" ");
      if (!set.has(val)) {
        set.add(val);
        answer.push(val);
      }
      return;
    }

    for (let i = start; i < n; i++) {
      arr.push(nums[i]);
      backTracking(arr, i);
      arr.pop();
    }
  };

  backTracking([], 0);

  console.log(answer.join("\n"));
};

solution(input);

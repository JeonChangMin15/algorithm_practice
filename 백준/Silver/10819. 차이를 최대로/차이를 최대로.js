const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫째줄에 N이 주어진다. 둘째줄에는 배열 A에 들어가있는 정수가 주어진다
// Math.abs(a[0]-a[1]) + ... Math.abs(a[n-2] - a[n-1])
// 최대값을 출력해야된다
// 모든 경우의 조합을 따져봐야한다
// 그래서 len === n일때 값을 계산하면될거같다

const solution = (input) => {
  const n = Number(input[0]);
  const nums = input[1].split(" ").map((v) => Number(v));

  let answer = 0;

  const dfs = (arr) => {
    if (arr.length === n) {
      let total = 0;
      for (let i = 0; i < n - 1; i++) {
        const idx = arr[i];
        const nextIdx = arr[i + 1];
        total += Math.abs(nums[idx] - nums[nextIdx]);
      }

      answer = Math.max(total, answer);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (arr.includes(i)) continue;
      arr.push(i);
      dfs(arr);
      arr.pop();
    }
  };

  dfs([]);

  console.log(answer);
};

solution(input);

const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));


const solution = (input) => {
  const [n, combN] = input[0].split(" ").map((v) => Number(v));
  const nums = input[1].split(" ").map((v) => Number(v));
  nums.sort((a, b) => a - b);

  const answer = [];
  const set = new Set();

  const backTracking = (arr, start) => {
    if (arr.length === combN) {
      const val = arr.map((v) => nums[v]).join(" ");
      if (!set.has(val)) {
        answer.push(val);
        set.add(val);
      }
      return;
    }

    for (let i = start; i < n; i++) {
      if (arr.includes(i)) continue;
      arr.push(i);
      backTracking(arr, i + 1);
      arr.pop();
    }
  };

  backTracking([], 0);

  console.log(answer.join("\n"));
};

solution(input);

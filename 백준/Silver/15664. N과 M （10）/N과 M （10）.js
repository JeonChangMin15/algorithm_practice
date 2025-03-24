const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 숫자의 수와 조합수가 주어진다
// 두번째줄에 숫자들이 주어진다
// 오름차순으로 조합을 만들어야하는데 수열에 중복된 인덱스를 넣으면 안되고
// 그리고 중복된 조합이 있으면 안된다
const solution = (input) => {
  const [n, combN] = input[0].split(" ").map((v) => Number(v));
  const nums = input[1]
    .split(" ")
    .map((v) => Number(v))
    .sort((a, b) => a - b);

  const answer = [];
  const set = new Set();

  const dfs = (arr, start) => {
    if (arr.length === combN) {
      const val = arr.map((v) => nums[v]).join(" ");
      if (!set.has(val)) {
        set.add(val);
        answer.push(val);
      }

      return;
    }

    for (let i = start; i < n; i++) {
      arr.push(i);
      dfs(arr, i + 1);
      arr.pop();
    }
  };

  dfs([], 0);

  console.log(answer.join("\n"));
};

solution(input);

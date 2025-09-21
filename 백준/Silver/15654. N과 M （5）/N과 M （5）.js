const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 숫자갯수와 조합 길이가 주어진다
// 두번재줄에 숫자들이 주어지는데 정렬이 안된 상태다
// 숫자들을 받고 오름차순으로 정렬한 후
// 중복된 숫자가 없는 순열을 만들어서 출력하면된다
const solution = (input) => {
  const [n, comLen] = input[0].split(" ").map((v) => Number(v));
  const nums = input[1].split(" ").map((v) => Number(v));
  nums.sort((a, b) => a - b);

  const answer = [];

  const backTrack = (arr) => {
    if (arr.length === comLen) {
      answer.push(arr.join(" "));
      return;
    }

    for (let i = 0; i < n; i++) {
      const val = nums[i];
      if (arr.includes(val)) continue;
      arr.push(val);
      backTrack(arr);
      arr.pop();
    }
  };

  backTrack([]);

  console.log(answer.join("\n"));
};

solution(input);

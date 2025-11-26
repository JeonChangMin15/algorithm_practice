const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 오름차순으로 정렬한 후 인덱스로 중복없이 넣는다
// 그 다음에 해당 조합이 있는지 확인한 후 추가하면 된다
const solution = (input) => {
  const [n, combN] = input[0].split(" ").map((v) => Number(v));
  const nums = input[1].split(" ").map((v) => Number(v));
  nums.sort((a, b) => a - b);

  const answer = [];

  const backTrack = (arr) => {
    if (arr.length === combN) {
      const vals = arr.map((v) => nums[v]);
      const combStr = vals.join(" ");
      if (!answer.includes(combStr)) {
        answer.push(combStr);
      }
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

  console.log(answer.join("\n"));
};

solution(input);

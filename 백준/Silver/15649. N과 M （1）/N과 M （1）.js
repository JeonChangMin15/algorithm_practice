const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

// 백트레킹을 한다 arr, start로 돌리면서 length에 도달하면 출력
const solution = (input) => {
  const [n, sizeN] = input[0].split(" ").map((v) => Number(v));

  const backTrack = (arr) => {
    if (arr.length === sizeN) {
      console.log(arr.join(" "));
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (arr.includes(i)) continue;
      arr.push(i);
      backTrack(arr, i + 1);
      arr.pop();
    }
  };

  backTrack([]);
};

solution(input);

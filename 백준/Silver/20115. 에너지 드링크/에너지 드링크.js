// 첫번째줄에는 드링크 갯수가 주어지고
// 두번째줄에는 드링크 용량이 주어진다
// 오름차순으로 sort하고나서
// 마지막 하나만 제외하고 전부다 반토막내서 마지막으로 큰것에대가 넣으면 된다

const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");

const solution = (input) => {
  const n = Number(input[0]);
  const size = input[1].split(" ").map((v) => Number(v));
  size.sort((a, b) => a - b);
  let answer = 0;
  answer += size[n - 1];
  for (let i = 0; i < n - 1; i++) {
    answer += size[i] / 2;
  }

  console.log(answer);
};

solution(input);

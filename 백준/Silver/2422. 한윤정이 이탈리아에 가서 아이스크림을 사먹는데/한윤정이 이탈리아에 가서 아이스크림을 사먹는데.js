const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");


// 첫번째줄에는 아이스크림 종류수, 조합개수
// 아이스크림을 3가지를 고르는데 조합을 피해서 고를 수 있는 경우의 수를 출력한다
// 1부터 N까지 3가지 고를 수 있는 조합을 만들고
// 해당 조합이 맛없는 조합이랑 되는지 for문에서 확인한다
const solution = (input) => {
  const [n, m] = input[0].split(" ").map((v) => Number(v));
  const notComb = Array(n + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(false));

  for (let i = 1; i < input.length; i++) {
    const [n1, n2] = input[i].split(" ").map((v) => Number(v));

    notComb[n1][n2] = true;
    notComb[n2][n1] = true;
  }

  let cnt = 0;

  for (let i = 1; i <= n - 2; i++) {
    for (let j = i + 1; j <= n - 1; j++) {
      if (notComb[i][j]) continue;
      for (let k = j + 1; k <= n; k++) {
        if (notComb[i][k] || notComb[j][k]) continue;
        cnt += 1;
      }
    }
  }

  console.log(cnt);
};

solution(input);

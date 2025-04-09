const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 도시의 갯수가 주어지고
// 두번째줄에는 도로의 길이가 주어진다
// 세번째줄에는 각 도시마다 리터당 가격이다
// 도로의 길이만큼 for문 돌리면서 주유소의 가격의 최소인걸 갱신해주면된다
const solution = (input) => {
  const cityN = BigInt(input[0]); // cityN은 사실 계산에 안 쓰이지만, BigInt 처리
  const cityLen = input[1].split(" ").map((v) => BigInt(v));
  const cost = input[2].split(" ").map((v) => BigInt(v));

  let minCost = cost[0];
  let totalCost = 0n;

  for (let i = 0; i < cityLen.length; i++) {
    const curCost = cost[i];
    if (curCost < minCost) {
      minCost = curCost;
    }
    totalCost += cityLen[i] * minCost;
  }

  console.log(totalCost.toString()); // BigInt는 문자열로 출력해야 함
};

solution(input);

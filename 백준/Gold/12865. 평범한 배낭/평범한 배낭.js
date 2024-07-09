const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// N개의 물건이 있고 각 물건은 무게W, 가치 V를 가진다
// 최대 K만큼의 무게만 넣을 수 있다. 가치의 최댓값을 알려주자.
const solution = (input) => {
  const [productN, maxWeight] = input[0].split(" ").map((v) => Number(v));
  const products = [[0, 0]];

  for (let i = 1; i < input.length; i++) {
    products.push(input[i].split(" ").map((v) => Number(v)));
  }

  const dp = Array(productN + 1)
    .fill(0)
    .map((v) => Array(maxWeight + 1).fill(0));

  // dp[i][w] 최대무게가 w 인 가방에서 i번째 물건까지 판단했을 때의 최대 가치
  // dp[k+1][w] = dp[k][w] 물건의 무게가 최대 배낭 무게를 초과
  // 초과하지 않으면 넣지않는다, 넣는다 두가지로 분류
  // 넣지않으면 dp[k+1][w] = dp[k][w]
  // 넣는다면 dp[1][6] = 4 + dp[0][3]
  // dp[k][w] = k의 가방 가치 + dp[k-1][w-m]

  for (let bag = 1; bag <= productN; bag++) {
    for (let w = 1; w <= maxWeight; w++) {
      const [curW, curV] = products[bag];
      if (w - curW >= 0) {
        dp[bag][w] = Math.max(dp[bag - 1][w - curW] + curV, dp[bag - 1][w]);
      } else {
        dp[bag][w] = dp[bag - 1][w];
      }
    }
  }

  console.log(dp[productN][maxWeight]);
};

solution(input);

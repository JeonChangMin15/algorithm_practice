const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");


const solution = (input) => {
  const n = Number(input[0]);
  const time = [];
  const cost = [];

  for (let i = 1; i < input.length; i++) {
    const [t, m] = input[i].split(" ").map((v) => Number(v));
    time.push(t);
    cost.push(m);
  }

  let max = 0;

  const dfs = (day, price) => {
    if (day > n) return;
    if (day === n - 1 && time[n - 1] === 1) {
      max = Math.max(price + cost[day], max);
      return;
    }

    max = Math.max(price, max);

    for (let i = day + time[day]; i <= n; i++) {
      dfs(i, price + cost[day]);
    }
  };

  for (let i = 0; i < n; i++) {
    dfs(i, 0);
  }

  console.log(max);
};

solution(input);

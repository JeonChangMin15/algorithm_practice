const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫째줄에 카드 N장 둘째줄에는 K장을 선택
// 셋째줄부터 카드숫자가 주어짐
// 만들 수 있는 정수는 몇가지인가?
// dfs 조합으로 set으로 카운팅하면될거같다

const solution = (input) => {
  const n = Number(input[0]);
  const k = Number(input[1]);
  const cards = [];

  for (let i = 2; i < input.length; i++) {
    cards.push(Number(input[i]));
  }

  const set = new Set();

  const dfs = (arr) => {
    if (arr.length === k) {
      const num = arr.map((v) => cards[v]).join("");
      set.add(num);
      return;
    }

    for (let i = 0; i < cards.length; i++) {
      if (!arr.includes(i)) {
        arr.push(i);
        dfs(arr);
        arr.pop();
      }
    }
  };

  dfs([]);

  console.log(set.size);
};

solution(input);

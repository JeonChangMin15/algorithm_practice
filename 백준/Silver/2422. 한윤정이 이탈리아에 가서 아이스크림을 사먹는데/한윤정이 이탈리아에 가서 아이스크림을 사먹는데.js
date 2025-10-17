const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 아이스크림을 3가지를 선택해서 먹으려고 한다
// 같이 먹으면 안되는 조합을 피해서 먹는다
// 가능한 조합을 출력한다
// 삼중 for문으로 체크한다
// 해당 배열에 모든 피하는 조합을 체크한 후 패스하면 +1
// 전체 조합에서 안되는 조합의 갯수를 빼는 방식으로 구해야된다

const solution = (input) => {
  const [n, checkN] = input[0].split(" ").map((v) => Number(v));
  const checkComb = [];

  for (let i = 1; i < checkN + 1; i++) {
    const arr = input[i].split(" ").map((v) => Number(v));
    checkComb.push(arr);
  }

  let total = 0;
  const notCombSet = new Set();

  const backTracking = (arr, start) => {
    if (arr.length === 3) {
      total += 1;
      return;
    }

    for (let i = start; i <= n; i++) {
      arr.push(i);
      backTracking(arr, i + 1);
      arr.pop();
    }
  };

  backTracking([], 1);

  for (const [n1, n2] of checkComb) {
    for (let i = 1; i <= n; i++) {
      if (i !== n1 && i !== n2) {
        const comb = [n1, n2, i].sort((a, b) => a - b).join(" ");
        notCombSet.add(comb);
      }
    }
  }

  console.log(total - notCombSet.size);
};

solution(input);

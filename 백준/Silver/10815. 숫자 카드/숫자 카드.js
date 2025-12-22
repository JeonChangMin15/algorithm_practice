const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 카드 갯수, 두번째줄에 상근이 카드
// 세번째줄에 테스트 카드 갯수, 네번째는 카드 리스트
// 상근이의 카드 리스트를 오름차순으로 하고 각 케이스마다
// 이분탐색으로 존재하는지 아닌지 탐색을 한다 -> 있으면 1 없으면 0

const solution = (input) => {
  const cardN = Number(input[0]);
  const cardList = input[1].split(" ").map((v) => Number(v));
  cardList.sort((a, b) => a - b);

  const testN = Number(input[2]);
  const testList = input[3].split(" ").map((v) => Number(v));
  const answer = [];

  for (let i = 0; i < testN; i++) {
    const testVal = testList[i];
    let lt = 0;
    let rt = cardN - 1;
    let isExist = false;
    while (lt <= rt) {
      const mid = Math.floor((lt + rt) / 2);

      if (testVal === cardList[mid]) {
        isExist = true;
        break;
      } else if (testVal > cardList[mid]) {
        lt = mid + 1;
      } else {
        rt = mid - 1;
      }
    }

    answer.push(isExist ? 1 : 0);
  }

  console.log(answer.join(" "));
};

solution(input);

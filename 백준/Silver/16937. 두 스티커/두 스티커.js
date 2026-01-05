const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// height, width가 종이가 있고 스티커가 주어진다
// 2개를 붙이는데 스티커를 90도 회전 시키는것은 가능하다
// 90도 회전 시키는것은 가능하고 종이를 벗어나는것은 안된다
// 2개를 붙엿을때 최대 넓이를 구하고 2개를 붙일 수 없다면 0을 출력
// 두개를 붙엿을때 가능한지 여부를 판단해야한다
// 일단 먼저 돌린걸 각 돌리기 케이스 4가지를 생각을 한 후 에
// 가로정렬 세로 정렬 중 하나라도 만족하면 넣는다
const solution = (input) => {
  const [height, width] = input[0].split(" ").map((v) => Number(v));
  const paperN = Number(input[1]);
  const paperArr = [];

  for (let i = 2; i < 2 + paperN; i++) {
    const [n1, n2] = input[i].split(" ").map((v) => Number(v));
    paperArr.push([n1, n2]);
  }

  let answer = 0;

  for (let i = 0; i < paperArr.length - 1; i++) {
    for (let j = i + 1; j < paperArr.length; j++) {
      const [h1, w1] = paperArr[i];
      const [h2, w2] = paperArr[j];
      const rotateCases = [
        [h1, w1, h2, w2],
        [w1, h1, h2, w2],
        [h1, w1, w2, h2],
        [w1, h1, w2, h2],
      ];

      for (const [y1, x1, y2, x2] of rotateCases) {
        if (x1 + x2 <= width && Math.max(y1, y2) <= height) {
          answer = Math.max(answer, x1 * y1 + x2 * y2);
        }

        if (y1 + y2 <= height && Math.max(x1, x2) <= width) {
          answer = Math.max(answer, x1 * y1 + x2 * y2);
        }
      }
    }
  }

  console.log(answer);
};

solution(input);

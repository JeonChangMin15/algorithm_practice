const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const [height, width] = input[0].split(" ").map((v) => Number(v));
  const stickerN = Number(input[1]);
  const sticker = [];

  for (let i = 2; i < 2 + stickerN; i++) {
    const [n1, n2] = input[i].split(" ").map((v) => Number(v));
    sticker.push([n1, n2]);
  }

  let answer = 0;
  // 조건을 다시 생각하자
  // 먼저 스티커중 가장 긴부분이 모눈종이보다 크면 스킵
  // 모눈종이는 고정시키고 스티커를 돌린다
  // 거기서 sh1+sh2 <= height, Math.max(sw1, sw2) <= width
  // sw1+sw2 <= width, Math.max(sh1, sh2) <= height
  for (let i = 0; i < stickerN - 1; i++) {
    for (let j = i + 1; j < stickerN; j++) {
      const [stickerH1, stickerW1] = sticker[i];
      const [stickerH2, stickerW2] = sticker[j];

      const cases = [
        [stickerH1, stickerW1, stickerH2, stickerW2],
        [stickerW1, stickerH1, stickerH2, stickerW2],
        [stickerH1, stickerW1, stickerW2, stickerH2],
        [stickerW1, stickerH1, stickerW2, stickerH2],
      ];

      for (const [sh1, sw1, sh2, sw2] of cases) {
        if (sh1 + sh2 <= height && Math.max(sw1, sw2) <= width) {
          answer = Math.max(answer, sh1 * sw1 + sh2 * sw2);
        }

        if (sw1 + sw2 <= width && Math.max(sh1, sh2) <= height) {
          answer = Math.max(answer, sh1 * sw1 + sh2 * sw2);
        }
      }
    }
  }

  console.log(answer);
};

solution(input);

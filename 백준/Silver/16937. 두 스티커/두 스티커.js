const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));


const solution = (input) => {
  const [N, M] = input[0]
    .split(" ")
    .map((v) => Number(v))
    .sort((a, b) => a - b);

  const n = Number(input[1]);
  const arr = [];
  let max = 0;

  for (let i = 2; i < input.length; i++) {
    arr.push(
      input[i]
        .split(" ")
        .map((v) => Number(v))
        .sort((a, b) => a - b)
    );
  }

  if (arr.length === 1) {
    console.log(0);
    return;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const [n1, n2] = arr[i];
      const [n3, n4] = arr[j];

      const len1 = n1 + n3;
      const len2 = Math.max(n2, n4);

      const len3 = Math.max(n1, n3);
      const len4 = n2 + n4;

      const len5 = n1 + n4;
      const len6 = Math.max(n2, n3);

      const len7 = Math.max(n1, n4);
      const len8 = n2 + n3;

      if ((len1 <= N && len2 <= M) || (len2 <= N && len1 <= M)) {
        max = Math.max(max, n1 * n2 + n3 * n4);
        continue;
      }

      if ((len3 <= N && len4 <= M) || (len4 <= N && len3 <= M)) {
        max = Math.max(max, n1 * n2 + n3 * n4);
        continue;
      }

      if ((len5 <= N && len6 <= M) || (len6 <= N && len5 <= M)) {
        max = Math.max(max, n1 * n2 + n3 * n4);
        continue;
      }

      if ((len7 <= N && len8 <= M) || (len8 <= N && len7 <= M)) {
        max = Math.max(max, n1 * n2 + n3 * n4);
        continue;
      }
    }
  }

  console.log(max);
};

solution(input);

const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 1-N 사람이있고 순서대로 K번째 사람을 제거
// 1 2 4 5 7  3 6
const solution = (input) => {
  const [peopleN, cnt] = input[0].split(" ").map((v) => Number(v));
  const people = [];
  for (let i = 1; i <= peopleN; i++) {
    people.push(i);
  }

  const deleted = [];
  let start = 1;

  while (people.length > 0) {
    const startIndex = people.indexOf(start);
    const deleteTargetIndex = (startIndex + cnt - 1) % people.length;
    start = people[(startIndex + cnt) % people.length];

    const removed = people.splice(deleteTargetIndex, 1);
    deleted.push(removed[0]);
  }

  console.log("<" + deleted.join(", ") + ">");
};

solution(input);

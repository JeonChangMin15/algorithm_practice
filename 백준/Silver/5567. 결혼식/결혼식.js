const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 동기수 두번째줄에 관계수가 주어진다
// 2번째줄부터 관계가 주어진다. 친구와 친구의 친구까지 초대를 한다
// 초대할 사람의 수를 구해라
// bfs로 depth가 2이하면 추가를하면 된다
const solution = (input) => {
  const peopleN = Number(input[0]);
  const lineN = Number(input[1]);
  const graph = Array(peopleN + 1)
    .fill(0)
    .map((v) => []);

  for (let i = 2; i < 2 + lineN; i++) {
    const [n1, n2] = input[i].split(" ").map((v) => Number(v));
    graph[n1].push(n2);
    graph[n2].push(n1);
  }

  const queue = [[1, 0]];
  const visited = Array(peopleN + 1).fill(false);
  visited[1] = true;

  let answer = 0;

  while (queue.length) {
    const [person, depth] = queue.shift();

    if (depth && depth < 3) {
      answer += 1;
    }

    for (const nextPerson of graph[person]) {
      if (visited[nextPerson]) continue;
      queue.push([nextPerson, depth + 1]);
      visited[nextPerson] = true;
    }
  }

  console.log(answer);
};

solution(input);

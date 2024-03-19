// const input = require("fs")
//   .readFileSync("example.txt", "utf8")
//   .trim()
//   .split("\n")
//   .map((line) => line.replace(/\r/, ""));

const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫째줄에 회원의 수가 있다. 둘째쭐부터 두개의 회원번호가 있는데 두 회원이 서로 친구
// 회원번호는 1부터 시작을한다. 마지막줄에는 -1이 두개있다
// 그래프를 하나 만들어서 각 사람마다 친구를 다 넣는다
// 그리고 for문으로 모든 사람마다 회원 점수를 체킹을 한다
// bfs로 체킹하는데 1씩 증가하는 관계를 넣고, visited로 확인을 한다
// 그리고나서 관계중 가장 큰 값을 리턴해서 해당 사람의 점수를 등록한다
// 가장 작은 점수를 찾아서 해당 점수에 맞는 사람을 오름차순으로 모두 출력한다
// 첫째줄에 점수와 사람수, 둘째줄에 회원번호를 오름차순으로 출력하면된다.
const solution = (input) => {
  const n = Number(input[0]);
  const graph = {};
  for (let i = 1; i <= n; i++) {
    graph[i] = [];
  }
  for (let i = 1; i < input.length - 1; i++) {
    const [n1, n2] = input[i].split(" ").map((v) => Number(v));
    graph[n1].push(n2);
    graph[n2].push(n1);
  }

  const bfs = (startPeople) => {
    const visited = Array(n + 1).fill(false);
    const personLen = Array(n + 1).fill(0);

    visited[startPeople] = true;
    const queue = [[startPeople, 0]];

    while (queue.length) {
      const [personNum, relationLen] = queue.shift();
      personLen[personNum] = relationLen;

      for (let i = 0; i < graph[personNum].length; i++) {
        const next = graph[personNum][i];
        if (visited[next]) continue;
        queue.push([next, relationLen + 1]);
        visited[next] = true;
      }
    }

    return Math.max(...personLen);
  };

  const score = Array(n + 1).fill(0);
  score[0] = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i <= n; i++) {
    const value = bfs(i);
    score[i] = value;
  }

  const minScore = Math.min(...score);
  const peopleIndex = [];
  for (let i = 1; i <= n; i++) {
    if (score[i] === minScore) {
      peopleIndex.push(i);
    }
  }

  peopleIndex.sort((a, b) => a - b);
  console.log(minScore, peopleIndex.length);
  console.log(peopleIndex.join(" "));
};

solution(input);

const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫째줄에 N(노드 갯수), M(연결 수)
// 두번 째줄은 start, target
// 그다음 줄부터 M만큼 연결된 노드의 쌍들이 주어진다
// 1부터 N까지 노드가 주어져ㅑ있고 위치에서 -+1, 연결된 지점을 갈 수 있고 다 1초 소요
// bfs로 마킹하면서 가면된다

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.rear = null;
    this.length = 0;
  }

  enqueue(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      this.rear.next = node;
    }
    this.rear = node;
    this.length++;
  }

  dequeue() {
    if (!this.head) {
      return false;
    }
    const data = this.head.data;
    this.head = this.head.next;
    this.length--;

    return data;
  }
}

const solution = (input) => {
  const [nodeN, lineN] = input[0].split(" ").map((v) => Number(v));
  const [startNode, endNode] = input[1].split(" ").map((v) => Number(v));
  const graph = {};
  for (let i = 1; i <= nodeN; i++) {
    graph[i] = [];
  }

  for (let i = 2; i < 2 + lineN; i++) {
    const [n1, n2] = input[i].split(" ").map((v) => Number(v));
    graph[n1].push(n2);
    graph[n2].push(n1);
  }

  const queue = new Queue();
  queue.enqueue([startNode, 0]);

  const visited = Array(nodeN + 1).fill(false);
  visited[startNode] = true;

  let answer = 0;

  while (queue.length) {
    const [curNode, curTime] = queue.dequeue();
    if (curNode === endNode) {
      answer = curTime;
      break;
    }

    if (curNode - 1 >= 1 && !visited[curNode - 1]) {
      visited[curNode - 1] = true;
      queue.enqueue([curNode - 1, curTime + 1]);
    }

    if (curNode + 1 <= nodeN && !visited[curNode + 1]) {
      visited[curNode + 1] = true;
      queue.enqueue([curNode + 1, curTime + 1]);
    }

    for (const nextNode of graph[curNode]) {
      if (visited[nextNode]) continue;
      visited[nextNode] = true;
      queue.enqueue([nextNode, curTime + 1]);
    }
  }

  console.log(answer);
};

solution(input);

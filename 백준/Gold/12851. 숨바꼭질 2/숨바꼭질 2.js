const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

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
  const [start, end] = input[0].split(" ").map((v) => Number(v));
  const visited = Array(100001).fill(Infinity);
  visited[start] = 0;

  const queue = new Queue();
  queue.enqueue([start, 0]);

  let minTime = Infinity;
  let cnt = 0;

  while (queue.length) {
    const [pos, curTime] = queue.dequeue();
    if (curTime > minTime) break;

    if (pos === end) {
      minTime = curTime;
      cnt += 1;
    }

    if (pos * 2 <= 100000 && curTime + 1 <= visited[pos * 2]) {
      queue.enqueue([pos * 2, curTime + 1]);
      visited[pos * 2] = curTime + 1;
    }

    if (pos + 1 <= 100000 && curTime + 1 <= visited[pos + 1]) {
      queue.enqueue([pos + 1, curTime + 1]);
      visited[pos + 1] = curTime + 1;
    }

    if (pos - 1 >= 0 && curTime + 1 <= visited[pos - 1]) {
      queue.enqueue([pos - 1, curTime + 1]);
      visited[pos - 1] = curTime + 1;
    }
  }

  console.log(minTime);
  console.log(cnt);
};

solution(input);

const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

class Queue {
  constructor() {
    this._arr = [];
    this._head = 0;
  }

  // 큐 뒤에 삽입
  enqueue(value) {
    this._arr.push(value);
  }

  // 큐에서 꺼내기
  dequeue() {
    if (this.isEmpty()) return undefined;
    const val = this._arr[this._head];
    this._head++;
    // 메모리 방치 방지: 헤드가 배열 절반을 넘으면 앞쪽 요소들 잘라내기
    if (this._head * 2 >= this._arr.length) {
      this._arr = this._arr.slice(this._head);
      this._head = 0;
    }
    return val;
  }

  // 비었는지 검사
  isEmpty() {
    return this._head >= this._arr.length;
  }
}

const solution = (input) => {
  const [colN, rowN] = input[0].split(" ").map((v) => Number(v));
  const grid = [];

  for (let i = 1; i <= rowN; i++) {
    grid.push(input[i].split(" ").map((v) => Number(v)));
  }

  const queue = new Queue();

  for (let i = 0; i < rowN; i++) {
    for (let j = 0; j < colN; j++) {
      if (grid[i][j] === 1) {
        queue.enqueue([i, j, 0]);
      }
    }
  }

  let day = 0;

  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  while (!queue.isEmpty()) {
    const [x, y, d] = queue.dequeue();
    day = Math.max(day, d);

    for (const [dx, dy] of dirs) {
      const nextX = x + dx;
      const nextY = y + dy;
      const isValid =
        nextX >= 0 &&
        nextX < rowN &&
        nextY >= 0 &&
        nextY < colN &&
        grid[nextX][nextY] === 0;

      if (isValid) {
        queue.enqueue([nextX, nextY, d + 1]);
        grid[nextX][nextY] = 1;
      }
    }
  }

  let isValid = true;

  for (let i = 0; i < rowN; i++) {
    for (let j = 0; j < colN; j++) {
      if (grid[i][j] === 0) isValid = false;
    }
  }

  console.log(isValid ? day : -1);
};

solution(input);

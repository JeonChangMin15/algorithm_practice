const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

// 첫째줄에는 M가로칸수(Col), N(세로칸수(Row)
// 둘째줄부터 토마토의 정보가 주어진다
// 1은 익음, 0은 안익음, -1은 토마토가 없다
// 토마토가 다 익을때 까지 최소 날짜를 출력
// 토마토가 하나라도 익지 못한다면 -1을 출력 처음부터 다 익어있으면 0
// 일단 이중for문으로 익은 토마토가 있는 위치를 다 넣고 시작읋 한다
// bfs로 상하좌우 탐색을 해서 0일때만 큐에다가 넣고 day +1
// 다 끝나면 하나라도 0이 있으면 -1 출력하면된다

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// 큐 클래스
class Queue {
  constructor() {
    this.head = null; // 제일 앞 노드
    this.rear = null; // 제일 뒤 노드
    this.length = 0; // 노드의 길이
  }

  enqueue(data) {
    // 노드 추가.
    const node = new Node(data); // data를 가진 node를 만들어준다.
    if (!this.head) {
      // 헤드가 없을 경우 head를 해당 노드로
      this.head = node;
    } else {
      this.rear.next = node; // 아닐 경우 마지막의 다음 노드로
    }
    this.rear = node; // 마지막을 해당 노드로 한다.
    this.length++;
  }

  dequeue() {
    // 노드 삭제.
    if (!this.head) {
      // 헤드가 없으면 한 개도 없는 것이므로 false를 반환.
      return false;
    }
    const data = this.head.data; // head를 head의 다음 것으로 바꿔주고 뺀 data를 return
    this.head = this.head.next;
    this.length--;

    return data;
  }
}

const solution = (input) => {
  const [colN, rowN] = input[0].split(" ").map((v) => Number(v));
  const grid = [];

  for (let i = 1; i < input.length; i++) {
    grid.push(input[i].split(" ").map((v) => Number(v)));
  }

  const queue = new Queue();
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];
  let day = 0;

  for (let i = 0; i < rowN; i++) {
    for (let j = 0; j < colN; j++) {
      if (grid[i][j] === 1) {
        queue.enqueue([i, j, 0]);
      }
    }
  }

  while (queue.length) {
    const [x, y, n] = queue.dequeue();
    day = Math.max(day, n);

    for (let [dx, dy] of dirs) {
      const nextX = x + dx;
      const nextY = y + dy;

      const isValid =
        nextX >= 0 &&
        nextX < rowN &&
        nextY >= 0 &&
        nextY < colN &&
        grid[nextX][nextY] === 0;

      if (isValid) {
        queue.enqueue([nextX, nextY, n + 1]);
        grid[nextX][nextY] = 1;
      }
    }
  }

  for (let i = 0; i < rowN; i++) {
    for (let j = 0; j < colN; j++) {
      if (grid[i][j] === 0) {
        console.log(-1);
        return;
      }
    }
  }

  console.log(day);
};

solution(input);

const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

//첫째줄에 세로 가로 길이가 주어진다.
// 두번째줄에는 블록이 쌓인 높이가 주어지고 세로보다는 같걱나 작다
// 3 0 1 4
// 빗물의 총량을 구해야된다
// 가장 높은 위치의 벽을 먼구하고 오른쪽에 있는건 자기보다 우측에서 가장큰 높이의 벽과의 차이
// 자기보다 좌측에 있는건 마찬가지로 좌측에 있는거에서 가장 큰거의 차이
// 차이는 0보다 클때만 더한다.
const solution = (input) => {
  const [limitHeight, width] = input[0].split(" ").map((v) => Number(v));
  const height = input[1].split(" ").map((v) => Number(v));
  const maxHight = Math.max(...height);
  const maxHightIndex = height.indexOf(maxHight);

  let lt = maxHightIndex - 1;
  let rt = maxHightIndex + 1;
  let answer = 0;
  while (lt > 0 || rt < width - 1) {
    const leftMaxHeight = Math.max(...height.slice(0, lt));
    const rightMaxHeight = Math.max(...height.slice(rt + 1, width));
    const ltDiff =
      leftMaxHeight - height[lt] > 0 ? leftMaxHeight - height[lt] : 0;
    const rtDiff =
      rightMaxHeight - height[rt] > 0 ? rightMaxHeight - height[rt] : 0;

    answer += ltDiff + rtDiff;

    lt--;
    rt++;
  }

  console.log(answer);
};

solution(input);

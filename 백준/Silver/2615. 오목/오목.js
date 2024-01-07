const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");


// 가로 세로 19줄 바둑판에 검은색1, 흰색2 바둑알이 주어진다
// 오목 승부 판단 -> 가로 세로 대각선 모두 포함해서 연속해서 5개 놓이면 이긴다
// 6개 이상은 이긴것이 아니다. 검은색이 이기면 1, 흰색이 이기면 2, 무승부면 0
// 승부가 결정되면 둘째 줄 바둑알중에서 가장 왼쪽에 있는 , 가장 위에 있는 바둑알 가로 세로 번호를 출력

// 바둑점 이중for문을 돌면서 자기 위치에서 자기와 같은 바둑돌이 연속해서 4개가 더 있는지 확인하면된다
// 자기 위치에서 가로로 4칸 검사, 세로로 4칸검사, 대각선 오른쪽 검사(오른쪽+1, 아래로 +1), 대각선 왼쪽 검사(오른쪽 -1, 아래로 +1)
// 그리고 본인 포지션에서 5개만 검사하는게 아니라 해당 오목의 양끝 +1,-1을 자기자신과 다른지 체킹해야된다!

const solution = (input) => {
  const grid = [];
  for (let i = 0; i < input.length; i++) {
    const row = input[i].split(" ").map((v) => Number(v));
    grid.push(row);
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const user = grid[i][j];
      if (user === 0) continue;
      // 가로 왼쪽부터 5개 검사
      if (j <= 14) {
        const isValid =
          grid[i][j] === user &&
          grid[i][j + 1] === user &&
          grid[i][j + 2] === user &&
          grid[i][j + 3] === user &&
          grid[i][j + 4] === user;
        const prevLeft = j - 1 >= 0 ? grid[i][j - 1] !== user : true;
        const nextRight = j + 5 <= 18 ? grid[i][j + 5] !== user : true;
        if (isValid && prevLeft && nextRight) {
          console.log(user);
          const position = [i + 1, j + 1];
          console.log(position.join(" "));
          return;
        }
      }

      // 세로 왼쪽부터 위에서 5개 검사
      if (i <= 14) {
        const isValid =
          grid[i][j] === user &&
          grid[i + 1][j] === user &&
          grid[i + 2][j] === user &&
          grid[i + 3][j] === user &&
          grid[i + 4][j] === user;
        const prevUp = i - 1 >= 0 ? grid[i - 1][j] !== user : true;
        const nextDown = i + 5 <= 18 ? grid[i + 5][j] !== user : true;
        if (isValid && prevUp && nextDown) {
          console.log(user);
          const position = [i + 1, j + 1];
          console.log(position.join(" "));
          return;
        }
      }

      // 가로 +1, 세로 +1 검사
      if (i <= 14 && j <= 14) {
        const isValid =
          grid[i][j] === user &&
          grid[i + 1][j + 1] === user &&
          grid[i + 2][j + 2] === user &&
          grid[i + 3][j + 3] === user &&
          grid[i + 4][j + 4] === user;
        const prevUP =
          i - 1 >= 0 && j - 1 >= 0 ? grid[i - 1][j - 1] !== user : true;
        const nextDown =
          i + 5 <= 18 && j + 5 <= 18 ? grid[i + 5][j + 5] !== user : true;
        if (isValid && prevUP && nextDown) {
          console.log(user);
          const position = [i + 1, j + 1];
          console.log(position.join(" "));
          return;
        }
      }

      // 가로 -1, 세로 +1 검사
      if (i <= 14 && j >= 4) {
        const isValid =
          grid[i][j] === user &&
          grid[i + 1][j - 1] === user &&
          grid[i + 2][j - 2] === user &&
          grid[i + 3][j - 3] === user &&
          grid[i + 4][j - 4] === user;
        const prevUp =
          i - 1 >= 0 && j + 1 <= 18 ? grid[i - 1][j + 1] !== user : true;
        const nextDown =
          i + 5 <= 18 && j - 5 >= 0 ? grid[i + 5][j - 5] !== user : true;
        if (isValid && prevUp && nextDown) {
          console.log(user);
          const position = [i + 5, j - 3];
          console.log(position.join(" "));
          return;
        }
      }
    }
  }

  console.log(0);
};

solution(input);

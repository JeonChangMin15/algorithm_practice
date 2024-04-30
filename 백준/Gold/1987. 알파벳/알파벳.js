const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [r, c] = input[0].split(' ').map(Number);
const arr = [];
for (let i = 1; i <= r; i++) arr.push(input[i]);

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
const visited = new Array(26).fill(false);
let maxDepth = 0;

function dfs(depth, x, y) {
  maxDepth = Math.max(maxDepth, depth);
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx < 0 || nx >= r || ny < 0 || ny >= c) continue;
    if (visited[arr[nx][ny].charCodeAt() - 65]) continue;
    visited[arr[nx][ny].charCodeAt() - 65] = true;
    dfs(depth + 1, nx, ny);
    visited[arr[nx][ny].charCodeAt() - 65] = false;
  }
}

visited[arr[0][0].charCodeAt() - 65] = true;
dfs(1, 0, 0);

console.log(maxDepth);

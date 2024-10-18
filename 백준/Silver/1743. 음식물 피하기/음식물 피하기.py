import sys
sys.setrecursionlimit(10**6)

rowN, colN, n = list(map(int, input().split()))
grid = [[0]*colN for _ in range(rowN)]

for i in range(n):
  x, y = list(map(int, input().split()))
  grid[x-1][y-1] = 1

answer = 0 

def dfs(x, y):
  if x < 0 or x >= rowN or y < 0 or y >= colN or grid[x][y] == 0:
    return 0

  grid[x][y] = 0

  up = dfs(x-1, y)
  down = dfs(x+1, y)
  left = dfs(x, y-1)
  right = dfs(x, y+1)

  return 1 + up + down + left + right

for i in range(rowN):
  for j in  range(colN):
    if grid[i][j] == 1:
      answer = max(answer, dfs(i, j))

print(answer)
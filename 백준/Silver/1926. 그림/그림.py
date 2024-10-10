import sys
sys.setrecursionlimit(10**6)

rowN, colN = list(map(int, input().split()))
grid = []

for i in range(rowN):
  grid.append(list(map(int, input().split())))

def dfs(x, y):
  if x < 0 or x >= rowN or y < 0 or y >= colN or grid[x][y]==0:
    return 0

  grid[x][y] = 0
  up = dfs(x-1, y)
  down = dfs(x+1, y)
  left = dfs(x, y-1)
  right = dfs(x, y+1)

  return 1 + up + down + left + right

maxArea = 0
cnt = 0

for i in range(rowN):
  for j in range(colN):
    if grid[i][j] == 1:
      maxArea = max(maxArea, dfs(i, j))
      cnt += 1

print(cnt)
print(maxArea)
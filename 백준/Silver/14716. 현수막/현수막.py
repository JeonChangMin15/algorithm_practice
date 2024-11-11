import sys
sys.setrecursionlimit(10**5)

rowN, colN = list(map(int, input().split()))
grid = []

for i in range(rowN):
  grid.append(list(map(int, input().split())))

area = 0
dirs = [[1,0],[-1,0],[0,1],[0,-1],[-1,-1],[-1,1],[1,-1],[1,1]]

def dfs(x, y):
  if x < 0 or x >= rowN or y < 0 or y >= colN or grid[x][y] == 0:
    return

  grid[x][y] = 0
  for dx, dy in dirs:
    dfs(x + dx, y+ dy)

for i in range(rowN):
  for j in range(colN):
    if grid[i][j] == 1:
      dfs(i, j)
      area += 1

print(area)
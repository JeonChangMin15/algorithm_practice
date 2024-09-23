import sys
sys.setrecursionlimit(10**6)

rowN, colN = list(map(int, input().split()))
grid = []

for i in range(rowN):
  grid.append(list(map(int, input())))

answer = "NO"

def dfs(x, y):
  global answer
  if x < 0 or x >= rowN or y < 0 or y >= colN or grid[x][y] == 1:
    return

  if x == rowN-1:
    answer = 'YES'

  grid[x][y] = 1

  dfs(x-1, y)
  dfs(x+1, y)
  dfs(x, y-1)
  dfs(x, y+1)

for y in range(colN):
  if grid[0][y] == 1 or answer == 'YES':
    continue
  dfs(0, y)


print(answer)
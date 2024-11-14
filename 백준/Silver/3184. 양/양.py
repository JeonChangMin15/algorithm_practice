import sys
sys.setrecursionlimit(10**5)

rowN, colN = list(map(int, input().split()))
grid = []

for i in range(rowN):
  grid.append(list(input()))

visitd = [[False]*colN for _ in range(rowN)]

curSheep = 0
curWolf = 0

def dfs(x, y):
  global curSheep
  global curWolf

  if x < 0 or x >= rowN or y < 0 or y >= colN or visitd[x][y] or grid[x][y] == '#':
    return

  visitd[x][y] = True

  if grid[x][y] == 'o':
    curSheep +=1
  if grid[x][y] == 'v':
    curWolf += 1

  dfs(x-1, y)
  dfs(x+1, y)
  dfs(x, y-1)
  dfs(x, y+1)

totalSheep = 0
totalWolf = 0

for i in range(rowN):
  for j in range(colN):
    if not visitd[i][j]:
      curSheep = 0
      curWolf = 0

      dfs(i, j)

      if curSheep > curWolf:
        totalSheep += curSheep
      else:
        totalWolf += curWolf

print(totalSheep, totalWolf)